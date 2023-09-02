import * as yup from "yup";

const schema = yup.object().shape({
  state: yup
    .string()
    .required("The state is required"),
  year: yup
    .string()
    .required("The year is required"),
});

export default schema;