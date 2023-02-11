import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { successMessage } from 'components/services/notifications';
import { Item, ButtonStyled } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    successMessage(`${name} was delete from contacts`);
  };

  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
