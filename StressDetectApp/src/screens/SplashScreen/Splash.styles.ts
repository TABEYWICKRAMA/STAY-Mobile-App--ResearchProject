import {Platform, StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    // paddingTop: moderateScale(64),
    // backgroundColor: 'green',
  },
  SubHeaderText: {
    // fontFamily: 'Bebas Neue Pro',

    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    elevation: 10,
    alignSelf: 'center',
    fontWeight: '400',
    letterSpacing: moderateScale(1.2),
    color: '#707070',
    fontSize: scale(24),
  },
  root: {
    overflow: 'hidden',
    // marginTop: Platform.OS === 'ios' ? moderateScale(32) : moderateScale(0),
    height: scale(450),
    // position: 'absolute',
    // backgroundColor: 'yellow',
  },
  textLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    width: scale(181.19),
    justifyContent: 'center',
    // marginTop: moderateScale(64),
    marginHorizontal: moderateScale(24),
    height: verticalScale(28.47),
    resizeMode: 'contain',
    // backgroundColor: 'yellow',
  },
  imageLogo: {
    marginTop: moderateScale(10),
    alignItems: 'center',
    alignSelf: 'center',
    // width: scale(191.19),
    width: scale(271.19),
    marginHorizontal: moderateScale(24),
    height: verticalScale(252.78),
    resizeMode: 'contain',
  },
  LoginButtonContainer: {
    marginTop: moderateScale(84),
    justifyContent: 'center',
    alignItems: 'center',
    // padding: moderateScale(2),
    height: verticalScale(64),
    width: scale(188),
    alignSelf: 'center',
  },
  RegButtonContainer: {
    marginTop: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(2),
    marginLeft: moderateScale(8),
    marginRight: moderateScale(8),
    height: verticalScale(64),
    alignSelf: 'center',
  },
});
export default styles;
