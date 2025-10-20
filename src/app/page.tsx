'use client';
import Link from 'next/link';
import ProjectOfTerm from './project-of-the-term/page'; 
import FAQSection from './components/faq/FAQSection';  

const execCommittee = [
  { name: 'Laith Masri', role: 'President, Webmaster', linkedin: 'https://linkedin.com/in/laithmasri' },
  { name: 'Bilal Ahmed', role: 'Vice President' },
  { name: 'Rhys Tshimpanga', role: 'Treasurer' },
  { name: 'John Pritchard', role: 'Social Secretary' },
  { name: 'Amirah Begum', role: 'Social Secretary' },
  { name: 'Jeremy Antwi', role: 'General Secretary' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 p-6 flex flex-col items-center gap-12">

      {/* Who We Are */}
      <section className="card bg-base-100 p-6 rounded-xl shadow-lg max-w-3xl w-full">
        <h2 className="card-title text-primary mb-6">Who We Are</h2>

        <h3 className="font-semibold mb-2">Executive Committee</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {execCommittee.map(({ name, role, linkedin }) => (
            linkedin ? (
              <Link
                key={name}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-primary badge-outline cursor-pointer"
                title={`${role} - ${name}`}
              >
                {name}
              </Link>
            ) : (
              <span
                key={name}
                className="badge badge-secondary badge-outline"
                title={role}
              >
                {name}
              </span>
            )
          ))}
        </div>

        <h3 className="font-semibold mb-2">Volunteers</h3>
        <p>Applications are underway...</p>
      </section>

      {/* Project of the Term Section */}
      <ProjectOfTerm />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}

