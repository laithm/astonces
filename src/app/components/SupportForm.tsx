'use client';
import { useState } from 'react';

export default function SupportForm() {
  const [form, setForm] = useState({ name: '', type: '', details: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Add backend logic here later
    setForm({ name: '', type: '', details: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>General Support Request</h2>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ display: 'block', width: '100%', margin: '8px 0' }}
      />
      <input
        name="type"
        placeholder="Type of Support"
        value={form.type}
        onChange={handleChange}
        required
        style={{ display: 'block', width: '100%', margin: '8px 0' }}
      />
      <textarea
        name="details"
        placeholder="Details..."
        value={form.details}
        onChange={handleChange}
        required
        style={{ display: 'block', width: '100%', margin: '8px 0' }}
      />
      <button type="submit">Submit Request</button>
    </form>
  );
}

