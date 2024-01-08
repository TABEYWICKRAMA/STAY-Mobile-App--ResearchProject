import React, {Dispatch, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../screens/profileScreen/Profile.styles';
import {TextInputOutlined} from '../CustomRegisterInput/TextInputOutlined';
import {useSelector} from 'react-redux';
import {selectMarketList} from '../../ReduxCore/reduxMarket/market.selectors';
import {selectBrokerList} from '../../ReduxCore/reduxBrokerage/brokerage.selectors';
import {BrokerageModel} from '../../data/common_models/Brokerage';
import {MarketModel} from '../../data/common_models/Market';

import CustomButton from '../CustomButton/CustomButton';
import {moderateScale, scale} from 'react-native-size-matters';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormMultiMarket, MultiMarketSchema} from './MultipleMarketSchema';
import BrokerageService from '../../data/rest/services/brokerage.service';
import {BrokerageInfoSchema, FormBrokerageInfo} from './BrokerageInfoSchema';
import {useDispatch} from 'react-redux';
import {getMarketList} from '../../ReduxCore/reduxMarket/market.actions';
import {RootState} from '../../ReduxCore/configureStore';
import {transformNameAndIdToOption} from '../../utils/DropdownOptions';

interface MultipleMarketProps {
  market_id?: number;
  broker?: any;
  selectedMarketIds?: any;
  getCurrentMarketBroker?: any;
  getPreviousMarket?: any;
  userBrokerageList?: any;
  onDelete?: any;
  index?: any;
}

const MultipleMarket: React.FunctionComponent<MultipleMarketProps> = ({
  market_id,
  broker,
  userBrokerageList,
  getCurrentMarketBroker,
  getPreviousMarket,
  selectedMarketIds,
  onDelete,
  index,
}) => {
  // selectors
  // const marketList = useSelector(selectMarketList);
  // dispatch
  const dispatch: Dispatch<any> = useDispatch();
  // react-hook-form
  const methods = useForm<FormMultiMarket>({
    resolver: yupResolver(MultiMarketSchema),
  });
  const {handleSubmit, control, setValue} = methods;

  const marketList: MarketModel[] = useSelector(
    (state: RootState) => state.marketReducer.marketList,
  );
  const [marketOptions, setMarketOptions] = React.useState<any>([]);
  // market dropdown
  React.useEffect(() => {
    if (marketList) {
      const marketOptionsDropDown = transformNameAndIdToOption(marketList);
      setMarketOptions(marketOptionsDropDown);
    }
  }, [marketList]);

  const methodsBrokerage = useForm<FormBrokerageInfo>({
    resolver: yupResolver(BrokerageInfoSchema),
  });
  const {
    handleSubmit: brokerageHandleSubmit,
    control: brokerageControl,
    setValue: setValueBrokerage,
  } = methodsBrokerage;

  const w_market = useWatch({
    control,
    name: 'market',
  });

  React.useEffect(() => {
    if (w_market) {
      setVisible(true);
      setMarketId(+w_market);

      // getCurrentMarketBroker(w_market,w_broker)
    } else {
      setMarketId(null);
      setValue('brokerage', null);
      setVisible(false);
    }
  }, [w_market]);

  // use-watch
  const w_broker: any = useWatch({
    control,
    name: 'brokerage',
  });

  React.useEffect(() => {
    if (w_broker && w_market) {
      setBrokerage(w_broker);

      // //console.log("wChanged");
      if (w_broker === 'other') {
        toggleModalOtherBrokerage();
      }
    } else {
      //   setBrokerage(null);
      setValue('brokerage', null);
    }
  }, [w_broker]);

  //   use-states

  //dropdown option toggle
  const [openMarket, setOpenMarket] = React.useState(false);
  const [openBrokerage, setOpenBrokerage] = React.useState(false);

  const [visible, setVisible] = React.useState<boolean>(false);
  const [marketId, setMarketId] = React.useState<any>(market_id);
  const [brokerage, setBrokerage] = React.useState<any>(broker);

  const [itemsMarket, setItemsMarket] = React.useState(
    marketList?.map(e => ({label: e?.name, value: e?.id})),
  );

  const [brokerageName, setBrokerageName] = React.useState<string>('test');

  const selectAllBrokerageList = useSelector(selectBrokerList);
  const [itemsBrokerage, setItemsBrokerage] = React.useState(
    selectAllBrokerageList?.map(e => ({
      label: e?.name,
      value: e?.id,
    })),
  );

  //   modal other
  const [showModalOtherBrokerage, setShowModalOtherBrokerage] =
    React.useState(false);
  //brokerage other option toggle modal
  const toggleModalOtherBrokerage = () => {
    console.log('toggleModalOtherBrokerage');
    setShowModalOtherBrokerage(v => !v);
  };

  // update market-list
  React.useEffect(() => {
    console.log('marketlist updated');
    if (marketList) {
      setItemsMarket(marketList?.map(e => ({label: e?.name, value: e?.id})));
    }
  }, [marketList]);
  // use-previous
  const usePrevious = value => {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, []); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  };

  const prevMarket = usePrevious(marketId);
  //   use-effects

  // set Initial market / broker values
  React.useEffect(() => {
    // const newValue = { label: 'Other', value: "other" };
    // setItemsBrokerage((itemsBrokerage) => itemsBrokerage.concat(newValue));
    setValue('market', market_id);
    setValue('brokerage', +brokerage);
  }, []);

  // adding other to brokerage list
  React.useEffect(() => {
    // const newValue = { label: 'Other', value: "other" };

    // setItemsBrokerage((itemsBrokerage) => itemsBrokerage.concat(newValue));

    setItemsBrokerage(itemsBrokerage => [
      {
        value: 'other',
        label: 'Other',
      },
      ...itemsBrokerage,
    ]);
  }, [selectBrokerList]);

  const setOpenVal = () => {};

  const brokerOnchange = async (e: any) => {
    console.log('brokerOnchange call...........................');
    const filterd = itemsBrokerage.find(brokerage => brokerage.value === e);
    console.log(filterd);

    setBrokerageName(filterd.label);
    console.log(e);
    if (e && e == 'other') {
      console.log('other selected');
      //toggleModalOtherBrokerage();
      //handleMultipleBrokerageMarketSubmit(onSubmit)();
    } else {
      setBrokerage(e);

      //handleSubmit(onSubmit)();
    }
  };

  const onSelectBrokerageItem = async (e: any) => {
    let marketBroker = {
      market: marketId,
      brokerage: +e.value,
    };
    console.log('on submit call');
    console.log(marketBroker);
    getCurrentMarketBroker(marketBroker);
    getPreviousMarket({
      prev: prevMarket,
      future: marketId,
    });
  };

  const marketOnchange = async (e: any) => {
    setValue('brokerage', null);
    setMarketId(+e);
  };

  const addBroker = (data: BrokerageModel) => {
    return BrokerageService.addBrokerage(data).then(
      async response => {
        // toast.success(toTitleCase("new brokerage added"));
        //console.log(response.data.data);

        toggleModalOtherBrokerage();
        setValue('brokerage', response.data.data.id);
        console.log(response.data.data.id);
        //dispatch(getMarketList());

        //handleSubmit(onSubmit)();
      },
      error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // toast.warning(message);
      },
    );
  };

  // submit other broker
  const onSubmitBrokerage = async (dataBrokerage: FormBrokerageInfo) => {
    //console.log(JSON.stringify(data, null, 2));
    dataBrokerage.market_id = marketId;
    addBroker(dataBrokerage);
  };

  const onMarketIdChange = marketId => {
    const filterdArray = selectAllBrokerageList.filter(
      item => item.market_id === marketId,
    );

    const formattedArray = filterdArray.map(el => ({
      label: el.name,
      value: el.id,
    }));
    formattedArray.push({
      value: 'other',
      label: 'Other',
    });

    const reorderedItems = [
      formattedArray.find(item => item.value === 'other'),
      ...formattedArray.filter(item => item.value !== 'other'),
    ];
    setItemsBrokerage(reorderedItems);
  };

  // const changeBrokerage = (val: any) => {
  //     const filterd = itemsMarket.find((market) =>
  //         market.value === val)
  //     console.log(filterd);
  //     setBrokerageName(filterd.label);

  // }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModalOtherBrokerage}
        onRequestClose={toggleModalOtherBrokerage}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {height: moderateScale(320), marginBottom: moderateScale(0)},
            ]}>
            <Text style={[styles.pageText, {fontWeight: 'bold', marginTop: 0}]}>
              BROKERAGE INFO
            </Text>

            <View style={styles.ItemContent}>
              <Text style={styles.itemtxtl}>Brokerage</Text>
              <View style={styles.profileEditComponent}>
                <View>
                  <Controller
                    control={brokerageControl}
                    name="name"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        placeholder="Brokerage"
                        keyboardType="email-address"
                        onChangeText={onChange}
                        value={value}
                        style={inlineStyles.input}
                      />
                    )}
                    rules={{
                      required: {
                        value: true,
                        message: 'Please fill out all required fields.',
                      },
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.ItemContent}>
              <Text style={styles.itemtxtl}>Market</Text>
              <View style={styles.profileEditComponent}>
                <View>
                  <Controller
                    control={control}
                    name="market"
                    render={({field: {onChange, value}}) => (
                      <DropDownPicker
                        disabled={true}
                        style={styles.dropdown}
                        placeholder="Select your market"
                        placeholderStyle={[
                          styles.label,
                          {
                            color: 'grey',
                            fontWeight: '200',
                          },
                        ]}
                        open={openMarket}
                        setOpen={() => setOpenMarket(!openMarket)}
                        items={itemsMarket}
                        value={value}
                        setValue={item => {
                          onChange(item);
                          console.log(item);
                        }}
                        onChangeValue={item =>
                          console.log(item.label, item.value)
                        }
                      />
                    )}
                    rules={{
                      required: {
                        value: true,
                        message: 'Please fill out all required fields.',
                      },
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <CustomButton
                text={'SAVE'}
                type="PRIMARY"
                onPress={brokerageHandleSubmit(onSubmitBrokerage)}
              />
            </View>
            <View style={styles.btnContainer}>
              <CustomButton
                text={'CANCEL'}
                type="RED"
                onPress={toggleModalOtherBrokerage}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.ItemContent}>
        <Text style={styles.itemtxtl}>Market</Text>
        <View style={styles.profileEditComponent}>
          <View
            style={[
              {
                zIndex: 1000,
              },
            ]}>
            <Controller
              control={control}
              name="market"
              render={({field: {onChange, value}}) => (
                <DropDownPicker
                  listMode="MODAL"
                  searchable={true}
                  style={styles.dropdown}
                  placeholder="Select your market"
                  placeholderStyle={[
                    styles.label,
                    {
                      color: 'grey',
                      fontWeight: '200',
                    },
                  ]}
                  open={openMarket}
                  setOpen={() => setOpenMarket(!openMarket)}
                  items={marketOptions}
                  value={value}
                  setValue={item => onChange(item)}
                  onChangeValue={val => onMarketIdChange(val ?? 0)}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: 'Please fill out all required fields.',
                },
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.ItemContent}>
        <Text style={styles.itemtxtl}>Brokerage</Text>
        <View style={styles.profileEditComponent}>
          <View
            style={[
              {
                zIndex: 1000,
              },
            ]}>
            <Controller
              control={control}
              name="brokerage"
              render={({field: {onChange, value}}) => (
                <DropDownPicker
                  listMode="MODAL"
                  searchable={true}
                  style={styles.dropdown}
                  placeholder="Select your brokerage"
                  placeholderStyle={[
                    styles.label,
                    {
                      color: 'grey',
                      fontWeight: '200',
                    },
                  ]}
                  open={openBrokerage}
                  setOpen={() => setOpenBrokerage(!openBrokerage)}
                  items={itemsBrokerage}
                  value={value}
                  onSelectItem={e => onSelectBrokerageItem(e)}
                  onChangeValue={e => {
                    brokerOnchange(e);
                  }}
                  setValue={item => {
                    onChange(item);
                  }}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: 'Please fill out all required fields.',
                },
              }}
            />
          </View>
        </View>
      </View>
      {index !== 0 && (
        <View
          style={[
            inlineStyles.buttonSectionCustomRegsitration,
            {zIndex: -4000},
          ]}>
          <CustomButton text={'DELETE'} onPress={() => onDelete(index)} />
        </View>
      )}
    </>
  );
};
const inlineStyles = StyleSheet.create({
  buttonSectionCustomRegsitration: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: moderateScale(276),
    marginTop: 0,
    width: moderateScale(80),
    // backgroundColor: colors.DarkGreyColor,
  },
  input: {
    width: moderateScale(25),
    height: moderateScale(42),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  errorText: {
    color: '#D32F2F',
    left: moderateScale(120),
    fontFamily: Platform.OS === 'ios' ? 'Bebas Neue Pro' : 'bebasneuepro',
    fontSize: scale(14),
  },
});
export default MultipleMarket;
