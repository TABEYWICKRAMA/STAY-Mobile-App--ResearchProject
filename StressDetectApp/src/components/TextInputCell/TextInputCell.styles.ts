import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    margin: moderateScale(8),
    fontWeight: "bold",
    alignSelf: "center",
  },
  CustomNumberText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "auto",
    padding: moderateScale(4),
    alignSelf: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitText: {
    padding: moderateScale(10),
    color: "#ffff",
    textAlign: "center",
    backgroundColor: "#68a0cf",
    borderRadius: moderateScale(1000),
    borderWidth: 1,
    borderColor: "#ffff",
  },
});
export default styles;
