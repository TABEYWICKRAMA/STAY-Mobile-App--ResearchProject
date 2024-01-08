export interface ProductVariantRequestModel {
  product_id?: number;
  squarefoot_id?: number;
  package_id?: number | null;
  market_id?: number | null;
  per_photo?: any;
  discountedPrice?: number;
  service_time?: any;
  price?: any;
  flat_rate?: any;
}
