import {StringifyOptions} from 'querystring';

export interface CartItemModel {
  id: number;
  quantity: number;
  name: string;
  price: number;
  type?: String;
  incremental?: boolean;
  initialPrice?: number;
  discount?: number;
}
