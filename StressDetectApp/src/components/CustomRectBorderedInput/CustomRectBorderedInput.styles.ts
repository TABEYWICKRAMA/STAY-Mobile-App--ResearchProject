import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(44),
    color: 'black',
    borderColor: 'black',
    borderWidth: scale(1),
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  inputText: {
    color: '#BBB5B4',
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    borderColor: 'black',
  },
  input: {
    paddingTop: moderateScale(8),
    // overlayColor: '#BBB5B4',
    // color: '#BBB5B4',
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(16),
    textDecorationColor: 'red',
    borderColor: 'black',
  },
  error: {color: 'red', alignSelf: 'stretch', paddingLeft: 16},
});

export default styles;
