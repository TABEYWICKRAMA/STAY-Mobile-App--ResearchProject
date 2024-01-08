export interface ImageUrl {
  ETag?: string;
  Location?: string;
  key?: string;
  Key?: string;
  Bucket?: string;
}

export interface Data {
  image_url?: ImageUrl;
}

export interface ImageObject {
  data?: Data;
}
