import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import styles from "./PackageItem.styles";

interface IPackageItem {
  title?: string;
  number?: string;
  color?: string;
}

const PackageItem = ({ number, title, color }: IPackageItem) => {
  return (
    <TouchableOpacity style={styles.CustomButtonContainer}>
      <TouchableHighlight
        style={{
          borderRadius:
            Math.round(
              Dimensions.get("window").width + Dimensions.get("window").height
            ) / 2,
          borderColor: "#ffff",
          borderWidth: 2,
          width: Dimensions.get("window").width * 0.1,
          height: Dimensions.get("window").width * 0.1,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
          elevation: 8,
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 5,
        }}
        underlayColor="#ffff"
      >
        <Text style={styles.CustomNumberText}> {number} </Text>
      </TouchableHighlight>
      <Text style={styles.CustomButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PackageItem;
