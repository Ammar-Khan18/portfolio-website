'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronRight, Hash } from 'lucide-react';
import { PROJECTS } from './constants/projects';
import ThemeToggle from './components/ThemeToggle';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = 'ammar.kkhan05@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      role: 'Artificial Intelligence Intern',
      company: 'HUBCOM',
      duration: 'Aug 2025 – Sep 2025',
      points: [
        'Worked on agentic AI concepts, understanding autonomous decision-making pipelines and task-oriented AI workflows.',
        'Designed and implemented enterprise-grade automations using UiPath and Microsoft Power Automate.',
        'Built an end-to-end workflow converting raw bank statements into structured Excel reports.',
      ],
    },
    {
      role: 'Software Engineering Fellow',
      company: 'Headstarter',
      duration: 'Jul 2024 – Sep 2024',
      points: [
        'Designed and built scalable backend infrastructure using Firebase Firestore and Authentication.',
        'Delivered 5 AI-powered web applications in 5 weeks under agile sprint cycles.',
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
      ],
    },
  ];

  const leadership = [
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

  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera • Google',
      link: 'https://coursera.org/share/28a7e64c5489c158b327ba1d12e3c096',
    },
    {
      title: 'ChatGPT Prompt Engineering for Developers',
      issuer: 'DeepLearning.AI',
      link: 'https://learn.deeplearning.ai/accomplishments/87385510-97ea-443d-9b9b-d44e529c7739?usp=sharing',
    },
    {
      title: 'Entry-Level Python Programmer',
      issuer: 'Python Institute',
      link: 'https://www.credly.com/badges/ded48611-0c29-4881-b15d-62469de962e3?source=linked_in_profile',
    },
    {
      title: 'Intermediate SQL',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d7750f81b53743e3b64f558aba4e8263abba3859',
    },
  ];

  const skills = ['Python', 'C++', 'Git', 'SQL', 'R Programming', 'Data Analysis', 'Data Cleaning', 'Data Visualization', 'Prompt Engineering', 'Firebase', 'React.js', 'Vercel'];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      {/* Notion-style Header/Toolbar */}
      <nav className="flex justify-between items-center py-4 sticky top-0 bg-notion-bg text-notion-text z-50 border-b border-transparent transition-colors">
        <div className="flex items-center gap-2 text-sm text-notion-gray">
          <span className="hover:bg-notion-light-gray px-2 py-1 rounded cursor-pointer transition-colors text-notion-text">Ammar Khan</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium">Portfolio</span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <header className="mt-16 mb-12">
        <div className="relative mb-8 group">
           <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-4xl shadow-md transform transition-transform group-hover:scale-105">
             👨‍💻
           </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          Ammar Khan
        </h1>
        
        <p className="text-lg text-notion-gray mb-6 leading-relaxed max-w-2xl">
          Computer Science Student passionate about <span className="text-blue-600 dark:text-blue-400 font-medium">Software Development</span>, <span className="text-purple-600 dark:text-purple-400 font-medium">Data Analytics</span>, and <span className="text-orange-600 dark:text-orange-400 font-medium">AI</span>. Currently exploring the intersection of low-level systems and high-level AI applications.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/Ammar-Khan18" target="_blank" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ammarbinaamirkhan/" target="_blank" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-notion-light-gray border border-notion-border transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" /> {copied ? 'Copied!' : 'Email'}
          </button>
          <a href="https://drive.google.com/file/d/1l7J7Rknk1BppAy4XQbO94TvqHmVE81uy/view?usp=sharing" target="_blank" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 transition-colors text-sm font-medium">
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </header>

      <hr className="border-notion-border mb-12" />

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">#</span> Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-notion-border hover:border-blue-400 transition-colors">
              <div className="absolute w-3 h-3 bg-notion-bg border-2 border-blue-500 rounded-full -left-[7.5px] top-1.5" />
              <h3 className="text-lg font-bold text-notion-text">{exp.role}</h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{exp.company} • {exp.duration}</p>
              <ul className="space-y-2 text-sm text-notion-gray">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-2">
                    <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-purple-500">#</span> Projects
        </h2>
        
        <div className="space-y-12">
          {PROJECTS.map((category, idx) => {
            const colors = [
              'border-blue-500/20 hover:border-blue-500/50 dark:border-blue-500/10 dark:hover:border-blue-500/30',
              'border-purple-500/20 hover:border-purple-500/50 dark:border-purple-500/10 dark:hover:border-purple-500/30',
              'border-green-500/20 hover:border-green-500/50 dark:border-green-500/10 dark:hover:border-green-500/30',
              'border-orange-500/20 hover:border-orange-500/50 dark:border-orange-500/10 dark:hover:border-orange-500/30'
            ];
            const cardBg = [
              'group-hover:bg-blue-50/30 dark:group-hover:bg-blue-500/5',
              'group-hover:bg-purple-50/30 dark:group-hover:bg-purple-500/5',
              'group-hover:bg-green-50/30 dark:group-hover:bg-green-500/5',
              'group-hover:bg-orange-50/30 dark:group-hover:bg-orange-500/5'
            ];
            const colorIdx = idx % colors.length;

            return (
              <div key={idx}>
                <h3 className="text-xs uppercase tracking-widest text-notion-gray font-bold mb-4 border-b border-notion-border pb-1 flex justify-between items-center">
                  {category.category}
                  <span className={`w-2 h-2 rounded-full ${['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'][colorIdx]}`} />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((project, pIdx) => (
                    <div key={pIdx} className={`group p-5 rounded-xl border ${colors[colorIdx]} transition-all duration-300 shadow-sm hover:shadow-md flex flex-col ${cardBg[colorIdx]}`}>
                      <div className="text-2xl mb-3 filter grayscale group-hover:grayscale-0 transition-all">{project.icon}</div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-notion-text transition-colors">{project.title}</h4>
                      <p className="text-sm text-notion-gray mb-4 leading-relaxed line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex gap-3 mt-auto">
                        {project.github && (
                          <a href={project.github} target="_blank" className="text-xs font-medium flex items-center gap-1.5 text-notion-gray hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github className="w-3.5 h-3.5" /> Source
                          </a>
                        )}
                        {(project as any).link && (
                          <a href={(project as any).link} target="_blank" className="text-xs font-medium flex items-center gap-1.5 text-notion-gray hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-green-500">#</span> Leadership & Teaching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadership.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-notion-border bg-notion-light-gray/20 hover:border-green-500/30 transition-colors">
              <h3 className="font-semibold text-notion-text text-sm">{item.title}</h3>
              <p className="text-xs text-notion-gray mt-1">{item.org} • {item.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-orange-500">#</span> Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-notion-light-gray/50 text-sm font-medium text-notion-text border border-notion-border hover:border-orange-500/30 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-500">#</span> Certifications
        </h2>
        <div className="space-y-3">
          {certifications.map((cert, idx) => (
            <a key={idx} href={cert.link} target="_blank" className="flex items-center justify-between p-4 rounded-lg border border-notion-border hover:bg-notion-light-gray/40 hover:border-blue-500/30 transition-all group">
              <div>
                <h3 className="font-semibold text-notion-text group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                <p className="text-sm text-notion-gray">{cert.issuer}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-notion-gray group-hover:text-notion-text transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-notion-border text-center">
        <p className="text-sm text-notion-gray">
          © {new Date().getFullYear()} Ammar Khan • Built with Next.js and ❤️
        </p>
      </footer>

      {/* Floating Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-notion-bg border border-notion-border shadow-lg text-notion-gray hover:text-notion-text hover:border-blue-500/50 transition-all hover:-translate-y-1 z-40"
      >
        <Hash className="w-5 h-5" />
      </button>
    </div>
  );
}
