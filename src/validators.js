import * as yup from "yup";

export const stringValidator = yup
  .string()
  .min(4, "Ce champ doit contenir au moins 4 caractères")
  .required("Ce champ est requis");

export const numberValidator = yup
  .number()
  .typeError("Ce champ doit être un nombre")
  .min(1)
  .required("Ce champ est requis");

export const isFreeValidator = yup.boolean().required().default(true);

export const selectValidator = yup
  .string()
  .notOneOf([""], "Ce champ est requis")
  .required("Ce champ est requis");

export const addressValidator = yup.object().shape({
  number: numberValidator,
  street: stringValidator,
  city: stringValidator,
  country: stringValidator,
  zipCode: stringValidator,
});
