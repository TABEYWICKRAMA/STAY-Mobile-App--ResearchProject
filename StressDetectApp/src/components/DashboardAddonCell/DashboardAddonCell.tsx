import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DashboardAddonCell.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
interface IDashboardAddonCell {
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
}

const DashboardAddonCell = ({
  title,
  height,
  width,
  imgUrl,
}: IDashboardAddonCell) => {
  return (
    <View
      style={[
        styles.mainCellContainer,
        {width: moderateScale(parseInt(width as string))},
        {height: moderateScale(parseInt(height as string))},
      ]}>
      <ImageBackground
        source={{
          uri: imgUrl,
        }}
        style={[
          styles.bgImg,
          {
            height: moderateScale(parseInt(height as string)),
          },
          {width: moderateScale(parseInt(width as string))},
        ]}>
        {/* <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={{position: 'absolute'}}> */}
        <View style={[styles.bottomCellContainer]}>
          <Icon name="camera" color={'white'} style={[styles.Icon]} />
          <Text style={[styles.TitleText]}>{title}</Text>
        </View>
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  );
};

export default DashboardAddonCell;
