import { useEffect, useState, useCallback } from 'react';
import { getContacts } from './services/api';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
   const [selectedContact, setSelectedContact] = useState(null);

  const loadContacts = useCallback(async () => {
    const data = await getContacts(search);
    setContacts(data);
  }, [search]);

   useEffect(() => {
    const timer = setTimeout(() => {
      loadContacts();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadContacts]);

 return (
    <div className="app">
      <h1>📇 Contacts Manager</h1>

      <input
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

        {/* SAME FORM FOR CREATE + UPDATE  */}
      <ContactForm
        refresh={loadContacts}
        selectedContact={selectedContact}
        clearSelection={() => setSelectedContact(null)}
      />

      <ContactList
        contacts={contacts}
        refresh={loadContacts}
        onEdit={setSelectedContact} 
      />
    </div>
  );
}
