import {AddOnModel} from '../data/common_models/AddOn';

export const groupBy = (items: any, key: any) =>
  items.reduce(
    (result: any, item: any) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {},
  );

export const removeAddonDuplicates = (myArr: AddOnModel[], prop: any) => {
  if (myArr != undefined) {
    return myArr.filter((obj: any, pos: any, arr: any) => {
      return (
        arr.map((mapObj: AddOnModel[]) => mapObj[prop]).indexOf(obj[prop]) ===
        pos
      );
    });
  }
};
