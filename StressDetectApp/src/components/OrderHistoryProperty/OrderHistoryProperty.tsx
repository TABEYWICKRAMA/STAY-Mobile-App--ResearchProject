import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './OrderHistoryProperty.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CustomButtonSmall} from '../CustomButtonSmall';
// import data from '../Carousal/data';
interface IAddonCell {
  data?: any;
  button?: boolean;
  status?: string;
  title?: string;
  // imgUrl?: string;
  // height?: string;
  // width?: string;
  onPress?: any;
}

const OrderHistoryPropertyCell = ({
  title,
  data,
  // height,
  // width,
  // imgUrl,
  button,
  status,
  onPress,
}: IAddonCell) => {
  const Button = () => {
    return (
      <View>
        <View style={styles.TableButtonContainer}>
          <CustomButtonSmall text={'REMOVE INVENTORY'} onPress={onPress} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.TableTitleContainer}>
        <Text style={styles.TableItemText}>{data.address}</Text>
      </View>
      <View style={styles.TableStatusContainer}>
        <Text style={styles.TableItemText}> {data.status}</Text>
      </View>
      <View style={styles.TableButtonsContainer}>{button && <Button />}</View>
    </View>
  );
};

export default OrderHistoryPropertyCell;
