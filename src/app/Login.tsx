'use client';
import { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form 
      className="card bg-base-100 p-6 rounded-lg shadow-lg max-w-md mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="card-title text-primary mb-6 text-center">Member Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        className="input input-bordered w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>
      {error && (
        <p className="text-error text-center font-semibold mt-2">
          {error}
        </p>
      )}
    </form>
  );
}

