import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative px-5 pb-20 pt-36 md:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">Student Accountability Platform</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Reduce procrastination with
            <span className="block text-orbit-green">clear incentives.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Orbit helps students follow through on study goals through commitment deposits, social accountability,
            and transparent payout rules.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://forms.gle/C8jAWuNFT2CbeUaq9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-orbit-green px-6 py-3 text-sm font-semibold text-orbit-black transition hover:brightness-110"
            >
              Join Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orbit-green hover:text-orbit-green"
            >
              Explore Product
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
