import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    marginVertical: moderateScale(5),
  },
  input: {
    borderColor: 'black',
    borderWidth: scale(1),
    borderRadius: 5,
  },
  error: {color: 'red', alignSelf: 'stretch', paddingLeft: 16},
});

export default styles;
