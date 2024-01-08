import { StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',

    borderRadius: 5,
    marginVertical: moderateScale(5),
  },
  inputText: {
    color: 'grey',
    fontFamily: "Bebas Neue Pro",
    fontSize: scale(16),
    marginBottom: moderateScale(8),
  },
  input: {
    fontFamily: "Bebas Neue Pro",
    color: 'black',
    borderColor: 'black',
    borderWidth: scale(1),
    borderRadius: 5,
    height: scale(35),
    padding: moderateScale(4),
  },
  error: { color: 'red', alignSelf: 'stretch', marginTop: scale(16) },
});

export default styles;
