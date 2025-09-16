import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Aston Computing and Electronics Society - Coming Soon',
  description: 'Join Aston Computing and Electronics Society. Request hardware assistance, participate in competitions, and join upcoming hackathons. Launching soon!',
  keywords: 'Aston University, Computing Society, Electronics, Hackathons, Competitions, Hardware Assistance',
  openGraph: {
    title: 'Aston Computing and Electronics Society - Coming Soon',
    description: 'Join Aston Computing and Electronics Society. Request hardware assistance, participate in competitions, and join upcoming hackathons.',
    url: 'https://astonces.com',
    siteName: 'Aston Computing and Electronics Society',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aston Computing and Electronics Society - Coming Soon',
    description: 'Join Aston Computing and Electronics Society. Launching soon with hardware assistance, competitions, and hackathons.',
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
      </head>
      <body>{children}</body>
    </html>
  );
}

