'use client';

export default function Projects() {
  const projects = [
    {
      name: 'Rental Property Management System',
      points: [
        'Designed and developed a full-stack rental and house property management application backed by a relational database.',
        'Implemented complete CRUD functionality for tenants, landlords, properties, lease agreements, and payment records.',
        'Designed normalized database schemas with primary and foreign key constraints to ensure data integrity.',
        'Wrote complex SQL queries for reporting, filtering, and transaction tracking.',
        'Ensured efficient data retrieval and consistency through indexing and structured query optimization.',
      ],
    },
    {
      name: 'IBAHive',
      points: [
        'Designed low-fidelity wireframes and detailed functional test cases.',
        'Implemented the submission page focusing on usability, validation, and backend integration.',
        'Worked under AGILE methodology with sprint planning and iterative reviews.',
      ],
    },
    {
      name: 'Faculty Insight',
      points: [
        'Developed a web-based platform enabling authenticated faculty reviews.',
        'Implemented secure data storage using Firebase Firestore with authentication-based access control.',
        'Designed validation mechanisms to ensure credibility and integrity of submitted feedback.',
      ],
    },
    {
      name: 'Pantry Buddy',
      points: [
        'Built a real-time pantry inventory management application.',
        'Integrated Firebase Firestore for persistent live data updates.',
        'Designed intuitive user interfaces using Material UI with full CRUD functionality.',
      ],
    },
    {
      name: 'Library Management System',
      points: [
        'Developed a GUI-based library management system using C++ and wxWidgets.',
        'Applied core object-oriented programming principles including inheritance, encapsulation, and polymorphism.',
        'Structured the application using modular design patterns for scalability and maintainability.',
      ],
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 text-white text-center">
      <h2 className="inline-block bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md font-semibold text-xl sm:text-2xl mb-16">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto space-y-12 text-left">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6">
              {project.name}
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm leading-relaxed">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
