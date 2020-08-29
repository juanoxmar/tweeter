import * as yup from 'yup';

const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});

export default schema;
