'use client';

export default function Certifications() {
  const certificates = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera • Google',
      description:
        'Covers data cleaning, R programming, SQL for analysis, and data visualization techniques.',
      link: 'https://coursera.org/share/28a7e64c5489c158b327ba1d12e3c096',
    },
    {
      title: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'DeepLearning.AI',
      description: 'Learned techniques for prompt design and optimization for LLM applications.',
      link: 'https://learn.deeplearning.ai/accomplishments/87385510-97ea-443d-9b9b-d44e529c7739?usp=sharing',
    },
    {
      title: 'Entry-Level Python Programmer',
      issuer: 'Python Institute',
      description: 'Covers Python basics, data types, control flow, functions, and scripting.',
      link: 'https://www.credly.com/badges/ded48611-0c29-4881-b15d-62469de962e3?source=linked_in_profile',
    },
    {
      title: 'Intermediate SQL',
      issuer: 'DataCamp',
      description: 'Covers advanced SQL queries, joins, subqueries, and database functions.',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d7750f81b53743e3b64f558aba4e8263abba3859',
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-[60vh] px-6 py-20 text-white text-center"
    >
      <h2 className="inline-block bg-white/10 text-xl sm:text-2xl font-semibold px-4 py-2 rounded-xl shadow-md backdrop-blur-md mb-12">
        Certifications
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-md min-h-[280px] hover:shadow-blue-500/20 transition"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
              {cert.description && (
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              )}
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
