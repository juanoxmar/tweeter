import * as yup from 'yup';

const schema = yup.object({
  tweet: yup.string().min(1).max(280),
});

export default schema;
