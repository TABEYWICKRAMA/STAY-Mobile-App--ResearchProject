import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileCustomPackageCell.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
interface IProfileCustomPackageCell {
  offer?: string;
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
}

const ProfileCustomPackageCell = ({
  title,
  height,
  width,
  imgUrl,
  offer,
}: IProfileCustomPackageCell) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeaderContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.label}>{title}</Text>
        </View>
        <View style={styles.middleContainer}>
          {/* <Text style={styles.labelCost}>{offer}</Text> */}
          {/* <BouncyCheckbox
          size={20}
          fillColor="#0E74BE"
          unfillColor="#FFFFFF"
          // text="Agree to terms of use & service"
          iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
          onPress={(isChecked: boolean) => {}}
        /> */}
        </View>

        <View style={styles.rightContainer}>
          {/* <TouchableOpacity onPress={() => null}>
          <Icon name="angle-right" size={scale(30)} color={'#393E46'} />
        </TouchableOpacity> */}

          <Text style={styles.labelCost}>Total ${offer}</Text>
        </View>
      </View>

      <Text style={styles.labelCost}>Unlimited Photos</Text>

      <Text style={styles.labelCost}>marketing Material</Text>

      <Text style={styles.labelCost}>Post Installation</Text>
    </View>
  );
};

export default ProfileCustomPackageCell;
