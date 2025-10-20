'use client';
import { useState } from 'react';
export default function CareerSupportForm() {
  const [form, setForm] = useState({ name: '', area: '', details: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Save/Submit logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Career Support Request</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <select name="area" onChange={handleChange} required>
        <option value="">Select area</option>
        <option value="cv">CV Review</option>
        <option value="internship">Internship</option>
        <option value="career">General Career Advice</option>
      </select>
      <textarea name="details" placeholder="Details..." onChange={handleChange} required />
      <button type="submit">Submit Request</button>
    </form>
  );
}

