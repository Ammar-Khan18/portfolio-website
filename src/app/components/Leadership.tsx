'use client';

export default function Leadership() {
  const roles = [
    {
      title: 'Teaching Assistant — Introduction to Programming',
      org: 'Institute of Business Administration',
      duration: 'Aug 2025 – Dec 2025',
    },
    {
      title: 'Teaching Assistant — OOP Techniques',
      org: 'Institute of Business Administration',
      duration: 'Jan 2025 – May 2025',
    },
    {
      title: 'Executive Coordinator of Registrations',
      org: 'Computer Science Society, IBA',
      duration: 'Jan 2025 – May 2025',
    },
  ];

  return (
    <section id="leadership" className="px-6 py-20 text-white text-center">
      <h2 className="inline-block bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md font-semibold text-xl sm:text-2xl mb-12">
        Leadership & Teaching
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl"
          >
            <h3 className="font-semibold">{role.title}</h3>
            <p className="text-gray-400 text-sm">
              {role.org} • {role.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
