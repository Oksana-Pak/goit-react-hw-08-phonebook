import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import {
  errorMessage,
  successMessage,
} from 'components/services/notifications';

import {
  FormikForm,
  FormikLabel,
  FormikInput,
  FormikError,
  FormikButton,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('name is a required field'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('number is a required field'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const checkContact = name => contacts.find(contact => name === contact.name);

  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(values.name)) {
      errorMessage(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    successMessage(`${values.name} is added to contacts`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormikForm>
        <FormikLabel htmlFor="name">
          Name
          <FormikInput type="text" name="name" />
          <FormikError name="name" component="p" />
        </FormikLabel>
        <FormikLabel htmlFor="number">
          Number
          <FormikInput type="tel" name="number" />
          <FormikError name="number" component="p" />
        </FormikLabel>
        <FormikButton type="submit">Add contact</FormikButton>
      </FormikForm>
    </Formik>
  );
};
