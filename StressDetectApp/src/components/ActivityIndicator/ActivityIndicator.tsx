import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../theme';
import styles from './ActivityIndicator.styles';

interface IIndicator {
  color?: string;
}

const Indicator = ({ color }: IIndicator) => {
  const { colors } = useTheme;
  return (
    <ActivityIndicator
      size={styles.size.height}
      style={styles.loading}
      color={color ? color : colors.button}
    />
  );
};
export default Indicator;
