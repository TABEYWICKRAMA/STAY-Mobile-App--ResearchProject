import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./SubmitButton.styles";

interface ISubmitButton {
  title?: string;
  size?: string;
  backgroundColor?: string;
}

const SubmitButton = ({ title, size, backgroundColor }: ISubmitButton) => {
  return (
    <TouchableOpacity
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6,
        },
        // backgroundColor && { backgroundColor }
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
