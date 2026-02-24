import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Community Flow', href: '#community-flow' },
  { label: 'Pilot Terms', href: '#pilot-terms' },
];

const OrbitNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#3B3259]/20 bg-[#F5F2FE]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">
        <a href="#" className="inline-flex items-center">
          <img
            src="/orbit-logo-full-main.png"
            alt="Orbit logo"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[1.06rem] font-semibold tracking-tight text-[#3B3259] transition-colors duration-200 hover:text-[#271F3D] lg:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="rounded-xl border border-[#3B3259]/25 bg-white/70 p-2 text-[#3B3259] md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#3B3259]/20 bg-[#F5F2FE] px-5 pb-5 md:hidden"
          >
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-[#3B3259]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default OrbitNav;
