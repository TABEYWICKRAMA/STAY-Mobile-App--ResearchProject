import {PopOverModel} from './PopOver';

export interface AddOnModel {
  product_type?: any;
  is_essential?: boolean;
  special?: any;
  id?: number;
  code?: string;
  name?: any;
  description?: string;
  is_addon?: any;
  more_information?: string;
  nice_name?: string;
  is_featured?: any;
  isEssential?: any;
  price?: any;
  counter?: boolean;
  priceDescription?: string;
  popover?: PopOverModel;
  visibility?: boolean;
  checked?: boolean;
  images?: string[];
  market?: any;
  time?: number;
  unit?: any;
  squarefoot?: SqftModel;
  agentVisibility?: boolean;
  type?: string;
  addon_type_id?: any;
  show_price?: any;
  photographer_description?: any;
  has_sqft_pricing?: any;
  product_variant_price?: any[];
  product_photos?: any[];
  service_time?: any;
  flat_rate?: any;
  per_photo?: any;
  squarefoot_id?: any;
}

export type AddOnType =
  | ''
  | 'essential'
  | 'featured'
  | 'other'
  | 'videography'
  | 'photography'
  | 'luxury';

export type AddOnUnitType = 'flatFee' | 'perPhoto' | 'sqftRange';

export interface SqftModel {
  squarefoot_id: number;
  min_range: number;
  max_range: number;
  square_foot_range: string;
}

export interface UnitModel {}
