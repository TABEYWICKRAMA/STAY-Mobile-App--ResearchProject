import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function authHeader() {
//   const user = JSON.parse(AsyncStorage.getItem('user') as any);
//   // const user = JSON.parse(AsyncStorage.getItem('user'));

//   if (user && user.accessToken) {
//     // for Node.js Express back-end
//     return {'x-access-token': user.accessToken};
//   } else {
//     return {};
//   }
// }
//

export default function authHeader() {
  const user = JSON.parse(JSON.stringify(AsyncStorage.getItem('user') as any));

  if (user && user.accessToken) {
    return {Authorization: 'Bearer ' + user?.accessToken};
  } else {
    return {};
  }
}
