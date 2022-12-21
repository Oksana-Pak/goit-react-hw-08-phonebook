export const ContactList = ({ options }) => (
  <ul>
    {options.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);
