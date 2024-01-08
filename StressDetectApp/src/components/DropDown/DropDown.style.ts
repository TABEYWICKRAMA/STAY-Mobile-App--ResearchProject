import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  icon: {
    margin: moderateScale(8),
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    color: 'grey',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(16),
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    color: 'grey',
    top: 50,
  },
});
export default styles;
