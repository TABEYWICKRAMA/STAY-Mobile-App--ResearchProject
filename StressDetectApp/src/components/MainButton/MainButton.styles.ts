import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(12),
  },
  appButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  button: {
    elevation: 10,
    backgroundColor: 'gray',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(18),
  },
});
export default styles;
