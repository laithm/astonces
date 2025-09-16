'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      id: 'hardware',
      icon: '🔧',
      title: 'Hardware Assistance',
      description: 'Get help with Arduino, Raspberry Pi, circuit design, and electronics projects',
      details: 'Our experienced members can assist with component selection, troubleshooting, and project guidance for all your hardware needs.'
    },
    {
      id: 'competitions',
      icon: '🏆',
      title: 'Competitions',
      description: 'Participate in coding challenges, hackathons, and tech competitions',
      details: 'Regular programming contests, algorithm challenges, and inter-university competitions to test your skills.'
    },
    {
      id: 'hackathons',
      icon: '💻',
      title: 'Hackathons',
      description: 'Build innovative solutions in intensive collaborative events',
      details: '24-48 hour coding marathons where teams create amazing projects, win prizes, and network with industry professionals.'
    },
    {
      id: 'workshops',
      icon: '📚',
      title: 'Workshops & Resources',
      description: 'Learn new technologies through hands-on workshops and tutorials',
      details: 'Regular sessions covering web development, mobile apps, AI/ML, cybersecurity, and emerging technologies.'
    }
  ];

  return (
    <main className="container">
      <div className="content">
        <div className="logo-container">
          <Image 
            src="/astonces.png" 
            alt="Aston Computing and Electronics Society" 
            className="logo"
            width={120}
            height={120}
          />
        </div>
        
        <h1 className="headline">
          Aston Computing and Electronics Society
        </h1>
        
        <p className="tagline">
          Your hub for computing excellence and innovation.<br />
          <strong>Launching Soon</strong>
        </p>
        
        <div className="live-clock">
          <p>🕐 Current Time: {currentTime.toLocaleTimeString()}</p>
        </div>
        
        <div className="features">
          <h3>What&apos;s Coming Soon:</h3>
          <div className="feature-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${selectedFeature === feature.id ? 'expanded' : ''}`}
                onClick={() => setSelectedFeature(
                  selectedFeature === feature.id ? null : feature.id
                )}
              >
                <div className="feature-header">
                  <span className="feature-icon">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                </div>
                <p className="feature-description">{feature.description}</p>
                {selectedFeature === feature.id && (
                  <div className="feature-details">
                    <p>{feature.details}</p>
                  </div>
                )}
                <div className="feature-indicator">
                  {selectedFeature === feature.id ? '−' : '+'}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="footer">
          <p>&copy; 2025 Aston Computing and Electronics Society. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}


