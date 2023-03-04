import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectEditContact } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';
import { changeContact } from 'redux/contacts/contactsSlice';
import { successMessage } from 'components/services/notifications';

import {
  FormikForm,
  FormikLabel,
  FormikInput,
  FormikError,
  ButtonStyled,
} from '../ContactForm/ContactForm.styled';

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

export const EditContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { id, name, number } = useSelector(selectEditContact);
  const initialValues = {
    id,
    name,
    number,
  };
  const checkContact = values =>
    contacts.find(
      contact =>
        values.name === contact.name && values.number === contact.number
    );

  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(values)) {
      dispatch(changeContact());
      return;
    }

    dispatch(updateContact(values));

    successMessage(`${values.name} was changed in contacts`);
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
        <ButtonStyled type="submit">Change contact</ButtonStyled>
      </FormikForm>
    </Formik>
  );
};
