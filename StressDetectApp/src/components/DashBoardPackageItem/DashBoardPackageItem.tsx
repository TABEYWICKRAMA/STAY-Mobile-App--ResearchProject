import React, {Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Platform, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {AddOnModel} from '../../data/common_models/AddOn';
import {PackageModel} from '../../data/common_models/Package';
import MainButton from '../MainButton/MainButton';
import styles from './DashBoardPackageItem.styles';
import {useNavigation} from '@react-navigation/native';
import {
  getAddonsList,
  setSelectedPlan,
} from '../../ReduxCore/reduxPlan/plan.actions';
import {
  isAddonFetched,
  isSelectedPlan,
} from '../../ReduxCore/reduxPlan/plan.selector';
import is from 'date-fns/esm/locale/is/index.js';
import CustomButton from '../CustomButtonSplash/CustomButton';
import {PlanRequestModel} from '../../data/common_models/PlanRequestModel';
import {FormOrderInit} from '../../screens/OrderLoadingScreen/OrderInitSchema';
import {PaginationModel} from '../../data/common_models/Pagination';
import {FilterModel} from '../../data/common_models/FilterModel';
import {
  setPlanDiscount,
  setPlanTotal,
} from '../../ReduxCore/reduxOrder/order.actions';

interface IDashboardAddonCell {
  data: PackageModel;
  index?: number;
  title?: string;
  discount?: string;
  cost?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  description?: AddOnModel[];
  onPress?: any;
  plansOption?: PlanRequestModel;
}
const dataa = [
  {name: 'Unlimited Photos'},
  {name: 'MLS Entry'},
  {name: 'marketing_suite'},
];
const DashboardAddonCell: React.FC<IDashboardAddonCell> = ({
  data,
  index,
  title,
  cost,
  discount,
  height,
  width,
  borderColor,
  description,
  onPress,
  plansOption,
}) => {
  const navigation = useNavigation();
  const dispatch: Dispatch<any> = useDispatch();

  const isAddonsFetced: boolean = useSelector(isAddonFetched);
  const isPlansSelected: boolean = useSelector(isSelectedPlan);
  const handlePlanSelect = (data: PackageModel) => {
    dispatch(setSelectedPlan(data));
    dispatch(setPlanDiscount(data.save!));
    dispatch(setPlanTotal(data.price!));
  };
  async function onSubmitAddon(dataAddon: PlanRequestModel) {
    handlePlanSelect(data);
    console.log(JSON.stringify('==select package data==>>>' + data, null, 2));
    const paginationDetails: PaginationModel = {
      page: 1,
      limit: 100,
    };

    let filterModel: FilterModel = {
      paginationDetails: paginationDetails,
    };
    let filterObj: any = {};

    if (dataAddon.zip_code as number) {
      filterObj.zip_code = dataAddon.zip_code as number;
    }

    if (dataAddon.square_foot as number) {
      filterObj.squarefoot = dataAddon.square_foot as number;
    }

    filterModel.filterObj = filterObj;

    await dispatch(getAddonsList(filterModel));
    setTimeout(function(){
  }, 1000);
    navigation.navigate('OrderAddonScreen' as never, {} as never);
  }

  React.useEffect(() => {
    // dispatch(getOrderSummarySnapshot());
    // if (isAddonsFetced) {
    //   navigation.navigate('OrderAddonScreen' as never, {} as never);
    // }
    // if (isPlansSelected) {
    //   navigation.navigate('OrderAddonScreen' as never, {} as never);
    // }
  }, [dispatch]);
  return (
    // console.log('desc --------->>> ' + description),
    <TouchableOpacity
      style={[
        styles.mainCellContainer,
        // { width: moderateScale(parseInt(width as string)) },
        // { height: moderateScale(parseInt(height as string)) },
        //  Platform.OS === 'ios' ? moderateScale(32) : moderateScale(0),
        {
          // plansList.indexOf(e) != 1 ? '#0E74BE' : '#F26F21',
          // borderColor: title?.includes('PREMIER') ? '#F26F21' : '#0E74BE',
          borderColor: index == 1 ? '#F26F21' : '#0E74BE',

          // borderColor: dataa.indexOf('PREMIER') ? '#F26F21' : '#0E74BE',
          // borderColor: borderColor,
          height:
            Platform.OS === 'ios' ? moderateScale(494) : moderateScale(514),
          width: moderateScale(285),
        },
      ]}>
      <Text
        style={[
          styles.TitleText,
          {
            // color: title?.includes('PREMIER') ? '#F26F21' : '#0E74BE',
            color: index == 1 ? '#F26F21' : '#0E74BE',
          },
        ]}>
        {'' + data?.name ?? ''}
        {/* {title} */}
      </Text>
      <View style={[styles.HeaderContainer]}>
        {/* <View style={[styles.iteml]}>
          <FontAwesome5Icon
            name="dollar-sign"
            color={'white'}
            style={[styles.Icon]}
          />
        </View>
        <View style={[styles.itemr]}> */}
        <Text style={[styles.SubTitleDollarText]}>
          {'$ '}
          {/* {'$ ' + cost} */}
        </Text>
        <Text style={[styles.SubTitleText]}>
          {data?.price}
          {/* {'$ ' + cost} */}
        </Text>
        {/* </View> */}
      </View>
      <View style={[styles.HeaderContainer]}>
        <View style={[styles.subSectionContainer]}>
          {/* <View style={[styles.textl]}> */}
          <Text style={[styles.DiscountText]}>Save</Text>
          {/* </View> */}
          {/* <FontAwesome5Icon
            name="dollar-sign"
            style={[styles.IconSmall]}
            size={16}
          /> */}
          {/* <View style={[styles.textr]}> */}
          <Text style={[styles.DiscountText]}>
            {'$ ' + data?.save}
            {/* {'$ ' + discount} */}
          </Text>
          {/* </View> */}
        </View>
      </View>
      <View>
        <View style={[styles.list]}>
          <FlatList
            // style={[styles.DiscText]}
            data={data?.products}
            // data={description}
            renderItem={({item}) => (
              <Text style={[styles.DiscText1]}>{item.name}</Text>
            )}
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <CustomButton
          // backgroundColor="#0E74BE"
          text="SELECT"
          onPress={() => onSubmitAddon(plansOption!)}
          // onPress={onPress}
          // onSubmitAddon(plansOption)
          // onPress={handlePlanSelect(data)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DashboardAddonCell;
