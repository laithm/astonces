'use client';
import Header from '../components/Header'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <main className="flex flex-col items-center p-6 gap-12">
        <section className="card bg-base-100 p-8 rounded-xl shadow-lg max-w-3xl w-full mt-10">
          <h2 className="card-title text-primary mb-4">Welcome to the Members Portal!</h2>
          <p className="text-base-content mb-8">
            You're now logged in. Access society resources, project tools, and the members calendar below.
          </p>
          {/* Add any member-only modules, events, resources, etc. */}
        </section>
      </main>
    </div>
  );
}

