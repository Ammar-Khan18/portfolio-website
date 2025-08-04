'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = 'ammar.kkhan05@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-600">Ammar</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-xl md:text-2xl mb-4"
      >
        CS Student
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base md:text-lg max-w-xl mb-6 text-gray-300"
      >
        Passionate about software development, data analytics, and AI. I love building innovative solutions and learning new technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex gap-6 mb-6"
      >
        <a
          href="https://github.com/Ammar-Khan18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl transition-transform transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ammarbinaamirkhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-2xl transition-transform transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <button
          onClick={handleCopy}
          className="text-gray-300 hover:text-white text-2xl transition-transform transform hover:scale-110"
          aria-label="Email"
        >
          <FaEnvelope />
        </button>
      </motion.div>

      {/* Toast message (non-intrusive, centered) */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-24 bg-white/10 text-white text-sm px-4 py-2 rounded shadow-md backdrop-blur-md"
        >
          Email copied to clipboard!
        </motion.div>
      )}

      {/* Resume Button */}
      <motion.a
        href="#resume"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow transition-transform transform hover:scale-105 opacity-100"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        View Resume
      </motion.a>
    </section>
  );
}
