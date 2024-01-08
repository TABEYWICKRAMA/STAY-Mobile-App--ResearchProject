import {LocationInfoObject} from './Location';

export interface BrokerageModel {
  id?: string;
  name?: string;
  profileImage?: string;
  website?: string;
  phone?: string;
  email?: string;
  brokerageAddress?: LocationInfoObject;
  market_id?: number;
  city?: string;
  state?: string;
  notificationEmails?: string[];
  intent?: string;
  type?: string;
  zipcode?: string;
  discount?: any[];
  packages?: any[];
}
