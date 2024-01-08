import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  BackHandler,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './UploadVideoScreen.styles';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButtonSplash/CustomButton';
// import {Icon} from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {uploadVideo} from '../../ReduxCore/reduxImageUpload/image.actions';

import ImagePicker from 'react-native-image-crop-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {selectVideoStressState} from '../../ReduxCore/reduxImageUpload/image.selectors';
interface UploadVideoScreenContent {}

const UploadVideoScreenContent: React.FunctionComponent<
  UploadVideoScreenContent
> = () => {
  const currentStress = useSelector(selectVideoStressState);
  const [spinner, setSpinner] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const navigation = useNavigation();
  const [stressLevel, setStressLevel] = useState(
    'Upload Video to see the result',
  );

  // function requestPr(
  //   permission: string,
  //   rationale?: Rationale | (() => Promise<boolean>),
  // ): Promise<PermissionStatus>;
  // useEffect(() => {
  //   setStressLevel(currentStress?.stressVideo ?? 'Upload Video to see the result');
  // });

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
    // navigation.navigate('DashoardScreen' as never, {} as never);
    // setIsOpen(true);
  };
  const onSignUpPress = () => {
    // navigation.navigate('Register' as never, {} as never);
  };
  function openCameraForVideo(): void {
    ImagePicker.openCamera({
      mediaType: 'video',
      multiple: false,
      cropping: false,
      freeStyleCropEnabled: false,
      includeBase64: true,
      includeExif: true,
    }).then(async images => {
      console.log('Video from Cam===>>>', images);
      if (images != null) {
        setSpinner(true);
        const imageDataa = {
          uri: images.path,
          // name: images.path.split('/')[images.path.split('/').length - 1],
          type: images.mime,
          name: 'CamVideo.mp4',
          // type: 'video/mp4',
        };
        try {
          console.log(
            'response.data.data.image_url.Location changed=======>>>>>',
          );
          const response: any = await dispatch(uploadVideo(imageDataa));
          console.log(
            'response.data.data.image_url.Location changed=======>>>>>' +
              response,
          );
          setSpinner(false);
        } catch (error) {
          setSpinner(false);
          console.log('ERROR=======>>>>>' + error);
        }
      }
    });
  }

  function openGalleryForVideo(): void {
    ImagePicker.openPicker({
      mediaType: 'video',
      multiple: false,
      cropping: false,
      freeStyleCropEnabled: false,
      includeBase64: true,
    }).then(async images => {
      console.log('Video from Cam===>>>', images);
      if (images != null) {
        setSpinner(true);
        const imageDataa = {
          uri: images.path,
          // name: images.path.split('/')[images.path.split('/').length - 1],
          name: 'GalVideo.mp4',
          // type: images.mime,
          type: 'video/mp4',
        };
        try {
          console.log('response.data. changed=======>>>>>');
          const response: any = await dispatch(uploadVideo(imageDataa));
          console.log(
            'response.data.data changed=======>>>>>' + response.data.response,
          );
          setStressLevel(
            response.data.response ?? 'Upload Video to see the result',
          );
          setSpinner(false);
        } catch (error) {
          setSpinner(false);
          console.log('ERROR=======>>>>>' + error);
        }
      }
    });
  }
  return (
    <View style={styles.home}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={scale(30)} color={'#393E46'} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.pageText, {marginTop: moderateScale(4)}]}> </Text>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.SubHeaderText}>UPLOAD VIDEO</Text>

          <Image
            style={styles.logo}
            blurRadius={1}
            fadeDuration={1}
            loadingIndicatorSource={require('../../assets/images/giphy_loading.gif')}
            source={require('../../assets/images/stress_girl.jpg')}
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
            <CustomButton text={'FROM GALLERY'} onPress={openGalleryForVideo} />
            <CustomButton
              text={'FROM CAMERA'}
              onPress={openCameraForVideo}
              type={'SECONDARY'}
            />
          </View>
          <View
            style={[
              styles.LoginButtonContainer,
              {
                // backgroundColor: 'green',
              },
            ]}>
            <Text style={styles.SectionHeaderText}>YOUR STRESS LEVEL -</Text>

            <Text
              style={[
                styles.SectionHeaderText,
                {color: '#1EA23A', alignSelf: 'center', textAlign: 'center'},
              ]}>
              {stressLevel}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default UploadVideoScreenContent;
