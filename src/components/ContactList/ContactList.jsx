import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
import { ContactItem } from '../ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
