import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  CustomNumberText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "auto",
    padding: 4,
    margin: 0,
    alignSelf: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  CustomButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(2),
    margin: moderateScale(8),
    height: moderateScale(128),
    width: moderateScale(128),
    alignSelf: "center",
    backgroundColor: "#ffff",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: moderateScale(2),
      height: moderateScale(2),
    },
    shadowRadius: 5,
  },
  CustomButtonText: {
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(2),
    marginTop: moderateScale(8),
    alignSelf: "center",
    color: "#CCCBCB",
    fontWeight: "bold",
    fontSize: moderateScale(16),
  },
});
export default styles;
