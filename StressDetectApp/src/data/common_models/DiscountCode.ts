export interface DiscountCodeModel {
  id?: number;
  admin_id?: number;
  amount?: number;
  recurrent?: any;
  products?: any[];
  packageProduct?: any[];
  is_straight?: boolean;
  code?: string;
  market?: string;
  agent?: any;
  brokerage?: any;
  title_company?: any;
  discount_code?: string;
  discountedPrice?: number;
  customer_id?: number;
  customer?: any;
  recurring?: number;
  brokerage_id?: number;
  title_company_id?: number;
  usage?: string;
  expire_time?: string;
  expire_ts?: any;
  package_product_variant_discount?: any[];
  product_variant_discount?: any[];
  status?: any;
  titleCompany?: any;
  startDate?: string;
  services?: {
    serviceName: string;
    unit: string;
    market: string;
    currentPrice: number;
  }[];
}
