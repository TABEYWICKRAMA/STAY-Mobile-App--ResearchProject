import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DropDown.style';

interface Props {
  label: string;
}

const Dropdown: FC<Props> = ({label}) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <Text style={styles.dropdown}>
          This is where the dropdown will be rendered.
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>{label}</Text>
      <Icon name="chevron-down" style={styles.icon} color={'black'} />
    </TouchableOpacity>
  );
};

export default Dropdown;
