import * as yup from "yup";

export const logniShcema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid")
    .required("This field is required")
    .trim(),
  password: yup
    .string()
    .required("This field is required")
    .min(5, "Least than 5 char")
    .max(120, "more than 120 char")
    .trim(),
});
