'use client';
import { useState } from 'react';

export default function SupportForm() {
  const [form, setForm] = useState({ name: '', type: '', details: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add backend logic here later
    alert('Support request submitted!');
    setForm({ name: '', type: '', details: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col gap-4 mb-8">
      <h2 className="card-title text-primary mb-4">General Support Request</h2>
      
      <input 
        name="name" 
        placeholder="Your Name" 
        value={form.name}
        onChange={handleChange}
        required
        className="input input-bordered w-full"
      />
      
      <input 
        name="type" 
        placeholder="Type of Support" 
        value={form.type}
        onChange={handleChange}
        required
        className="input input-bordered w-full"
      />
      
      <textarea 
        name="details" 
        placeholder="Details..." 
        value={form.details}
        onChange={handleChange}
        required
        className="textarea textarea-bordered w-full"
        rows={4}
      />
      
      <button type="submit" className="btn btn-primary w-full">Submit Request</button>
    </form>
  );
}

