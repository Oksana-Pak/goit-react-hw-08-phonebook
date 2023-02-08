import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { successMessage } from 'components/services/notifications';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    successMessage(`${name} was delete from contacts`);
  };

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
