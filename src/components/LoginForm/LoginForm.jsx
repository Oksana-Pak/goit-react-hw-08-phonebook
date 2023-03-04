import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  FormikForm,
  FormTitle,
  FormikInput,
  Button,
  DropFirst,
  DropSecond,
  DropThird,
  DropForth,
  DropFifth,
} from './LoginForm.styled';
import { FormikError } from '../ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .min(8, 'Too short email! Please, enter min 8 symbols')
    .max(30, 'Too long email! Please, enter max 30 symbols')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      'Email can only contain English letters.'
    )
    .required('email is a required field'),
  password: yup
    .string()
    .trim()
    .min(8, 'Too short email! Please, enter min 8 symbols')
    .max(30, 'Too long email! Please, enter max 30 symbols')

    .required('password is a required field'),
});
const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <section>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormikForm autoComplete="off">
            <FormTitle>Welcome</FormTitle>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikError name="email" component="p" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <FormikError name="password" component="p" />
            <Button type="submit">Log In</Button>
          </FormikForm>
        </Formik>
        <div>
          <DropFirst></DropFirst>
          <DropSecond></DropSecond>
          <DropThird></DropThird>
          <DropForth></DropForth>
          <DropFifth></DropFifth>
        </div>
      </Container>
    </section>
  );
};
