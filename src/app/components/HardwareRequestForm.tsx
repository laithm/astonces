'use client';
import { useState } from 'react';
export default function HardwareRequestForm() {
  const [form, setForm] = useState({ name: '', equipment: '', details: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Save/Submit form logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Hardware Request</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="equipment" placeholder="Equipment Needed" onChange={handleChange} required />
      <textarea name="details" placeholder="Details..." onChange={handleChange} required />
      <button type="submit">Submit Request</button>
    </form>
  );
}

