export interface PlanRequestModel {
  square_foot?: string;
  squarefoot?: number;
  zip_code?: string;
  discount_code?: number;
  brokerage_id?: number;
  customer_id?: number;
  market_id?:number

  property_address?:string
  state?:string
  city?:string
  unit?:string
  lat?: number;
  lng?: number;
  access_prop_type?:string;
  parcel_number?:any;

  



}
