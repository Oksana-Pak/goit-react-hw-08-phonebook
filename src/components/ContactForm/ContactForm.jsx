import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';
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
  const contacts = useSelector(getContacts);

  const checkContact = name => contacts.find(contact => name === contact.name);

  const newContact = ({ name, number }) => ({ id: nanoid(), name, number });

  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(values.name)) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact(newContact(values)));
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
