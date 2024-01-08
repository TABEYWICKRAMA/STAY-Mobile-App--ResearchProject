import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {useTheme} from '../../theme';
const {colors} = useTheme;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 2,
    marginHorizontal: 4,
    marginLeft: 0,
    // backgroundColor: 'blue',
    borderRadius: 0,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  container_PRIMARY: {
    backgroundColor: '#0E74BE',
  },

  container_SECONDARY: {
    backgroundColor: '#F26F21',
    borderColor: '#F26F21',
    borderWidth: 2,
  },
  container_RED: {
    backgroundColor: colors.CancelBtnColor,
    borderColor: colors.CancelBtnColor,
    borderWidth: 2,
  },
  container_TERTIARY: {},

  text: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: scale(12),
  },
  text_SECONDARY: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(14),
  },

  text_TERTIARY: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: 'blue',
    alignSelf: 'flex-start',
  },
});

export default styles;
