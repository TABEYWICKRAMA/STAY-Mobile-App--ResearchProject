import React from "react";
import { Image, TouchableHighlight } from "react-native";
import styles from "./RoundedImage.styles";

interface IRoundedImage {
  borderColor?: string;
  imgLink?: string;
}

const RoundedImage = ({ borderColor, imgLink }: IRoundedImage) => {
  return (
    <TouchableHighlight
      style={[
        styles.profileImgContainer,
        { borderColor: borderColor, borderWidth: 1 },
      ]}
    >
      <Image
        source={{
          uri: imgLink,
        }}
        style={styles.profileImg}
      />
    </TouchableHighlight>
  );
};

export default RoundedImage;
