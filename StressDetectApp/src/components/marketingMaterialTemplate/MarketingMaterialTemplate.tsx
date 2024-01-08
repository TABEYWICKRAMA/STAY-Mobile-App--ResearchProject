import React from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { MainButton } from "../MainButton";
import styles from "./MarketingMaterialTemplate.styles";
interface IMarketingMaterialTemplate {
  imgUrl?: string;
  height?: string;
  width?: string;
}

const MarketingMaterialTemplate = ({
  height,
  width,
  imgUrl,
}: IMarketingMaterialTemplate) => {
  return (
    <View
      style={[
        styles.mainCellContainer,
        { width: moderateScale(parseInt(width as string)) },
        { height: moderateScale(parseInt(height as string)) },
      ]}
    >
      <ImageBackground
        source={{
          uri: imgUrl,
        }}
        style={[
          styles.bgImg,
          {
            height: moderateScale(parseInt(height as string)),
          },
          { width: moderateScale(parseInt(width as string)) },
        ]}
      ></ImageBackground>
      <View style={styles.ButtonContainer}>
        <MainButton
          backgroundColor="#0E74BE"
          title="select template "
          length="207.38"
          height="47.54"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

export default MarketingMaterialTemplate;
