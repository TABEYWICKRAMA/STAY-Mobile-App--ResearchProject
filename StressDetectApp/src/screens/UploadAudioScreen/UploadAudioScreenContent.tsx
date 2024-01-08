import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  BackHandler,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import styles from './UploadAudioScreen.styles';
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
import Icon from 'react-native-vector-icons/Ionicons';
import {uploadAudio} from '../../ReduxCore/reduxImageUpload/image.actions';

import Spinner from 'react-native-loading-spinner-overlay';
import {selectAudioStressState} from '../../ReduxCore/reduxImageUpload/image.selectors';
import {PERMISSIONS, request} from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
// import useASR, { ConfigType } from 'react-asr';
interface UploadAudioScreenContent {}
export const checkMicrophone = async () => {
  // const result = await PermissionsAndroid.check(
  //   PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  // );
  // return result;
};

type PermissionStatus =
  | 'unavailable'
  | 'denied'
  | 'limited'
  | 'granted'
  | 'blocked';
type Rationale = {
  title: string;
  message: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
};
const UploadAudioScreenContent: React.FunctionComponent<
  UploadAudioScreenContent
> = () => {
  const currentStress = useSelector(selectAudioStressState);
  const [spinner, setSpinner] = useState(false);
  const [init, setInit] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const navigation = useNavigation();
  const [stressLevel, setStressLevel] = useState(
    'Upload Audio to see the result',
  );
  const options = {
    sampleRate: 16000, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6, // android only (see below)
    wavFile: 'test.wav', // default 'audio.wav'
  };
  // useEffect(() => {
  //    setStressLevel(currentStress?.stressAudio ?? 'Upload Audio to see the result');
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

  function openRecorder(): void {
    // checkMicrophone();
    request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
      // …
      AudioRecord.init(options);
    });
    setInit(true);
    // AudioRecord.start();
  }
  function startRecorder(): void {
    // AudioRecord.init(options);
    // setInit(true);
    AudioRecord.init(options);
    AudioRecord.start();
  }
  async function stopRecorder(): Promise<void> {
    const audioFile = await AudioRecord.stop();

    console.log('response.data. changed=======>>>>>');
    try {
      console.log('response.data. changed=======>>>>>');
      const response: any = await dispatch(uploadAudio(audioFile));
      console.log(
        'response.data.data changed=======>>>>>' + response.data.response,
      );
      setStressLevel(
        response.data.response ?? 'Upload Audio to see the result',
      );
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      console.log('ERROR=======>>>>>' + error);
    }
    //   }
    // });
  }
  // async function checkMicrophonee(): Promise<void> {
  //   await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);

  //   // return result;
  // }

  // checkMicrophone();
  return (
    <View style={styles.home}>
      {/* <AlertDialogSlide open={open} onClose={handleClose} /> */}
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="return-up-back" size={scale(30)} color={'#393E46'} />
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
          <Text style={styles.SubHeaderText}>UPLOAD AUDIO</Text>

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
            <CustomButton text={'START '} onPress={openRecorder} />
            {init == true ? (
              <CustomButton text={'RECORD'} onPress={startRecorder} />
            ) : null}
            {/* {(init <CustomButton text={'START RECORD'} onPress={openRecorder} />)} */}
            <CustomButton
              text={'STOP & UPLOAD'}
              onPress={stopRecorder}
              type={'RED'}
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
export default UploadAudioScreenContent;
