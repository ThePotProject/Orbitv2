import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 border-t border-white/10 px-5 py-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>Orbit is built for students who want consistent execution.</p>
        <p>© {new Date().getFullYear()} Orbit</p>
      </div>
    </footer>
  );
};

export default Footer;
