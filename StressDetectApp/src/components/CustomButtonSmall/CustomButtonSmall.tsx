import React from 'react';
import { Text, Pressable, TouchableOpacity } from 'react-native';

import styles from './CustomButtonSmall.styles';
interface ICustomButtonSmall {
  onPress?: any;
  text?: any;
  bgColor?: any;
  fgColor?: any;
  type?: any;
}
const CustomButtonSmall = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: ICustomButtonSmall) => {
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

export default CustomButtonSmall;
