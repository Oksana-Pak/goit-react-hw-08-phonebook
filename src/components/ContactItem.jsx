export const ContactItem = ({ id, name, number, deleteContact }) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </li>
);
