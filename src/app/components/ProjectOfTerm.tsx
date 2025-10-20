'use client';
export default function ProjectOfTerm() {
  // For beta, manually enter featured project
  const project = {
    title: 'Smart Energy Meter',
    description: 'IoT-powered real-time energy tracking for campus labs.',
    link: 'https://github.com/astonces-energy-meter'
  };
  return (
    <div>
      <h2>Project of the Term</h2>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

