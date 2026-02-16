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
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">Payout Model</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Transparent by design</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300">
            Orbit discloses challenge rules before users join. Deposits are returned to attendees, and no-show deposits are redistributed according to predefined terms.
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
              <span>20 students x €10 deposit</span>
              <span className="text-white">€200 total pool</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>16 show up, 4 no-show</span>
              <span className="text-white">€40 redistributable</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Deposit returned per attendee</span>
              <span className="text-white">€10.00</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Bonus from redistribution (€40/16)</span>
              <span className="text-white">€2.50</span>
            </li>
            <li className="flex items-start justify-between gap-4 border-t border-white/10 pt-3">
              <span>Total received per attendee</span>
              <span className="text-orbit-green font-semibold">€12.50</span>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-gray-400">
            Exact payout logic, verification criteria, and exceptions are shown to users before every challenge starts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThePot;
