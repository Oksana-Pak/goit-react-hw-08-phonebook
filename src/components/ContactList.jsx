import { ContactItem } from 'components/ContactItem';

export const ContactList = ({ options }) => (
  <ul>
    {options.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} />
    ))}
  </ul>
);
