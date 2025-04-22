import Contact from '../Contact/Contact';

import style from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;