import { useEffect, useState } from 'react';
import { createContact, updateContact } from '../services/api';

export default function ContactForm({
  refresh,
  selectedContact,
  clearSelection,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (!selectedContact) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      name: selectedContact.name || '',
      email: selectedContact.email || '',
      phone: selectedContact.phone || '',
    });
  }, [selectedContact]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (selectedContact) {
      // 🔵 UPDATE
      await updateContact(selectedContact._id, form);
    } else {
      // 🟢 CREATE
      await createContact(form);
    }

    // 🔹 Reset to Add mode
    setForm({ name: '', email: '', phone: '' });
    clearSelection();
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        required
      />

      <button type="submit">
        {selectedContact ? 'Update Contact' : 'Add Contact'}
      </button>

      {selectedContact && (
        <button type="button" onClick={clearSelection}>
          Cancel
        </button>
      )}
    </form>
  );
}
