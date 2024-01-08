import {Platform, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {scale, moderateScale} from 'react-native-size-matters';
import useTheme from '../../theme/useTheme';
const {colors} = useTheme;
const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: moderateScale(12),
    marginVertical: 5,

    alignItems: 'center',
    textAlign: 'center',

    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: moderateScale(0),
  },

  container_PRIMARY: {
    backgroundColor: '#0E74BE',
    borderColor: '#0E74BE',
    borderWidth: 0,
  },

  container_SECONDARY: {
    backgroundColor: '#F26F21',
    borderColor: '#F26F21',
    borderWidth: 0,
  },
  container_RED: {
    backgroundColor: '#FB2E2E',
    borderColor: '#FB2E2E',
    borderWidth: 0,
  },
  container_TERTIARY: {
    borderWidth: 0,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    // fontFamily:bebas-neue-pro
    // Platform.OS === 'ios' ? 'IslandMoments-Regular' : 'bebasneuepro',
    // fontFamily: Platform.OS === 'ios' ? 'bebas-neue-pro' : 'bebasneuepro',
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    // fontFamily: 'Bebas Neue Pro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(18),
    fontWeight: '400',
    letterSpacing: 1,
  },
  text_SECONDARY: {
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: scale(18),
  },

  text_TERTIARY: {
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    color: colors.SplashButtonBluecolor,
    alignSelf: 'flex-start',
  },
});

export default styles;
