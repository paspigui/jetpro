import * as yup from "yup";

export const stringValidator = yup
  .string()
  .min(5, "Ce champ doit contenir au moins 5 caractères")
  .required("Ce champ est requis");

export const numberValidator = yup
  .number()
  .typeError("Ce champ doit être un nombre")
  .min(1, "Ce champ doit contenir au moins 1 caractère")
  .required("Ce champ est requis");

export const isFreeValidator = yup.boolean().required().default(true);

export const priceValidator = yup.number().required("Ce champ est requis");

export const addressValidator = yup.object().shape({
  number: numberValidator,
  street: stringValidator,
  city: stringValidator,
  country: stringValidator,
  zipCode: stringValidator,
});
