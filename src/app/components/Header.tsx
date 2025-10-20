'use client';
import Link from 'next/link';

const sectionLinks = [
  { label: 'Calendar', href: '/calendar' },
  { label: 'Hardware Request', href: '/hardware-request' },
  { label: 'Support', href: '/support' },
  { label: 'Honour List', href: '/honour-list' },
  { label: 'Project of the Term', href: '/project-of-the-term' },
  { label: 'Career Support', href: '/career-support' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  return (
    <header className="header">
      <nav className="legend-nav">
        {sectionLinks.map(({ label, href }) => (
          <Link key={href} href={href} className="legend-link">{label}</Link>
        ))}
      </nav>
      <h1 className="main-title">
        Aston Computing and Electronics Society
      </h1>
    </header>
  );
}

