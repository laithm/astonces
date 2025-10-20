import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Aston Computing and Electronics Society - Coming Soon',
  description: 'Join Aston Computing and Electronics Society. Request hardware assistance, participate in competitions, and join upcoming hackathons. Launching soon!',
  keywords: 'Aston University, Computing Society, Electronics, Hackathons, Competitions, Hardware Assistance',
  icons: {
    icon: '/astonces.png',
    shortcut: '/astonces.png',
    apple: '/astonces.png',
  },
  openGraph: {
    title: 'Aston Computing and Electronics Society - Coming Soon',
    description: 'Join Aston Computing and Electronics Society. Request hardware assistance, participate in competitions, and join upcoming hackathons.',
    url: 'https://astonces.com',
    siteName: 'Aston Computing and Electronics Society',
    images: [
      {
        url: '/astonces.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aston Computing and Electronics Society - Coming Soon',
    description: 'Join Aston Computing and Electronics Society. Launching soon with hardware assistance, competitions, and hackathons.',
    images: ['/astonces.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/astonces.png" />
      </head>
      {/* The forest theme is activated with data-theme attribute */}
      <body data-theme="forest" className="min-h-screen bg-base-200 font-inter">
        {children}
      </body>
    </html>
  );
}

