import * as Yup from "yup";

export interface FormMultiMarket {
  market: any;
  brokerage: any;
}

export const MultiMarketSchema = Yup.object({
  market: Yup.number().required("market is required"),
  brokerage: Yup.object()
    .shape({
      label: Yup.string().required("Required"),
      value: Yup.number().required("Required"),
    })
    .required("Brokerage is required"),
}).required();
