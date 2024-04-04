import * as yup from "yup";

export const placesTypeValidator = yup
  .string()
  .min(3)
  .required()
  .label("placesType");

export const placesZipCodeValidator = yup
  .number()
  .min(5)
  .required()
  .label("placesZipCode");
