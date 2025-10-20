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
      <nav className="legend-nav" aria-label="Primary Navigation">
        {sectionLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="legend-link px-4 py-2 rounded-lg transition-colors hover:bg-primary hover:text-primary-content focus-visible:outline focus-visible:outline-primary focus-visible:outline-2"
          >
            {label}
          </Link>
        ))}
      </nav>
      <h1 className="main-title text-primary text-center mt-2 mb-6 font-extrabold tracking-wide">
        Aston Computing and Electronics Society
      </h1>
    </header>
  );
}

