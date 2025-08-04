'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Headstarter AI',
      description: 'An AI-powered tool to generate startup ideas based on user input using OpenAI + Gemini APIs.',
      stack: ['Next.js', 'Tailwind CSS', 'Firebase', 'OpenAI'],
      github: 'https://github.com/yourusername/headstarter-ai',
      demo: 'https://headstarterai.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using Next.js and Tailwind CSS.',
      stack: ['Next.js', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/portfolio',
      demo: '',
    },
    // Add more...
  ];

  return (
    <section
      id="projects"
      className="min-h-[70vh] px-6 py-20 text-white text-center"
    >
      <h2 className="inline-block bg-white/10 text-xl sm:text-2xl font-semibold px-4 py-2 rounded-xl shadow-md backdrop-blur-md">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] rounded-xl p-6 border border-white/10 shadow-md shadow-blue-500/5"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center text-xs text-blue-400 mb-4">
              {project.stack.map((tech, index) => (
                <span key={index} className="bg-blue-950 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
