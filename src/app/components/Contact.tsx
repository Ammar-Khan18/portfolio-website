'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'ammar.kkhan05@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <section id="contact" className="px-6 py-20 text-white text-center relative">
      <h2 className="inline-block bg-white/10 text-xl sm:text-2xl font-semibold px-4 py-2 rounded-xl shadow-md backdrop-blur-md mb-8">
        Get in Touch
      </h2>

      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
        <p className="text-gray-300 mb-6">
          Feel free to reach out via social platforms or email
        </p>

        <div className="flex justify-center gap-8 text-white text-2xl">
          <button
            onClick={handleCopy}
            className="hover:text-blue-400 transition"
            aria-label="Copy Email"
          >
            <FaEnvelope />
          </button>

          <a
            href="https://github.com/Ammar-Khan18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ammarbinaamirkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Toast */}
      {copied && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow text-sm">
          Email copied to clipboard!
        </div>
      )}
    </section>
  );
}
