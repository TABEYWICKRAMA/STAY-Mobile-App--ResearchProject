export const TextAbstract = (text: string, length: number) => {
  if (text == null) {
    return '';
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  const last = text.lastIndexOf(' ');
  text = text.substring(0, last);
  return text + '...';
};

export const camalize = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m: any, chr: any) => chr.toUpperCase());
};
export const phoneNumberRawFormat = (str: string) => {
  return str.replace(/[- )(]/g, '');
};
export const CVVFormat = (str: string) => {
  return str.replace(/^[0-9]{3,4}$/g, '');
};
