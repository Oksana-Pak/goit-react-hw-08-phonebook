import { ContactItem } from 'components/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ options }) => (
  <ul>
    {options.map(({ name, number }) => (
      <ContactItem key={nanoid()} name={name} number={number} />
    ))}
  </ul>
);
