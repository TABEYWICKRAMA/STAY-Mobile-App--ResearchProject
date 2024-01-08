import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {endPoints} from '../../end_points';
import history from './history';

let renewingToken = false;

axios.defaults.baseURL = endPoints.BASE;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const updateToken = async () => {
  try {
    const data = AsyncStorage.getItem('user');
    if (data) {
      try {
        const userS = JSON.stringify(data);
        const json = JSON.parse(userS);
        const {refreshToken} = json;

        if (renewingToken) {
          //console.log("Token is already being renewed");
          const token = await new Promise((resolve, reject) => {
            const interval = setInterval(function () {
              const data = AsyncStorage.getItem('user');
              if (data) {
                const userS = JSON.stringify(data);
                const json = JSON.parse(userS);

                resolve(json.accessToken);
                clearInterval(interval);
              } else {
                reject('No token found');
                clearInterval(interval);
              }
            }, 1000);
          });
          //console.log("Got the token", token);
          return token;
        }

        renewingToken = true;

        try {
          var instance = axios.create();
          delete instance.defaults.headers.common['Authorization'];

          const res = await instance.post('/auth/refresh', {
            refresh_token: refreshToken,
          });

          if (res.status === 200) {
            AsyncStorage.setItem(
              'user',
              JSON.stringify({
                createdTime: Date.now(),
                refreshToken: refreshToken,
                accessToken: res.data.data.accessToken,
              }),
            );

            renewingToken = false;
            return res.data.access_token;
          } else {
            renewingToken = false;
            AsyncStorage.clear();
            history.navigate('Login' as never, {} as never);
            throw new Error('Cannot renew token');
          }
        } catch (error) {
          console.log('Error Parsing Token', error);
          AsyncStorage.clear();
          // history.push("/login");

          renewingToken = false;
          throw error;
        }
      } catch (error) {
        console.log('Error Parsing Token', error);
      }
    } else {
      renewingToken = false;
      throw new Error('Your session is expired');
    }
  } catch (error) {
    console.log(error);
  }
};

axios.interceptors.request.use(
  config => {
    const data = AsyncStorage.getItem('user');

    if (data) {
      const userS = JSON.stringify(data);
      const json = JSON.parse(userS);
      const token = json.accessToken;

      if (token) {
        config.headers!['Authorization'] = 'Bearer ' + token;
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    try {
      //console.log(error.response)
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === 400
      ) {
        try {
          const token = await updateToken();
          error.config.headers['Authorization'] = 'Bearer ' + token;
          error.config.retries = error.config.retries
            ? error.config.retries + 1
            : 1;
          if (error.config.retries > 3) {
            throw new Error('Maximum retries are done');
          }
          return axios.request(error.config);
        } catch (err) {
          // history.push('/login');
          return Promise.reject(err);
        }
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message &&
        error.response.status === 500
      ) {
        if (
          error.response.data.message.startsWith('no primary server available')
        ) {
          // history.push('/500');
        }
      } else {
        return Promise.reject(error);
      }
    } catch (error) {
      //console.log(error);
      return Promise.reject(error);
    }
  },
);

export default axios;
