import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectEditContact,
} from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import {
  Container,
  ContactTitle,
  ContactSubtitle,
} from './ContactsPage.styled';
import { Loader } from 'components/Loader';
import { ContactModal } from 'components/ContactModal';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const editContact = useSelector(selectEditContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactTitle>Phone Book</ContactTitle>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && (
        <>
          <ContactSubtitle>Contacts</ContactSubtitle>
          <Filter />
          <ContactList />
        </>
      )}
      {editContact && <ContactModal />}
    </Container>
  );
};
export default ContactsPage;
