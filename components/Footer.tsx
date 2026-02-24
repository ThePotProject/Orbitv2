import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-10 border-t border-[#3B3259]/20 bg-[#F5F2FE] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-sm text-[#3B3259] md:flex-row md:text-left">
        <p>Orbit is built for community-powered consistency.</p>
        <p>© {new Date().getFullYear()} Orbit. Show up together.</p>
      </div>
    </footer>
  );
};

export default Footer;
