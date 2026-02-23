import React from 'react';
import { motion } from 'framer-motion';
import { BadgeEuro, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Commit',
    description: 'Join a challenge with a small deposit. Terms are visible before checkout.',
    icon: BadgeEuro,
  },
  {
    title: 'Show up',
    description: 'Complete your planned session and check in using transparent attendance rules.',
    icon: Target,
  },
  {
    title: 'Settle outcome',
    description: 'Complete and recover your deposit. Miss the challenge and lose 30%, with 70% recoverable via a verified follow-up in 30 days.',
    icon: TrendingUp,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">How It Works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">A simple 3-step loop</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <Icon className="mb-4 h-5 w-5 text-orbit-green" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
