import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { successMessage } from 'components/services/notifications';
import { Item, Text, ButtonWrap, ButtonStyled } from './ContactItem.styled';
import { changeContact } from 'redux/contacts/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    successMessage(`${name} was delete from contacts`);
  };
  const handleEditContact = () => {
    dispatch(changeContact({ id, name, number }));
  };
  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ButtonWrap>
        <ButtonStyled onClick={handleEditContact}>Edit</ButtonStyled>
        <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
      </ButtonWrap>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
