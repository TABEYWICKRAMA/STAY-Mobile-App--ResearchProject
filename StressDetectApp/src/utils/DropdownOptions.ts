import {camalize} from './TextFormat';

export const transformNameToOption = (labelArray: any) => {
  let result: {value: string; label: string}[] = [];

  for (let i = 0; i < labelArray.length; i++) {
    result.push({
      value: camalize(labelArray[i]),
      label: labelArray[i],
    });
  }
  return result;
};

export const transformNameAndIdToOption = (labelArray: any) => {
  let result: {value: string; label: string}[] = [];
  for (let i = 0; i < labelArray.length; i++) {
    result.push({
      value: labelArray[i].id,
      label: labelArray[i].name,
    });
  }
  return result;
};
export const transformMonthToOption = (monthArray: any) => {
  let result: {value: string; label: string}[] = [];
  for (let i = 0; i < monthArray.length; i++) {
    if (i >= 9) {
      result.push({
        value: `${i + 1}`,
        label: monthArray[i],
      });
    } else {
      result.push({
        value: 0 + `${i + 1}`,
        label: monthArray[i],
      });
    }
  }
  return result;
};
export const transformRangeAndIdToOption = (labelArray: any) => {
  let result: {value: string; label: string}[] = [];
  for (let i = 0; i < labelArray.length; i++) {
    result.push({
      value: labelArray[i].id,
      label: labelArray[i].square_foot_range,
    });
  }
  return result;
};

export const extractValue = (primary_market: any, prop: any) => {
  let extractedValue = primary_market.map((item: any) => item[prop]);
  return extractedValue;
};
export const transformDescriptionAndIdToOption = (labelArray: any) => {
  let result: {value: string; label: string}[] = [];
  for (let i = 0; i < labelArray.length; i++) {
    result.push({
      value: labelArray[i].id,
      label: labelArray[i].description,
    });
  }
  console.log(result);
  return result;
};
