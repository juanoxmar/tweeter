import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid email'),
  userName: yup.string().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Minimum length of 6 required!'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match'),
});

export default schema;
