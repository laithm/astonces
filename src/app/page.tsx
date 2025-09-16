'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setMessage('Thanks for signing up! We\'ll notify you when we launch.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <main className="container">
      <div className="content">
        <img 
          src="/astonces.png" 
          alt="Aston Computing and Electronics Society" 
          className="logo"
        />
        
        <h1 className="headline">
          Aston Computing and Electronics Society
        </h1>
        
        <p className="tagline">
          Your hub for computing excellence and innovation.<br />
          <strong>Launching Soon</strong>
        </p>
        
        <div className="features">
          <h3>What's Coming:</h3>
          <ul>
            <li>🔧 Request hardware assistance for your projects</li>
            <li>🏆 Inquire about upcoming competitions</li>
            <li>💻 Hackathons will be available shortly</li>
            <li>📚 Resources and workshops for members</li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <h3>Be the first to know when we launch</h3>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
              className="email-input"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Signing Up...' : 'Notify Me'}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
        
        <footer className="footer">
          <p>&copy; 2025 Aston Computing and Electronics Society. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

