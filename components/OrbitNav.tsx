import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

const OrbitNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:h-28 md:px-8">
        <a href="#" className="flex items-center gap-3.5">
          <img src="/orbit-logo-black-2048.png" alt="Orbit logo" className="h-12 w-12 object-contain md:h-14 md:w-14" />
          <span className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Orbit</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-semibold tracking-tight text-slate-600 transition-colors duration-200 hover:text-[#0066FF] lg:text-xl"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-slate-200 bg-white px-5 pb-6 md:hidden"
          >
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-slate-700"
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
