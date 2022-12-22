import { Item, Button } from 'components/ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => (
  <Item>
    <p>
      {name}: {number}
    </p>
    <Button onClick={() => deleteContact(id)}>Delete</Button>
  </Item>
);
