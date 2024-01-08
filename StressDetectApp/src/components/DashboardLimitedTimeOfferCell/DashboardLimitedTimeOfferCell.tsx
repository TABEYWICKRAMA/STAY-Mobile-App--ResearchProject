import React from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Foundation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../CustomButton/CustomButton';
import {MainButton} from '../MainButton';
import styles from './DashboardLimitedTimeOfferCell.styles';

import {useNavigation} from '@react-navigation/native';
interface IDashboardLimitedTimeOfferCell {
  data?: any;
  title?: string;
  offer?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
}

const DashboardLimitedTimeOfferCell = ({
  title,
  height,
  width,
  imgUrl,
  offer,
  data,
}: IDashboardLimitedTimeOfferCell) => {
  const navigation = useNavigation();
  function goToOrder(): void {
    navigation.navigate('ORDER' as never, {} as never);
  }
  return (
    <View
      style={[
        styles.mainCellContainer,

        {width: moderateScale(294)},
        {height: moderateScale(200)},
        // {width: moderateScale(parseInt(width as string))},
        // {height: moderateScale(parseInt(height as string))},
      ]}>
      <ImageBackground
        source={{
          uri: data.image_url,
        }}
        style={[
          styles.bgImg,
          {
            height: moderateScale(200),
          },
          {width: moderateScale(294)},
        ]}>
        <View
          style={[
            styles.stackCellContainer,
            {backgroundColor: 'rgba(255, 255, 255, 0.66)'},
            {marginLeft: moderateScale(156)},
            {marginTop: moderateScale(144)},
            {height: moderateScale(130)},
          ]}>
          <View
            style={[
              styles.stackCellContainer,
              {
                marginLeft: moderateScale(8),
              },
            ]}>
            <Text style={[styles.HeaderText, {paddingTop: moderateScale(4)}]}>
              LIMITED TIME OFFER
            </Text>
          </View>
          <View style={[styles.bottomCellContainer]}>
            <View style={[styles.btnContainer]}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {backgroundColor: '#0E74BE'},
                  {width: moderateScale(70)},
                  {height: moderateScale(18)},
                  {paddingHorizontal: 0},
                  {paddingVertical: 0},
                  {marginLeft: moderateScale(8)},
                  {marginTop: moderateScale(4)},
                ]}
                onPress={goToOrder}>
                <Text
                  style={[
                    styles.buttonText,
                    {alignSelf: 'center'},
                    {paddingTop: moderateScale(4)},
                  ]}>
                  ORDER NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.offerCellContainer]}>
            <View>
              <IconF
                name="dollar"
                color={'white'}
                size={22}
                style={[styles.IconDollar, {marginBottom: moderateScale(9)}]}
              />
              {/* <Icon name="pricetag" color={'black'} style={[styles.Icon]} /> */}
              <Text
                style={[
                  styles.offerText,
                  {
                    fontSize: scale(14),
                    marginHorizontal: moderateScale(0),
                    marginVertical: moderateScale(0),
                    marginTop: moderateScale(-10),
                    marginLeft: moderateScale(8),
                    color: 'black',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    textDecorationColor: 'red',
                  },
                ]}>
                {'$' + data.price}
              </Text>
            </View>
            <Text style={[styles.offerText]}>{data.discounted_price}</Text>
          </View>
          <View style={[styles.bottomCellContainer]}>
            <Icon name="pricetag" color={'black'} style={[styles.Icon]} />
            <Text
              style={[
                styles.TitleText,
                {marginLeft: moderateScale(2), marginBottom: moderateScale(8)},
              ]}>
              {data.title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DashboardLimitedTimeOfferCell;
