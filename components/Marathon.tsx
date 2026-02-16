import React from 'react';
import { motion } from 'framer-motion';

const Marathon: React.FC = () => {
  return (
    <section id="marathon" className="relative px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">Pilot Program</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Campus cohorts are now open</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300">
            We are onboarding early users to test completion rates, payout transparency, and retention in real study cycles.
          </p>
          <a
            href="https://forms.gle/C8jAWuNFT2CbeUaq9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full border border-orbit-green/45 bg-orbit-green/10 px-6 py-3 text-sm font-semibold text-orbit-green transition hover:bg-orbit-green/20"
          >
            Apply for Pilot
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
        >
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Cohort size</span>
              <span className="font-semibold text-white">20-30 students</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Challenge length</span>
              <span className="font-semibold text-white">7-14 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Next intake</span>
              <span className="font-semibold text-white">March 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Marathon;
