import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  profileImgContainer: {
    overflow: "hidden",
    marginLeft: scale(8),
    height: moderateScale(47),
    width: moderateScale(47),
    borderRadius: scale(40),
  },
  profileImg: {
    overflow: "hidden",
    height: moderateScale(47),
    width: moderateScale(47),
    borderRadius: scale(40),
  },
  container: {
    margin: scale(15),
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
});
export default styles;
