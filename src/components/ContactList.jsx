import { ContactItem } from 'components/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ options, onDeleteContact }) => (
  <ul>
    {options.map(({ id, name, number }) => (
      <ContactItem
        key={nanoid()}
        id={id}
        name={name}
        number={number}
        deleteContact={onDeleteContact}
      />
    ))}
  </ul>
);
