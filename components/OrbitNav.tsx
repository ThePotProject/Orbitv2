import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pilot', href: '#marathon' },
  { label: 'Payouts', href: '#the-pot' },
];

const OrbitNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#070A10]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#" className="flex items-center gap-3">
          <img src="/orbit-logo.png" alt="Orbit logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-[0.18em] text-white">ORBIT</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://forms.gle/C8jAWuNFT2CbeUaq9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-orbit-green/45 bg-orbit-green/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-orbit-green hover:bg-orbit-green/20 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10 bg-[#070A10]/95 px-5 pb-5"
          >
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300">
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/C8jAWuNFT2CbeUaq9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 inline-flex w-fit rounded-full border border-orbit-green/45 bg-orbit-green/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-orbit-green"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default OrbitNav;
