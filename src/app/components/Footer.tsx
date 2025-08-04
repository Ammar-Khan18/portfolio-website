'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'ammar.kkhan05@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-white/10 text-white py-10 text-center backdrop-blur-md">
      <p className="text-sm text-gray-300">© 2025 Ammar Khan. All rights reserved.</p>

      <div className="mt-4 flex justify-center gap-6 text-2xl">
        <button
          onClick={handleCopy}
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaEnvelope />
        </button>
        <a
          href="https://github.com/Ammar-Khan18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ammarbinaamirkhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Toast Message */}
      {copied && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-md text-sm">
          Email copied to clipboard!
        </div>
      )}
    </footer>
  );
}
