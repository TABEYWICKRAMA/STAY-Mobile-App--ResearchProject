import React from 'react';
import { Text, Pressable, TouchableOpacity } from 'react-native';

import styles from './CustomButton.styles';
interface ICustomButton {
  onPress?: any;
  text?: any;
  bgColor?: any;
  fgColor?: any;
  type?: any;
}
const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: ICustomButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.buttonText,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
