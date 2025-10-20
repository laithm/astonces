'use client';

export default function ProjectOfTerm() {
  const project = {
    title: 'Smart Energy Meter',
    description: 'IoT-powered real-time energy tracking for campus labs.',
    link: 'https://github.com/astonces-energy-meter'
  };

  return (
    <div className="card bg-base-100 rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
      <h2 className="card-title text-primary mb-3">Project of the Term</h2>
      <h3 className="text-lg font-semibold text-secondary">{project.title}</h3>
      <p className="mt-2 text-base-content">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link link-primary mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
}

