export interface PropertyDetailModel {
  mls_entry?: string[];
  mls_username?: string;
  mls_password?: string;
  mls_type?: string[];
  mls_sale_rent_option?: string;
  mls_co_lister?: {
    co_lister_username: string;
    co_lister_password: string;
  }[];
  mls_description?: string;

  prop_on_behalf?: string;
  prop_primary_contact_behalf?: string;
  primary_contact_name?: string;
  primary_contact_email?: string;
  primary_contact_phone?: string;
  prop_address?: string;
  prop_unit?: number;
  prop_city?: string;
  prop_state?: string;
  prop_postal_code?: number;
  prop_list_price?: number;
  prop_beds?: number;
  prop_baths?: number;

  access_gate_code?: string;
  access_alarm_code?: string;
  access_occupancy?: string;
  access_prop_type?: string;
  access_accessor?: string;
  access_pets?: any;
  owner_name?:string;
  owner_phone?:string
  parcel_number?:number,
  access_access_date?: any;
  access_post_sign_lock?: string;
  access_special_instructions?: string;
  access_access_time?: string;

  location_confirmation?: any;
  directions?: string;
}
