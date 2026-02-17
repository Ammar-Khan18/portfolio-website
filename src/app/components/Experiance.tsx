'use client';

export default function Experience() {
  const experiences = [
    {
      role: 'Artificial Intelligence Intern',
      company: 'HUBCOM',
      duration: 'Aug 2025 – Sep 2025',
      points: [
        'Worked on agentic AI concepts, understanding autonomous decision-making pipelines and task-oriented AI workflows.',
        'Designed and implemented enterprise-grade automations using UiPath and Microsoft Power Automate.',
        'Built an end-to-end workflow converting raw bank statements into structured Excel reports and automatically distributing them via email.',
        'Collaborated with stakeholders to ensure reporting accuracy, reliability, and scalability.',
      ],
    },
    {
      role: 'Software Engineering Fellow',
      company: 'Headstarter',
      duration: 'Jul 2024 – Sep 2024',
      points: [
        'Designed and built scalable backend infrastructure using Firebase Firestore and Firebase Authentication.',
        'Delivered 5 AI-powered web applications in 5 weeks under agile sprint cycles with CI/CD deployment pipelines.',
        'Worked extensively with React and Next.js to build responsive, production-ready user interfaces.',
        'Launched a faculty review platform for IBA that attracted 300+ waitlist sign-ups.',
      ],
    },
    {
      role: 'Social Intern',
      company: 'Foundation Fighting Poverty',
      duration: 'Nov 2024 – Jan 2025',
      points: [
        'Raised PKR 32,000 within one week to support urgent humanitarian cases.',
        'Researched and documented 10+ government grants and CSR funding programs.',
        'Conducted a comprehensive analysis of a government school’s education system.',
        'Delivered a detailed report with actionable recommendations to improve academic and operational efficiency.',
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 py-24 text-white text-center">
      <h2 className="inline-block bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md font-semibold text-xl sm:text-2xl mb-16">
        Professional Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-12 text-left">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold">
              {exp.role}
            </h3>

            <p className="text-purple-300 font-medium">
              {exp.company}
            </p>

            <p className="text-sm text-gray-400 mb-6">
              {exp.duration}
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
