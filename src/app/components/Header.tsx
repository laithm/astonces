'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleWheel(e: React.WheelEvent) {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }

  return (
    <header className="flex items-center justify-between bg-base-100 px-6 py-3 border-b border-base-content select-none">
      {/* Logo and CES Text */}
      <div className="flex items-center gap-3">
        <Image
          src="/astonces.png"
          alt="ASTONCES Logo"
          width={48}
          height={48}
          priority
        />
        <span
          className="text-3xl font-extrabold text-primary cursor-pointer select-text animate-pulse drop-shadow-lg"
          title="Aston Computing and Electronics Society (CES)"
        >
          <Link href="/home" target="_blank" rel="noopener noreferrer">
            CES
          </Link>
        </span>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex overflow-x-auto max-w-[70%] border border-base-content rounded-md p-1 gap-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200"
        ref={scrollRef}
        onWheel={handleWheel}
        aria-label="Primary Navigation"
      >
        {sectionLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="flex-shrink-0 px-4 py-2 rounded-lg
                       transition-colors hover:bg-primary hover:text-primary-content
                       focus-visible:outline focus-visible:outline-primary focus-visible:outline-2"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

