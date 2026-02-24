import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-8 border-t border-slate-200 bg-white px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-sm text-slate-500 md:flex-row md:text-left">
        <p>Orbit is built for students who want consistent execution.</p>
        <p>© {new Date().getFullYear()} Orbit. Commit to yourself.</p>
      </div>
    </footer>
  );
};

export default Footer;
