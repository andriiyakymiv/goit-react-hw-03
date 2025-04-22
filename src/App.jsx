import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

import contactsData from './data/contacts.json';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useLocalStorage('key-contacts', contactsData);

  const handleChange = e => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(searchValue));
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
};

export default App;
