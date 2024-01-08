import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./DashboardRecomendedCell.styles";
interface IDashboardRecomendedCell {
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
}

const DashboardRecomendedCell = ({
  title,
  height,
  width,
  imgUrl,
}: IDashboardRecomendedCell) => {
  return (
    <View
      style={[
        styles.mainCellContainer,
        { width: moderateScale(parseInt(width as string)) },
        { height: moderateScale(parseInt(height as string)) },
      ]}
    >
      <ImageBackground
        source={require('../../assets/images/thank_you_banner.png')}
        style={[
          styles.bgImg,
          {
            height: moderateScale(parseInt(height as string)),
          },
          { width: moderateScale(parseInt(width as string)) },
        ]}
      >
        {/* <View style={[styles.bottomCellContainer]}>
          <FontAwesome5Icon
            name="camera"
            color={"white"}
            style={[styles.Icon]}
          />
          <Text style={[styles.TitleText]}>{title}</Text>
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default DashboardRecomendedCell;
