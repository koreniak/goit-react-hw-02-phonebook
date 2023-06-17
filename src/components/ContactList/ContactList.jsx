const ContactList = ({options, onDeleteContact}) => {
  return <ul>{options.map(({ id, name, number }) =>
          <li key={id}>
            <p>{name}: {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>)}
        </ul>
};

export default ContactList;