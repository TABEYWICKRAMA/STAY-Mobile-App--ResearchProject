import React from 'react';
import {Alert, Image, ImageBackground, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {moderateScale} from 'react-native-size-matters';
import {MainButton} from '../MainButton';
import styles from './MarketingMaterialHanger.styles';
interface IMarketingMaterialHanger {
  imgUrl?: string;
  height?: string;
  width?: string;
  type: string;
}

const MarketingMaterialHanger = ({
  height,
  width,
  imgUrl,
  type,
}: IMarketingMaterialHanger) => {
  return (
    <View
      style={[
        styles.mainCellContainer,
        {width: moderateScale(parseInt(width as string))},
        {height: moderateScale(parseInt(height as string))},
      ]}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={[
          styles.bgImg,
          {
            height: moderateScale(184),
          },
          {width: moderateScale(187)},
        ]}></Image>
      {/* <View style={styles.ButtonContainer}> */}
      {/* <MainButton
          backgroundColor="#0E74BE"
          title="select hanger"
          length="94"
          height="47.54"
          onPress={() => Alert.alert("Simple Button pressed")}
        /> */}
      <View style={styles.checkboxContainerHeader}>
        <View style={styles.labelLeft}>
          <BouncyCheckbox
            size={20}
            fillColor="#0E74BE"
            unfillColor="#FFFFFF"
            // text="Agree to terms of use & service"
            iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
            onPress={(isChecked: boolean) => {}}
          />
        </View>

        <Text style={styles.labelRight}>Standerd {type}</Text>
      </View>
      {/* </View> */}
    </View>
  );
};

export default MarketingMaterialHanger;
