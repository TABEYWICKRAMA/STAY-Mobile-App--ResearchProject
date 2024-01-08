import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styles from "./MainButton.styles";

interface IMainButton {
  title?: string;
  backgroundColor?: string;
  length?: string;
  height?: string;
  onPress?: () => void;
}

const MainButton = ({
  title,
  backgroundColor,
  length,
  height,
  onPress,
}: IMainButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        { width: moderateScale(parseInt(length as string)) },
        { height: moderateScale(parseInt(height as string)) },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
