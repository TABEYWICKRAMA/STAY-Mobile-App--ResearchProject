import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Image, ImageBackground, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../CustomButtonSplash/CustomButton';
import CustomRectBorderedInput from '../CustomRectBorderedInput/CustomRectBorderedInput';
import {MainButton} from '../MainButton';
import styles from './InstallationCell.styles';
import {AddOnModel} from '../../data/common_models/AddOn';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
interface IInstallationCell {
  dataAddon?: AddOnModel;
  imgUrl?: string;
  height?: string;
  width?: string;
  type: string;
}

const InstallationCell = ({
  height,
  width,
  imgUrl,
  type,
  dataAddon,
}: IInstallationCell) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [counter, setCounter] = React.useState<number>(0);
  const _iconStyle = (borderColor: string) => ({
    height: 14,
    width: 14,
    borderRadius: 25,
    borderColor: borderColor,
  });

  const styless = {
    container: {marginTop: 2},
    verticalStyle: {marginTop: 2},
    textStyle: {textDecorationLine: 'none'},
    iconImageStyle: {height: 10, width: 10},
  };
  const staticData: ICheckboxButton[] = [
    {
      id: 0,
      fillColor: '#bdbfbe',
      unfillColor: '#bdbfbe',
      iconStyle: _iconStyle('#bdbfbe'),
      iconImageStyle: styless.iconImageStyle,
    },
    {
      id: 1,
      fillColor: '#000',
      unfillColor: '#000',
      iconStyle: _iconStyle('#000'),
      iconImageStyle: styless.iconImageStyle,
    },
    {
      id: 2,
      fillColor: '#0E74BE',
      unfillColor: '#0E74BE',
      iconStyle: _iconStyle('#0E74BE'),
      iconImageStyle: styless.iconImageStyle,
    },
    {
      id: 3,
      fillColor: '#F26F21',
      unfillColor: '#F26F21',
      iconStyle: _iconStyle('#F26F21'),
      iconImageStyle: styless.iconImageStyle,
    },
    // {
    //   id: 4,
    //   fillColor: '#2be055',
    //   unfillColor: '#cbf2d5',
    //   iconStyle: _iconStyle('#cbf2d5'),
    //   iconImageStyle: styless.iconImageStyle,
    // },
  ];

  const onIncrement = () => {
    // navigation.navigate('ForgetPassword' as never, {} as never);

    setCounter(counter + 1);
    console.log(counter, '====countInc==>>');
  };
  const onDecrement = () => {
    // navigation.navigate('ForgetPassword' as never, {} as never);
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log(counter, '====countDec==>>');
  };
  return (
    <View
      style={[
        styles.mainCellContainer,
        // {width: moderateScale(parseInt(width as string))},
        // {height: moderateScale(parseInt(height as string))},
        {height: moderateScale(284)},
        {width: moderateScale(297)},
      ]}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={[
          styles.bgImg,
          {height: moderateScale(214)},
          {width: moderateScale(297)},
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
            iconStyle={[{borderColor: '#0E74BE', borderRadius: 0}]}
            onPress={(isChecked: boolean) => {}}
          />
        </View>
        {/* </View>
        <View style={styles.checkboxContainerHeader}> */}
        <Text style={styles.labelRight}>{type}</Text>
        <View
          style={[
            styles.counterContainer,
            {paddingTop: moderateScale(-8)},
            // {paddingTop: moderateScale(0)},
          ]}>
          <View style={styles.counterBtnContainer}>
            {/* <CustomButton text="-" onPress={null} type="TERTIARY" /> */}
            <Text style={styles.textCounter} onPress={onDecrement}>
              -
            </Text>
          </View>
          {/* <CustomRectBorderedInput
          
            name="counter"
            placeholder="0"
            control={control}
            rules={{required: 'Username is required'}}
          /> */}
          <Text style={styles.textCounterNum}>{counter}</Text>
          <View style={styles.counterBtnContainer}>
            {/* <CustomButton text="-" onPress={null} type="TERTIARY" /> */}
            <Text style={styles.textCounter} onPress={onIncrement}>
              +
            </Text>
          </View>
        </View>
        <View style={styles.colorBoxContainer}>
          <View style={styles.colorBoxTopContainer}>
            {/* <BouncyCheckbox
              size={14}
              fillColor="grey"
              unfillColor="#FFFFFF"
              // text="Agree to terms of use & service"
              iconStyle={{borderColor: '#0E74BE'}}
              onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={14}
              fillColor="#000"
              unfillColor="#000"
              // text="Agree to terms of use & service"
              iconStyle={{borderColor: '#000'}}
              onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={14}
              fillColor="#0E74BE"
              unfillColor="#0E74BE"
              // text="Agree to terms of use & service"
              iconStyle={{borderColor: '#0E74BE'}}
              onPress={(isChecked: boolean) => {}}
            />
            <BouncyCheckbox
              size={14}
              fillColor="#F26F21"
              unfillColor="#F26F21"
              // text="Agree to terms of use & service"
              iconStyle={{borderColor: '#F26F21'}}
              onPress={(isChecked: boolean) => {}}
            /> */}
            <BouncyCheckboxGroup
              data={staticData}
              onChange={(selectedItem: ICheckboxButton) => {
                console.log('SelectedItem: ', JSON.stringify(selectedItem));
              }}
            />
          </View>

          <View style={styles.colorBoxBottomContainer}>
            <Text style={styles.labelRight}>Choose Post Color</Text>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default InstallationCell;
