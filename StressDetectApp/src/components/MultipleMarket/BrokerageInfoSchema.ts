import * as Yup from "yup";
import { BrokerageModel } from "../../data/common_models/Brokerage";


export interface FormBrokerageInfo extends BrokerageModel {}

export const BrokerageInfoSchema = Yup.object({
  //name: Yup.string().required("Brokerage Name is required"),
  // address: Yup.string().required("Brokerage Address is required"),
  // city: Yup.string().required("Brokerage City is required"),
  // state: Yup.string().required("Brokerage State is required"),
});
