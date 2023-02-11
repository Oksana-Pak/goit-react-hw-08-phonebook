import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem';
import { ContactContainer } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactContainer>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ContactContainer>
  );
};
