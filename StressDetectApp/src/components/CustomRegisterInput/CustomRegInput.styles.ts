import { StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: moderateScale(44),
    borderColor: '#e8e8e8',
    borderWidth: scale(0.5),
    borderRadius: moderateScale(1),

    paddingHorizontal: moderateScale(10),
    marginVertical: 0,
  },
  inputText: {
    color: '#BBB5B4',
    fontFamily: "Bebas Neue Pro",

  },
  input: {
    paddingTop: moderateScale(8),
    // overlayColor: '#BBB5B4',
    color: '#BBB5B4',
    fontFamily: "Bebas Neue Pro",
    fontSize: scale(16),
    textDecorationColor: 'red',

  },
  error: { color: 'red', alignSelf: 'stretch', paddingLeft: 16 },
});

export default styles;
