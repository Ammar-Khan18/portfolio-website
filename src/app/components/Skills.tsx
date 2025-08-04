'use client';

import {
  SiPython,
  SiCplusplus,
  SiGit,
  SiFirebase,
  SiReact,
  SiVercel,
  SiMysql,
  SiR,
  SiTableau,
  SiNumpy,
  SiPandas,
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { icon: <SiPython size={40} />, name: 'Python' },
    { icon: <SiCplusplus size={40} />, name: 'C++' },
    { icon: <SiGit size={40} />, name: 'Git' },
    { icon: <SiMysql size={40} />, name: 'SQL' },
    { icon: <SiR size={40} />, name: 'R Programming' },
    { icon: <SiNumpy size={40} />, name: 'Data Analysis' },
    { icon: <SiPandas size={40} />, name: 'Data Cleaning' },
    { icon: <SiTableau size={40} />, name: 'Data Visualization' },
    { icon: <FaBrain size={40} />, name: 'Prompt Engineering' },
    { icon: <SiFirebase size={40} />, name: 'Firebase' },
    { icon: <SiReact size={40} />, name: 'React.js' },
    { icon: <SiVercel size={40} />, name: 'Vercel' },
  ];

  return (
    <section
      id="skills"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20 text-white"
    >
      <h2 className="inline-block bg-white/10 text-xl sm:text-2xl font-semibold px-4 py-2 rounded-xl shadow-md backdrop-blur-md mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-md transform transition duration-300 hover:scale-105 hover:bg-white/20 ring-1 ring-white/10 hover:ring-2 hover:ring-violet-500/50">
            <div className="text-white transition duration-300 group-hover:text-violet-300">
              {skill.icon}
            </div>
            <p className="mt-2 text-sm sm:text-base font-medium text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
