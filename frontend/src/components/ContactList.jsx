import { deleteContact } from '../services/api';

export default function ContactList({ contacts, refresh, onEdit }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c._id}>
          <b>{c.name}</b> — {c.email} — {c.phone}

          <button onClick={() => onEdit(c)}>
            ✏️
          </button>

          <button
            onClick={async () => {
              await deleteContact(c._id);
              refresh();
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
