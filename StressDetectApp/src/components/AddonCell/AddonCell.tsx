import React, {Dispatch, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './DashboardAddonCell.styles';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {AddOnModel} from '../../data/common_models/AddOn';
import {CartItemModel} from '../../data/common_models/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductById,
  setMLSDisable,
  setMLSEnable,
  setMarketingMaterialScreen,
  setMarketingMaterialScreenFalse,
} from '../../ReduxCore/reduxPlan/plan.actions';
import {
  addToOrder,
  removeFromOrder,
} from '../../ReduxCore/reduxOrder/order.actions';
import Popover from 'react-native-popover-view';
import {PackageModel} from '../../data/common_models/Package';
import {
  isSetMarketingMaterialScreen,
  selectedPlanEssetial,
} from '../../ReduxCore/reduxPlan/plan.selector';
// react-native unlink react-native-vector-icons react-native unlink react-native-video
import Video from 'react-native-video';
import {
  selectOrderDiscount,
  selectOrderTotal,
} from '../../ReduxCore/reduxOrder/order.selector';
import {cool} from 'react-native-image-filter-kit';
import useTheme from '../../theme/useTheme';
import VideoPlayer from 'react-native-video-player';

const {colors} = useTheme;
interface IAddonCell {
  dataAddon?: AddOnModel;
  offer?: string;
  title?: string;
  imgUrl?: string;
  height?: string;
  width?: string;
  addonType?: string;
  defaultValue?: boolean;
  checkedId?: any;
  disabled?: boolean;
  onCheckedChange?: any;
}

const AddonCell = ({
  dataAddon,
  title,
  height,
  width,
  imgUrl,
  offer,
  defaultValue = false,
  addonType = 'plan',
  disabled,
  checkedId,
  onCheckedChange,
}: IAddonCell) => {
  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);
  const dispatch: Dispatch<any> = useDispatch();
  const [checked, setChecked] = React.useState(checkedId);
  const disable = checkedId;
  // const [disabled, setDisabled] = React.useState(false);

  const [showAddonModal, setShowAddonModal] = React.useState(false);
  const [addonModalTitle, setAddonModalTitle] = React.useState('');
  const selectedPlanItems: PackageModel = useSelector(selectedPlanEssetial);
  // isSetMarketingMaterialScreen
  const orderTotal = useSelector(selectOrderTotal);
  const orderDiscount = useSelector(selectOrderDiscount);
  const [counter, setCounter] = React.useState<number>(0);

  const [showPopover, setShowPopover] = useState(false);
  const toggleModalAddon = React.useCallback(() => {
    setShowAddonModal(v => !v);
  }, []);
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
  const handleIncrement = () => {
    setCounter(counter + 1);
    console.log(counter, 'countInc');
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log(counter, 'countDec');
  };
  const videoData: any = [
    {name: 'Uplifting'},
    {name: 'Motivational'},
    {name: 'Energetic'},
    {name: 'Ambient'},
  ];
  React.useEffect(() => {
    if (checkedId) {
      if (dataAddon!.code === 'marketing_suite') {
        dispatch(setMarketingMaterialScreen());
      }
    }
    if (checked) {
      setCounter(1);
    } else {
      setCounter(0);
    }
    //kjhkhkhk
    // setDisabled(checkedId);
    // addOnClickedHandler(dataAddon, checked);
  }, [checked]);

  // React.useEffect(() => {
  //   if (selectedPlanItems != null) {
  //     selectedPlanItems.products?.forEach(v => {
  //       if (v.code == dataAddon?.code) {
  //         setChecked(true);
  //         console.warn('SELECTED ADDON=====>>>>' + v.name);
  //       }
  //     });
  //   }
  //   // setChecked(false);
  // }, []);
  const onBuffer = (param: any) => {
    console.log('onVideoBuffer');

    //this.setState({ isLoading: param.isBuffering })
  };

  const onError = (err: any) => {
    console.log(JSON.stringify(err?.error.errorCode));
    // this.toast(true, 'error: ' + err?.error.errorCode)
  };

  const handleCheckedChange = (item, isChecked) => {
    onCheckedChange(item, isChecked);
  };

  const addOnClickedHandler = (AddonData: any, checked: boolean) => {
    // React.useEffect(() => {
    //   setCounter(counter);
    //   addOnClickedHandler(AddonData, checked)
    // }, [counter]);

    console.log('addOnClickedHandler=====>', checked, '--->>>', AddonData);
    if (!defaultValue) {
      const data: CartItemModel = {
        name: AddonData.name,
        id: AddonData.id,
        price: AddonData.price,
        initialPrice: AddonData.initialPrice,
        discount: AddonData.discount,
        quantity: counter,
        type: addonType,
        incremental: AddonData.is_count,
      };
      if (checked == true) {
        // TODO:virtual twilight when checked
        if (
          AddonData.code === 'premium_hd_walkthrough_video' ||
          AddonData.code === 'express_hd_walkthrough_video'
          // ||AddonData.name === 'Twilight Photos'
        ) {
          // toggleModalAddon();
          setShowAddonModal(true);

          console.log(
            'addOnClickedHandler===Virtual Twilight==>',
            checked,
            '--->>>',
            AddonData,
          );
        }
        if (AddonData.code === 'marketing_suite') {
          // toggleModalAddon();
          dispatch(setMarketingMaterialScreen());
          // console.log(
          //   'addOnClickedHandler===Virtual Twilight==>',
          //   checked,
          //   '--->>>',
          //   AddonData,
          // );
        }
        if (AddonData.code === 'mls_entry') {
          // toggleModalAddon();
          dispatch(setMLSEnable());
        }
        // dispatch(getProductById(AddonData.id));
        // {
        //   checkedId ? checkedId(AddonData.code) : null;
        // }

        // dispatch(addToOrder(data));
      } else {
        if (
          AddonData.code === 'premium_hd_walkthrough_video' ||
          AddonData.code === 'express_hd_walkthrough_video'
          // ||AddonData.name === 'Twilight Photos'
        ) {
          // toggleModalAddon();
          setShowAddonModal(false);

          // console.log(
          //   'addOnClickedHandler===Virtual Twilight==>',
          //   checked,
          //   '--->>>',
          //   AddonData,
          // );
        }
        // dispatch(removeFromOrder(data));
        if (AddonData.code === 'marketing_suite') {
          // toggleModalAddon();
          dispatch(setMarketingMaterialScreenFalse());
          // console.log(
          //   'addOnClickedHandler===Virtual Twilight==>',
          //   checked,
          //   '--->>>',
          //   AddonData,
          // );
        }
        if (AddonData.code === 'mls_entry') {
          // toggleModalAddon();
          dispatch(setMLSDisable());
        }
      }
    }
  };

  return (
    <View
      style={[
        styles.modalContainer,
        {
          // backgroundColor: 'red',
          alignContent: 'center',
        },
      ]}>
      <View
        style={[
          styles.mainContainer,
          {
            // borderColor: 'grey',
            borderColor: !checked ? 'grey' : 'white',
            borderBottomWidth: 0.194,
            backgroundColor: checked ? '#0E74BE' : 'white',
            alignItems: 'center',
          },
        ]}>
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={22}
            fillColor="#0E74BE"
            unfillColor={'#FFFFFF'}
            // text="Agree to terms of use & service"
            isChecked={checked}
            disableBuiltInState={disable}
            disableText={disable}
            iconStyle={{
              borderColor: !checked ? 'black' : '#FFFFFF',
              borderRadius: 0,
            }}
            onPress={(isChecked: boolean) => {
              handleCheckedChange(dataAddon.name, isChecked);
              if (!disable) {
                isChecked = checked;
                console.log('isChecked=a====>', checked);
                isChecked = !checked;
                console.log('isChecked=====>', checked);
                setChecked(isChecked);
                addOnClickedHandler(dataAddon, isChecked);
              } else {
                console.log('isChecked disabled=====>', disable);
              }
            }}
          />
          <View>
            <Text
              style={[
                styles.label,
                {
                  marginLeft: !disable ? moderateScale(0) : moderateScale(16),
                  color: !checked ? 'black' : 'white',
                  alignItems: 'center',
                },
              ]}>
              {/* {title} */}
              {dataAddon?.name ?? ' '}
            </Text>
          </View>
          <Popover
            backgroundStyle={styles.labelPop}
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            from={
              // <TouchableOpacity onPress={() => setShowPopover(true)}>
              //   <Text>Press here to open popover!</Text>
              // </TouchableOpacity>
              <View>
                <Icon
                  name="exclamationcircleo"
                  // color="#F26F21"
                  color={checked ? 'white' : '#F26F21'}
                  size={12}
                  style={styles.icon}
                  onPress={() => setShowPopover(true)}
                />
              </View>
            }>
            <Text style={styles.label}>{dataAddon?.name ?? ' '}</Text>
          </Popover>
          {(dataAddon?.code == 'virtual_twilight' ||
            dataAddon?.code == 'virtual_staging') && (
            <View style={{alignSelf: 'center', alignItems: 'center'}}>
              <View
                style={[
                  styles.counterContainer,
                  {paddingTop: moderateScale(-8)},

                  // {paddingTop: moderateScale(0)},
                ]}>
                <View style={styles.counterBtnContainer}>
                  {/* <CustomButton text="-" onPress={null} type="TERTIARY" /> */}
                  {/* <<<<<<< HEAD */}
                  {/* <Text
                    style={[
                      styles.textCounter,
                      {
                        color: !checked ? 'black' : 'white',
                      },
                    ]}
                    onPress={onDecrement}>
======= */}
                  <Text
                    style={[
                      styles.textCounter,
                      {color: !checked ? 'black' : 'white'},
                    ]}
                    onPress={onDecrement}>
                    {/* >>>>>>> ffbec3184bfc3c41e01530e68147fc3fbb92fecb */}-
                  </Text>
                </View>
                {/* <CustomRectBorderedInput
          
            name="counter"
            placeholder="0"
            control={control}
            rules={{required: 'Username is required'}}
          /> */}
                {/* <<<<<<< HEAD */}
                {/* <Text
                  style={[
                    styles.textCounterNum,
                    {
                      borderColor: !checked ? 'black' : 'white',
                      color: !checked ? 'black' : 'white',
                    },
                  ]}>
                  {counter}
                </Text>
                <View style={styles.counterBtnContainer}> */}
                {/* <CustomButton text="-" onPress={null} type="TERTIARY" /> */}
                {/* <Text
                    style={[
                      styles.textCounter,
                      {
                        color: !checked ? 'black' : 'white',
                      },
                    ]}
                    onPress={onIncrement}>
======= */}
                <Text
                  style={[
                    styles.textCounterNum,
                    {
                      color: !checked ? 'black' : 'white',
                      borderColor: !checked ? 'black' : 'white',
                    },
                  ]}>
                  {counter}
                </Text>
                <View style={styles.counterBtnContainer}>
                  {/* <CustomButton text="-" onPress={null} type="TERTIARY" /> */}
                  <Text
                    style={[
                      styles.textCounter,
                      {color: !checked ? 'black' : 'white'},
                    ]}
                    onPress={onIncrement}>
                    {/* >>>>>>> ffbec3184bfc3c41e01530e68147fc3fbb92fecb */}+
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.rightContainer}>
          <Text
            style={[
              styles.dollarSign,
              {
                color: !checked ? 'black' : 'white',
                alignItems: 'center',
              },
            ]}>
            {checked ? '' : '$'}
          </Text>
          <Text
            style={[
              styles.labelCost,
              ,
              {
                color: !checked ? 'black' : 'white',
                alignItems: 'center',
              },
            ]}>
            {/* {offer} */}

            {checked ? 'Included in' : dataAddon?.price}
            {'\n'}
            {checked ? 'Package' : ''}
            {/* {dataAddon?.price} */}
          </Text>
        </View>
      </View>
      {showAddonModal && (
        <View
          style={{
            backgroundColor: '#EDEDED',
          }}>
          {/* <View style={styles.virtualTwilightContainer}> */}
          <View>
            <View
              style={[
                // styles.mainContainer,
                {
                  flexDirection: 'row',
                  margin: moderateScale(8),
                  padding: moderateScale(4),
                  borderColor: 'black',
                  borderWidth: 1,
                  // paddingLeft: moderateScale(10),
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                },
              ]}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  size={22}
                  fillColor="#0E74BE"
                  unfillColor={'#FFFFFF'}
                  disableText={disable}
                  iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
                  onPress={(isChecked: boolean) => {
                    handleCheckedChange(dataAddon.name, isChecked);
                  }}
                />
                {/* </View>
              <View> */}
                <Text
                  style={[
                    styles.label,
                    {
                      textAlign: 'left',
                      marginLeft: moderateScale(0),
                      alignItems: 'flex-start',
                      // color: !checked ? 'black' : 'white',
                      // alignItems: 'center',
                    },
                  ]}>
                  {/* {title} */}
                  {'Add Agent Introduction /Voice Over'}
                </Text>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[
                      styles.dollarSign,
                      {
                        // color: !checked ? 'black' : 'white',
                        // alignItems: 'center',
                      },
                    ]}>
                    $
                  </Text>
                  <Text
                    style={[
                      styles.labelCost,
                      ,
                      {
                        // color: !checked ? 'black' : 'white',
                        // alignItems: 'center',
                      },
                    ]}>
                    {/* {offer} */}
                    {'50'}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(8),
                padding: moderateScale(4),
                borderColor: 'black',
                borderWidth: 1,
                justifyContent: 'space-between',
                backgroundColor: 'white',
              }}>
              <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                  size={22}
                  fillColor="#0E74BE"
                  unfillColor={'#FFFFFF'}
                  disableText={disable}
                  iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
                  onPress={(isChecked: boolean) => {
                    handleCheckedChange(dataAddon.name, isChecked);
                  }}
                />
                <Text
                  style={[
                    styles.label,
                    {
                      alignItems: 'flex-start',
                      // color: !checked ? 'black' : 'white',
                      // alignItems: 'center',
                    },
                  ]}>
                  {/* {title} */}
                  {/* {dataAddon?.name ?? ' '} */}
                  {'Include Branded Version'}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.dollarSign,
                    {
                      // color: !checked ? 'black' : 'white',
                      // alignItems: 'center',
                    },
                  ]}>
                  $
                </Text>
                <Text
                  style={[
                    styles.labelCost,
                    ,
                    {
                      // color: !checked ? 'black' : 'white',
                      // alignItems: 'flex-end',
                    },
                  ]}>
                  {/* {offer} */}
                  {'0'}
                </Text>
              </View>
            </View>
          </View>
          {/* <BouncyCheckbox
            size={22}
            fillColor="#0E74BE"
            unfillColor={'#FFFFFF'}
            // text="Agree to terms of use & service"
            isChecked={checked}
            disableBuiltInState={disable}
            disableText={disable}
            iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
            onPress={(isChecked: boolean) => {
              if (!disable) {
                // addOnClickedHandler(dataAddon, isChecked);
              } else {
                console.log('isChecked disabled=====>', disable);
              }
            }}
          /> */}
          <View style={styles.virtualTwilightVideoContainer}>
            <VideoPlayer
              video={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              controls={true}
              videoWidth={140}
              videoHeight={110}
              thumbnail={{
                uri: 'https://www.shutterstock.com/image-photo/real-estate-agents-negotiating-house-samples-2092131730',
              }}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <FlatList
              data={videoData}
              renderItem={({item}) => (
                <View
                  style={{
                    // flex: 1,
                    flexDirection: 'column',
                    // margin: 1,
                    backgroundColor: 'white',
                    width: moderateScale(140),
                    margin: moderateScale(4),
                  }}>
                  <View>
                    <Icon
                      name="play"
                      // color="#F26F21"
                      color={'orange'}
                      size={18}
                      style={[
                        styles.icon,
                        {
                          fontSize: moderateScale(22),
                          position: 'absolute',
                          zIndex: 1000,
                          top: '35%',
                          left: '45%',
                        },
                      ]}
                      onPress={() => {}}
                    />
                    <Image
                      style={styles.imageThumbnail}
                      source={{
                        uri: 'https://wallpapercave.com/dwp1x/wp4063159.jpg',
                      }}
                    />
                  </View>
                  <View style={[styles.checkboxContainer, {}]}>
                    <BouncyCheckbox
                      size={22}
                      fillColor="#0E74BE"
                      unfillColor={'#FFFFFF'}
                      disableText={disable}
                      iconStyle={{borderColor: '#0E74BE', borderRadius: 0}}
                      onPress={(isChecked: boolean) => {
                        handleCheckedChange(dataAddon.name, isChecked);
                      }}
                    />
                    <Text
                      style={[
                        styles.label,
                        {
                          alignItems: 'flex-start',
                          // color: !checked ? 'black' : 'white',
                          // alignItems: 'center',
                        },
                      ]}>
                      {/* {title} */}
                      {/* {dataAddon?.name ?? ' '} */}
                      {item.name ?? ''}
                    </Text>
                  </View>
                </View>
              )}
              //Setting the number of column
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      )}
    </View>
  );
};

var styless = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default AddonCell;
