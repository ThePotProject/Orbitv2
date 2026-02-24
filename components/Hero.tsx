import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, ShieldCheck, Users, Wallet } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-9 flex h-12 items-end gap-3 md:mb-12"
        >
          <div className="orbit-bounce orbit-bounce-delay-1 h-5 w-5 rounded-full bg-[#0066FF] md:h-6 md:w-6" />
          <div className="orbit-bounce orbit-bounce-delay-2 h-5 w-5 rounded-full bg-[#0066FF] md:h-6 md:w-6" />
          <div className="orbit-bounce orbit-bounce-delay-3 h-5 w-5 rounded-full bg-[#0066FF] md:h-6 md:w-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-5xl text-center text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ready to finally <span className="text-[#0066FF]">commit</span>
          <br className="hidden sm:block" /> to your goals?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mb-14 mt-10 flex w-full max-w-4xl flex-col items-center gap-4 md:mb-20 md:flex-row md:justify-center"
        >
          <span className="whitespace-nowrap text-xl font-semibold text-slate-500 md:text-2xl">I commit to</span>

          <div className="relative w-full md:min-w-[340px]">
            <select
              defaultValue="3 sessions / week"
              className="orbit-select h-[60px] w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-5 pr-12 text-xl font-bold text-slate-900 shadow-sm outline-none transition focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/30 md:h-[64px] md:text-2xl"
            >
              <option>3 sessions / week</option>
              <option>4 sessions / week</option>
              <option>5 sessions / week</option>
              <option>6 sessions / week</option>
              <option>7 sessions / week</option>
              <option>8 sessions / week</option>
              <option>9 sessions / week</option>
              <option>10 sessions / week</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500" />
          </div>

          <a
            href="https://forms.gle/C8jAWuNFT2CbeUaq9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[60px] w-full flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0066FF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0066FF]/25 transition hover:bg-[#3385FF] md:h-[64px] md:w-auto md:text-lg"
          >
            Start Pilot
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <section id="how-it-works" className="w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.5 }}
              className="orbit-card group flex min-h-[500px] flex-col rounded-[28px] bg-[#0066FF] p-8 text-left text-white md:p-10"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">01. Join</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Users className="h-5 w-5 text-white" />
                </span>
              </div>

              <div className="mt-8 flex h-[180px] items-center justify-center">
                <div className="flex items-end gap-4">
                  <div className="h-16 w-8 rounded-b-lg rounded-t-full bg-white/35 transition-all duration-500 md:translate-y-8 md:opacity-60 md:group-hover:translate-y-0 md:group-hover:opacity-100" />
                  <div className="h-20 w-10 rounded-b-lg rounded-t-full bg-white transition-all duration-500 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100" />
                  <div className="h-16 w-8 rounded-b-lg rounded-t-full bg-white/35 transition-all duration-500 md:translate-y-8 md:opacity-60 md:delay-100 md:group-hover:translate-y-0 md:group-hover:opacity-100" />
                </div>
              </div>

              <div className="mt-auto pt-6">
                <h3 className="max-w-[14ch] text-3xl font-bold leading-[1.06]">Join the weekly challenge.</h3>
                <p className="mt-3 max-w-[26ch] text-lg leading-relaxed text-white/90 md:translate-y-4 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  Attend 3 focus sessions to build your streak.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="orbit-card group flex min-h-[500px] flex-col rounded-[28px] border border-slate-800/70 bg-[#1C1C1E] p-8 text-left text-white md:p-10"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">02. Deposit</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Wallet className="h-5 w-5 text-white" />
                </span>
              </div>

              <div className="mt-8 flex h-[180px] items-center justify-center">
                <div className="rounded-2xl bg-white px-7 py-3 text-3xl font-bold text-[#1C1C1E] shadow-2xl transition-all duration-500 md:translate-y-8 md:scale-75 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:scale-100 md:group-hover:opacity-100">
                  €20.00
                </div>
              </div>

              <div className="mt-auto pt-6">
                <h3 className="max-w-[14ch] text-3xl font-bold leading-[1.06]">Deposit 20 Euros.</h3>
                <p className="mt-3 max-w-[26ch] text-lg leading-relaxed text-slate-300 md:translate-y-4 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  Held before kickoff as your commitment device.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="orbit-card group flex min-h-[500px] flex-col rounded-[28px] border border-slate-200 bg-[#F2F2F7] p-8 text-left text-slate-900 md:p-10"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">03. Execute</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/10">
                  <ShieldCheck className="h-5 w-5 text-slate-700" />
                </span>
              </div>

              <div className="mt-8 flex h-[180px] items-center justify-center">
                <div className="relative h-24 w-24">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="6" className="text-slate-300" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      className="orbit-success-ring text-emerald-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="h-9 w-9 text-emerald-500 transition-all duration-500 md:scale-50 md:opacity-0 md:delay-200 md:group-hover:scale-100 md:group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <h3 className="max-w-[18ch] text-3xl font-bold leading-[1.06]">Complete sessions, get fully refunded.</h3>
                <p className="mt-3 max-w-[27ch] text-lg leading-relaxed text-slate-600 md:translate-y-4 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  Miss the target and the 30% penalty applies instantly.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="pricing" className="mt-10 w-full md:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pilot Pricing</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                One deposit. Three clear outcomes.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                Challenges run on a fixed €20 deposit so outcomes stay simple, predictable, and visible before you join.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              <article className="group rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">Complete</p>
                <p className="mt-2 text-4xl font-bold leading-none text-emerald-600">100%</p>
                <p className="mt-2 text-base font-semibold text-emerald-800">Refunded</p>
                <p className="mt-2 text-sm text-emerald-700">You get your full €20 back.</p>
              </article>

              <article className="group rounded-2xl border border-rose-200 bg-rose-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-700">Missed</p>
                <p className="mt-2 text-4xl font-bold leading-none text-rose-600">30%</p>
                <p className="mt-2 text-base font-semibold text-rose-800">Penalty</p>
                <p className="mt-2 text-sm text-rose-700">Immediate loss on non-completion.</p>
              </article>

              <article className="group rounded-2xl border border-sky-200 bg-sky-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">Recovery</p>
                <p className="mt-2 text-4xl font-bold leading-none text-sky-600">70%</p>
                <p className="mt-2 text-base font-semibold text-sky-800">Can Be Recovered</p>
                <p className="mt-2 text-sm text-sky-700">Recoverable via verified follow-up in 30 days.</p>
              </article>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                €20 pilot deposit
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                Terms shown before join
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                Fast settlement after verification
              </span>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
