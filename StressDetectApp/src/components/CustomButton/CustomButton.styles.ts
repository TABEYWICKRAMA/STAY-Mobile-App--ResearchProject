import { Platform, StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 0,
  },

  container_PRIMARY: {
    backgroundColor: '#0E74BE',
  },

  container_SECONDARY: {
    backgroundColor: '#F26F21',
  },
  container_RED: {
    backgroundColor: '#FB2E2E',
  },
  container_TERTIARY: {
    marginStart: -12,
  },

  text: {
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    // fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(18),
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    // fontWeight: '500',
    letterSpacing: moderateScale(1.0),
  },
  text_SECONDARY: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(16),
    // fontWeight: '500',
    letterSpacing: moderateScale(1.0),
  },
  text_RED: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(16),
    // fontWeight: '500',
    letterSpacing: moderateScale(1.0),
  },
  text_TERTIARY: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    // #0E74BE
    color: '#0E74BE',
    alignSelf: 'flex-start',
    fontSize: scale(14),
    letterSpacing: moderateScale(1.0),
    // fontWeight: '100',
  },
});

export default styles;
