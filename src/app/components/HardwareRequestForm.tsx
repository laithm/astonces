'use client';
import { useState } from 'react';

export default function HardwareRequestForm() {
  const [form, setForm] = useState({ name: '', equipment: '', details: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save/submit logic here
    alert('Hardware request submitted!');
    setForm({ name: '', equipment: '', details: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col gap-4">
      <h2 className="card-title text-primary mb-4">Hardware Request</h2>
      
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="input input-bordered w-full"
      />
      
      <input
        name="equipment"
        placeholder="Equipment Needed"
        value={form.equipment}
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

