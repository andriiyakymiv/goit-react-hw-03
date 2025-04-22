import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

import contactsData from './data/contacts.json';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useLocalStorage('key-contacts', contactsData);

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const handleChange = e => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(searchValue));
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={searchValue} handleChange={handleChange} />
      <ContactList contacts={filterContacts} handleDelete={handleDelete} />
    </>
  );
};

export default App;
