import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileLinkedAccountCell.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
interface IProfileLinkedAccountCell {
  data?: any;
  offer?: string;
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
  onPress?: any;
}

const ProfileLinkedAccountCell = ({
  data,
  title,
  height,
  width,
  imgUrl,
  offer,
  onPress,
}: IProfileLinkedAccountCell) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={styles.middleContainer}>
        {/* <Text style={styles.labelCost}>{offer}</Text> */}
        <BouncyCheckbox
          size={20}
          fillColor="#0E74BE"
          unfillColor="#FFFFFF"
          // text="Agree to terms of use & service"
          iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
          onPress={(isChecked: boolean) => {}}
        />
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="angle-right" size={scale(30)} color={'#393E46'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileLinkedAccountCell;
