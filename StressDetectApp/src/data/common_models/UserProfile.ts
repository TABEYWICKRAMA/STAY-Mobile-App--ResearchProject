export interface UserProfileModel {
  id?: string;
  first_name?: string;
  last_name?: string;
  photo_filename?: any;
  logo_filename?: any;
  icon?: any;
  username?: string;
  brokerage_name?: any;
  brokerage_icon?: any;
  title_company_icon?: any;
  brokerage?: any;
  brokerage_address?: string;
  brokerage_city?: string;
  brokerage_state?: string;
  brokerage_id?: number;
  phone?: string;
  email?: string;
  referral_from?: string;
  mls_login?: string;
  mls_password?: string;
  password_hash?: string;
  confirmPassword?:string;
  address?: string;
  lat?: number;
  lng?: number;
  city?: string;
  state?: string;
  unit?: number;
  zip_code?: string;
  zipcode?: string;
  markets?: any;
  name?: string;
  type?: any;
  intent?: any;
  discount?: any[];
  packages?: any[];
  market?: any;
  market_id?: string
  contactBrokerageEmail?: any[];
  contactCustomerEmail?: any[];
  // marketBrokerageData?: any[];
  marketBrokerageData?: [{
    market?: any,
    brokerage?: {
      value?: number,
      label?: string
    }

  }];
  email_type?: string;
  email_intent?: string;
  brokerages?:any;
  acceptTerms?:boolean;
  
  
}