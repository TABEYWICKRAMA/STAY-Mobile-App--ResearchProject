import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: moderateScale(55),
    paddingHorizontal: scale(10),
    marginVertical: scale(0),
    zIndex: 1,
    backgroundColor: '#E1E1E1',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: scale(0),
  },
  title: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: moderateScale(24),
    fontWeight: '400',
  },
  instance: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    alignSelf: 'stretch',
    marginLeft: moderateScale(0),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperForLogout: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: scale(12),
    marginTop: scale(0),
    color: 'gray',
    marginBottom: scale(0),
  },
});
export default styles;
