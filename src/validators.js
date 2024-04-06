// import { validateYupSchema } from "formik";
import * as yup from "yup";

export const stringValidator = yup
  .string()
  .min(2, "Ce champ doit contenir au moins 2 caractères")
  .required("Ce champ est requis");

export const numberValidator = yup
  .number()
  .min(1000, "Au moins 5 chiffres")
  .required("Ce champ est requis");
