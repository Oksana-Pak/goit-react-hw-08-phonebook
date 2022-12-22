import PropTypes from 'prop-types';
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
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);
ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
