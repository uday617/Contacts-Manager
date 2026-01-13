const BASE_URL = 'http://localhost:3000/api/contacts';

// READ
export const getContacts = async (search = '') => {
  const res = await fetch(`${BASE_URL}?search=${search}`);
  return res.json();
};

// CREATE
export const createContact = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to create contact');
  }

  return res.json();
};

// UPDATE
export const updateContact = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to update contact');
  }

  return res.json();
};

// DELETE
export const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete contact');
  }
};
