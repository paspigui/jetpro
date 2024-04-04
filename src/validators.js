import * as yup from "yup";

export const stringValidator = yup.string().min(3).required();
