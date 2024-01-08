import {AddOnModel} from './AddOn';

export interface PackageModel {
  id?: number;
  code?: string;
  name?: string;
  price?: number;
  category_id?: number;
  type?: string;
  header?: string;
  subheader?: string;
  save?: number;
  market?: string;
  brokerage?: string;
  products?: AddOnModel[];
  package_has_product?: any[];
}

export interface ProductPhoto {
  id: number;
  image_url: string;
  discription?: any;
  product_id: number;
}

export interface PackageHasProductVariant {
  id: number;
  product_variant_id: number;
  package_id: number;
  price: string;
}

export interface ProductVariantPrice {
  market_id: number;
  squarefoot_id?: number;
  per_photo: number;
  flat_rate?: number;
  status: number;
  package_id?: any;
  id: number;
  product_id: number;
  price: number;
  service_time: number;
  package_has_product_variant: PackageHasProductVariant[];
}

export interface Products {
  has_questions: number;
  is_fee: number;
  is_featured: number;
  is_count: number;
  parent_product_id: number;
  id: number;
  code: string;
  name: string;
  price: number;
  description: string;
  is_addon: number;
  is_deleted: number;
  created_ts: number;
  more_information: string;
  requires_trip: number;
  nice_name: string;
  show_price: number;
  photographer_description: string;
  alacarte_increase: number;
  type: string;
  has_sqft_pricing: number;
  addon_type_id: number;
  product_photos: ProductPhoto[];
  product_variant_price: ProductVariantPrice[];
}

export interface PackageHasProduct {
  package_id: number;
  product_id: number;
  cardinality: number;
  products: Products;
}

export interface PackageType {
  id: number;
  name: string;
  description: string;
}

export interface Datum {
  id: number;
  code: string;
  name: string;
  price: string;
  is_deleted: number;
  created_ts: number;
  cardinality: number;
  category_id: number;
  parent_package_id?: any;
  package_has_product: PackageHasProduct[];
  package_type: PackageType;
}

export interface RootObject {
  data: Datum[];
}
