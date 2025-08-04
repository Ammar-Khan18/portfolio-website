'use client';

export default function Resume() {
  return (
    <section
      id="resume"
      className="px-6 py-20 text-white text-center"
    >
      <h2 className="inline-block bg-white/10 text-xl sm:text-2xl font-semibold px-4 py-2 rounded-xl shadow-md backdrop-blur-md mb-10">
        Resume
      </h2>

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 max-w-xl mx-auto p-8 rounded-2xl shadow-md">
        <p className="text-gray-300 mb-6">
          View my resume to learn more about my background, skills, and experiences.
        </p>

        <a
          href="https://drive.google.com/file/d/1hei6OhAPP05-EVh_bS59SVTDmsuCZuO3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}