import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, BackHandler, Text} from 'react-native';
import styles from './Splash.styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButtonSplash/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserProfileModel} from '../../data/common_models/UserProfile';
import {moderateScale} from 'react-native-size-matters';
// import storage from 'redux-persist/lib/storage';

interface SplashContentProps {}

const SplashContent: React.FunctionComponent<SplashContentProps> = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    // setTimeout;
    // setState(setTimeout);
    // getData('user');
  }, []);
  const navigation = useNavigation();
  // setTimeout(() => {
  //   let user: any;
  //   const _user: any = AsyncStorage.getItem('user');
  //   // const _user: any = TokenService.getUser;

  //   if (_user) {
  //     const userS = JSON.stringify(_user);
  //     user = JSON.parse(userS);
  //     console.log('===USER==>>>>', JSON.stringify(user));
  //   }
  //   if (user != null) {
  //     navigation.navigate('DashoardScreen' as never, {} as never);
  //   }
  // }, 1000);

  const getData = async (key: any) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        console.log('===USER==>>>>', data);
        const userS = JSON.stringify(data);
        console.log('===USER JSON STRINGFIED==>>>>', userS);
        // let usr:
        const accessToken = JSON.parse(data).accessToken;
        console.log('===USER OBJECT ACCESS TOKEN ==>>>>', accessToken);
        navigation.navigate('DashoardScreen' as never, {} as never);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const onSignInPress = () => {
    // navigation.navigate('Login' as never, {} as never);
    navigation.navigate('DashoardScreen' as never, {} as never);
  };
  const onSignUpPress = () => {
    navigation.navigate('Register' as never, {} as never);
  };

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <View
        style={[
          {
            // backgroundColor: 'red',
            // paddingHorizontal: moderateScale(16),
          },
        ]}>
        <Text style={styles.SubHeaderText}>STRESS DETECTION APP</Text>
        <Image
          style={styles.imageLogo}
          blurRadius={1}
          fadeDuration={1}
          loadingIndicatorSource={require('../../assets/images/giphy_loading.gif')}
          source={require('../../assets/images/meter.png')}
        />
        {/* </View> */}
      </View>
      <View
        style={[
          styles.LoginButtonContainer,
          {
            // backgroundColor: 'green',
          },
        ]}>
        <CustomButton text={'Continue'} onPress={onSignInPress} />
        <View
          style={[
            styles.LoginButtonContainer,
            {
              marginBottom: moderateScale(0),
              marginTop: moderateScale(0),
              marginHorizontal: moderateScale(8),
              paddingHorizontal: moderateScale(0),
            },
          ]}>
          {/* <CustomButton
            text={'SIGN UP'}
            onPress={onSignUpPress}
            type={'SECONDARY'}
          /> */}
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};
export default SplashContent;
