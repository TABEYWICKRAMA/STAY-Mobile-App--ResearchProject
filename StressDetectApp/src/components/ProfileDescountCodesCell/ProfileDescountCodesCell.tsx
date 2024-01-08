import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ProfileDescountCodesCell.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {DiscountCodeModel} from '../../data/common_models/DiscountCode';
interface IProfileDescountCodesCell {
  data?: DiscountCodeModel;
  onPress?: any;
  offer?: string;
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
}

const ProfileDescountCodesCell = ({
  data,
  onPress,
  title,
  height,
  width,
  imgUrl,
  offer,
}: IProfileDescountCodesCell) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        {/* <Text style={styles.label}>{title}</Text> */}
        <Text style={styles.label}>{data?.code ?? ''}</Text>
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

        <Text style={styles.labelCost} onPress={onPress}>
          See Service
        </Text>
      </View>
    </View>
  );
};

export default ProfileDescountCodesCell;
