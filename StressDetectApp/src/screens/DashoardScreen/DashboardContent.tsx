import React from 'react';
import {View, ScrollView, BackHandler, Text, Image} from 'react-native';
import styles from './DashoardScreen.styles';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

import {moderateScale} from 'react-native-size-matters';
// import {getUserByToken} from '../../ReduxCore/reduxProfile/actions';
import CustomButton from '../../components/CustomButtonSplash/CustomButton';
interface DashboardContentProps {}

const DashboardContent: React.FunctionComponent<DashboardContentProps> = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const isFocused = useIsFocused();

  const onSignInPress = () => {
    // navigation.navigate('Login' as never, {} as never);
    navigation.navigate('UploadVideoScreen' as never, {} as never);
  };
  const onSignUpPress = () => {
    navigation.navigate('UploadAudioScreen' as never, {} as never);
  };
  return (
    <View style={styles.home}>
      <Text style={[styles.pageText, {marginTop: moderateScale(4)}]}> </Text>
      <ScrollView style={styles.scrollView}>
        {/* { uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' } */}
        {/* imgLink="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM" */}
        <View style={styles.HeaderContainer}>
          {/* <Text style={styles.SubHeaderText}>WWWWW</Text> */}

          <Text style={styles.SubHeaderText}>DETECT</Text>
          <Image
            style={styles.logo}
            blurRadius={1}
            fadeDuration={1}
            loadingIndicatorSource={require('../../assets/images/giphy_loading.gif')}
            // source={require('../../assets/images/killerwilliams_logo.png')}
            source={require('../../assets/images/stress_people.png')}
          />
        </View>

        <View style={styles.BodyContainer}>
          <View
            style={[
              styles.LoginButtonContainer,
              {
                // backgroundColor: 'green',
              },
            ]}>
            <CustomButton text={'UPLOAD VIDEO'} onPress={onSignInPress} />
            <View
              style={[
                styles.LoginButtonContainer,
                {
                  marginBottom: moderateScale(0),
                  marginTop: moderateScale(0),
                  marginHorizontal: moderateScale(0),
                  paddingHorizontal: moderateScale(0),
                },
              ]}>
              <CustomButton
                text={'UPLOAD VOICE'}
                onPress={onSignUpPress}
                type={'SECONDARY'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default DashboardContent;
