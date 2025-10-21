'use client';
import Link from 'next/link';
import Login from './Login'; // Adjust path if needed
/* eslint-disable react/no-unescaped-entities */

const execCommittee = [
  { name: 'Laith Masri', roles: ['President', 'Webmaster'], linkedin: 'https://linkedin.com/in/laithmasri' },
  { name: 'Bilal Ahmed', roles: ['Vice President'] },
  { name: 'Rhys Tshimpanga', roles: ['Treasurer'] },
  { name: 'John Pritchard', roles: ['Social Secretary'] },
  { name: 'Amirah Begum', roles: ['Social Secretary'] },
  { name: 'Jeremy Antwi', roles: ['General Secretary'] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center p-6 gap-16">
      {/* Who We Are Section */}
      <section className="card bg-base-100 p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="card-title text-primary mb-4">Who We Are</h2>
        <p className="text-base-content mb-8">
          Bringing together Aston's brightest minds in computing & electronics, from hackathons and technical projects to workshops and socials. We drive practical innovation for everyone at Aston University.
        </p>
        <h3 className="font-semibold mb-4">Executive Committee</h3>
        <div className="flex flex-col gap-4">
          {execCommittee.map(({ name, roles, linkedin }) => (
            <div key={name} className="flex items-center gap-4">
              <span className="font-semibold text-base-content">{name}</span>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, idx) =>
                  linkedin && role === 'President' ? (
                    <Link
                      key={idx}
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge badge-primary badge-outline cursor-pointer"
                      title={role}
                    >
                      {role}
                    </Link>
                  ) : (
                    <span
                      key={idx}
                      className="badge badge-secondary badge-outline"
                      title={role}
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-semibold mt-8 mb-2">Volunteers</h3>
        <p>Applications are underway...</p>
      </section>

      {/* Try out Beta and Login */}
      <section className="text-center mt-12 max-w-md w-full">
        <h3 className="text-xl font-bold text-primary mb-2">Try out the website's beta</h3>
        <p className="text-base-content mb-8">
          Log in and see the upcoming features, request support, and get involved.
        </p>
        <Login onLogin={() => {}} />
      </section>
    </main>
  );
}


