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

          <div className="bg-base-200 border border-base-content rounded-md p-6">
            <h3 className="font-semibold text-lg mb-2 text-primary">Note: Closed Beta v0.1b</h3>
            <p className="text-base-content">
              This website is currently in a closed beta stage (version 0.1b). Access is limited and features are being tested. 
            </p>
            <p className="text-base-content mt-2">
              The full website (version 1.0) will launch in a couple of weeks or days, 
              depending on the President's availability and schedule. Stay tuned for more updates!
            </p>
          </div>
          {/* Add any member-only modules, events, resources, etc. */}
        </section>
      </main>
    </div>
  );
}

