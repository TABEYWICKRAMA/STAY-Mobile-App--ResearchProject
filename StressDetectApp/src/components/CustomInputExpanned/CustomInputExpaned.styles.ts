import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: moderateScale(114),
    borderRadius: 0,
  },
  inputText: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: 'black',
  },
  input: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: 'black',
    borderColor: 'black',
    borderWidth: scale(1),
    borderRadius: 0,
    height: moderateScale(114),
  },
  error: {color: 'red', alignSelf: 'stretch', marginTop: scale(16)},
});

export default styles;
