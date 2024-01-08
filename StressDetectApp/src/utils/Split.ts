export const splitOnSpace = (data: string) => {
  const splitData = data.split(" ");
  const first = splitData[0];
  const last = splitData[splitData.length - 1];
  return [first, last];
};
export const formatName = (str: string) => {
  let strArr = str.split(" ");
  const newArr = [];
  strArr.forEach((element: any) => newArr.push(element));
  const first_name = newArr[0];
  const last_name = newArr.slice(1, newArr.length + 1).join(" ");

  return [first_name, last_name];
};
