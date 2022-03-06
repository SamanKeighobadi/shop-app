import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Firstname is required")
    .min(10, "Least than 10 char")
    .max(255, "more than 255 char")
    .trim(),
  lastname: yup
    .string()
    .required("Lastname is required")
    .min(5, "Least than 5")
    .max(255, "more than 255 char")
    .trim(),
  email: yup
    .string()
    .email("Email is no valid")
    .required("Email  is required")
    .trim(),
  password: yup
    .string()
    .required("Password  is required")
    .min(5, "least tna 5 char")
    .max(120, "more than 120 char")
    .trim(),
  rules: yup
    .boolean()
    .oneOf([true], "Must accept our terms and conditioans"),
});
