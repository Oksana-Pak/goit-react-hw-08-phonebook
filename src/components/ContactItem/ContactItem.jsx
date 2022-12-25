import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <Item>
    <p>
      {name}: {number}
    </p>
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
  </Item>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
