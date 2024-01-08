import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./DashboardNotificationCell.styles";
import { AnnouncementModel } from "../../data/common_models/Announcement";
interface IDashboardNotificationCell {
  announcementData?: AnnouncementModel;

}
let height = "236"
let width = "302"
const DashboardNotificationCell = ({
  announcementData
}: IDashboardNotificationCell) => {
  return (
    <View
      style={[
        styles.mainCellContainer,
        { width: moderateScale(parseInt(width as string)) },
        { height: moderateScale(parseInt(height as string)) },
      ]}
    >
      <View
        style={[
          styles.header,
          {
            height: moderateScale(parseInt(height as string) / 4),
          },
          { width: moderateScale(parseInt(width as string)) },
        ]}
      >
        <Text style={[styles.TitleText]}>{announcementData?.title}</Text>
        {/* <View style={[styles.bottomCellContainer]}>
          <FontAwesome5Icon
            name="camera"
            color={"white"}
            style={[styles.Icon]}
          />
          
        </View> */}
      </View>
      <View
        style={[
          styles.decsContainer,
          {
            height: moderateScale(parseInt(height as string) / 4 * 3),
          },
          { width: moderateScale(parseInt(width as string)) },
        ]}
      >
        <Text style={[styles.descText]}>{announcementData?.message}</Text>
        {/* <View style={[styles.bottomCellContainer]}>
          <FontAwesome5Icon
            name="camera"
            color={"white"}
            style={[styles.Icon]}
          />
          
        </View> */}
      </View>
    </View>
  );
};

export default DashboardNotificationCell;
