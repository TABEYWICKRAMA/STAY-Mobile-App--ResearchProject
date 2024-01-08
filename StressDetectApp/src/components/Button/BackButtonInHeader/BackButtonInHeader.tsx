import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './BackButtonInHeader.styles';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

interface BackButtonProps {
  color: string;
}

const BackButtonInHeader = ({color}: BackButtonProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{paddingLeft: moderateScale(8)}}>
      <Icon name="angle-left" size={styles.iconSize.height} color={color} />
    </TouchableOpacity>
  );
};
export default BackButtonInHeader;
