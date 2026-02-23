import React from 'react';
import { motion } from 'framer-motion';

const ThePot: React.FC = () => {
  return (
    <section id="the-pot" className="relative px-5 pb-24 pt-20 md:px-6 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr,1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">30/70 Rule Model</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Transparent by design</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300">
            Orbit discloses all challenge terms before users join. On non-completion, users lose an immediate 30%
            penalty. The remaining 70% is recoverable only by completing a verified follow-up challenge within 30
            days; otherwise Orbit retains it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
        >
          <p className="text-sm font-semibold tracking-wide text-white">Example challenge</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li className="flex items-start justify-between gap-4">
              <span>Deposit per participant</span>
              <span className="text-white">€20.00</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>If challenge is completed</span>
              <span className="text-white">€20.00 returned</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>If challenge is missed (30% penalty)</span>
              <span className="text-white">€6.00 charged</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Follow-up completed in 30 days</span>
              <span className="text-white">€14.00 recovered</span>
            </li>
            <li className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
              <span>No follow-up completion in 30 days</span>
              <span className="text-orbit-green font-semibold">Orbit retains €14.00</span>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-gray-400">
            There is no peer-to-peer payout redistribution. Verification criteria, dispute windows, and exceptions are
            shown before every challenge starts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThePot;
