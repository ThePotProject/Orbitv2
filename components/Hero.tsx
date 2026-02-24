import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      delay: 0.15 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const confettiPieces = [
  { left: '10%', delay: 0.0, duration: 2.8, color: '#241D39', w: 10, h: 14, rot: -18 },
  { left: '22%', delay: 0.35, duration: 2.5, color: '#3A3158', w: 8, h: 12, rot: 12 },
  { left: '36%', delay: 0.7, duration: 2.9, color: '#4B3E72', w: 10, h: 10, rot: 28 },
  { left: '48%', delay: 0.15, duration: 2.6, color: '#2B2344', w: 9, h: 14, rot: -26 },
  { left: '60%', delay: 0.55, duration: 2.7, color: '#584B82', w: 10, h: 12, rot: 8 },
  { left: '72%', delay: 0.3, duration: 2.55, color: '#30274C', w: 9, h: 11, rot: -12 },
  { left: '84%', delay: 0.8, duration: 2.85, color: '#413765', w: 8, h: 13, rot: 18 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:pt-32 md:px-8 md:pb-24 md:pt-40">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl text-center text-[2.25rem] font-bold leading-[1.02] tracking-tight text-[#271F3D] sm:text-6xl md:text-7xl lg:text-[5.4rem]"
        >
          Ready to fully commit{' '}
          <motion.img
            src="/orbit-logo-mark-main.png"
            alt="Orbit logo mark"
            className="inline-block h-14 w-20 align-[-0.25em] sm:h-16 sm:w-24 md:h-20 md:w-28"
            animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          />{' '}
          to your goals?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, delay: 0.08 }}
          className="mt-10 flex w-full max-w-5xl flex-col items-center gap-4 md:mt-12 md:flex-row md:gap-3"
        >
          <span className="whitespace-nowrap text-xl font-semibold text-[#3B3259] md:text-2xl">I commit to</span>

          <div className="relative w-full md:max-w-[460px]">
            <select
              defaultValue="4 sessions / week"
              className="orbit-select h-[66px] w-full rounded-2xl border border-[#3B3259]/30 bg-white px-5 pr-14 text-2xl font-black text-[#271F3D] shadow-[0_16px_30px_rgba(59,50,89,0.08)] outline-none transition focus:border-[#3B3259] focus:ring-2 focus:ring-[#3B3259]/20 md:h-[74px] md:text-3xl"
            >
              <option>3 sessions / week</option>
              <option>4 sessions / week</option>
              <option>5 sessions / week</option>
              <option>6 sessions / week</option>
              <option>7 sessions / week</option>
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-2xl font-black text-[#3B3259]">▾</span>
          </div>

          <a
            href="https://forms.gle/C8jAWuNFT2CbeUaq9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[66px] w-full items-center justify-center rounded-2xl bg-[#3B3259] px-8 text-xl font-black text-[#F5F2FE] shadow-[0_16px_30px_rgba(59,50,89,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2F274A] md:h-[74px] md:w-auto md:min-w-[260px] md:text-2xl"
          >
            Join Pilot
          </a>
        </motion.div>

        <section id="community-flow" className="mt-12 w-full md:mt-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            <motion.article
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="orbit-card-lift flex min-h-[460px] flex-col rounded-[28px] bg-[#111111] p-8 text-white"
            >
              <div className="flex items-center">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">01. Join</span>
              </div>

              <div className="mt-8 flex h-[180px] items-center justify-center">
                <div className="flex items-end gap-4">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-8 w-8 rounded-full bg-white"
                      animate={{ y: [0, -16, 0] }}
                      transition={{
                        duration: 1.35,
                        delay: i * 0.16,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-auto flex min-h-[176px] flex-col">
                <h3 className="min-h-[3.9rem] text-3xl font-black leading-[1.05]">Join the team.</h3>
                <p className="mt-3 min-h-[6.2rem] max-w-[31ch] text-lg leading-relaxed text-white/85">
                  Train with one cohort, keep each other accountable, and turn showing up into a shared routine.
                </p>
              </div>
            </motion.article>

            <motion.article
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="orbit-card-lift flex min-h-[460px] flex-col rounded-[28px] border border-[#3B3259]/18 bg-white p-8 text-[#271F3D]"
            >
              <div className="flex items-center">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3B3259]/75">02. Commit</span>
              </div>

              <div className="mt-8 flex h-[180px] items-center justify-center">
                <div className="flex items-end gap-4">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="inline-block text-[34px] font-black leading-none text-[#3B3259]"
                      animate={{ y: [14, -16, -16, 14], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.6,
                        delay: i * 0.22,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      €
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex min-h-[176px] flex-col">
                <h3 className="min-h-[3.9rem] text-3xl font-black leading-[1.05]">Commit together.</h3>
                <p className="mt-3 min-h-[6.2rem] max-w-[31ch] text-lg leading-relaxed text-[#3B3259]">
                  Everyone enters on equal terms so each member follows the same fair and transparent commitment.
                </p>
              </div>
            </motion.article>

            <motion.article
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="orbit-card-lift flex min-h-[460px] flex-col rounded-[28px] bg-[#2F274A] p-8 text-[#F5F2FE]"
            >
              <div className="flex items-center">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F5F2FE]/80">03. Show Up</span>
              </div>

              <div className="relative mt-8 h-[180px] overflow-hidden">
                {confettiPieces.map((piece, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-sm"
                    style={{
                      left: piece.left,
                      width: piece.w,
                      height: piece.h,
                      backgroundColor: piece.color,
                    }}
                    animate={{ y: [-20, 110], opacity: [0, 1, 1, 0], rotate: [piece.rot, piece.rot + 140] }}
                    transition={{
                      duration: piece.duration,
                      delay: piece.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <div className="mt-auto flex min-h-[176px] flex-col">
                <h3 className="min-h-[3.9rem] text-3xl font-black leading-[1.05]">Win.</h3>
                <p className="mt-3 min-h-[6.2rem] max-w-[31ch] text-lg leading-relaxed text-[#F5F2FE]/90">
                  Complete sessions as a group and keep your full deposit; if you miss, the 30/70 rule is applied.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="pilot-terms" className="mt-12 w-full md:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.54, delay: 0.38 }}
            className="mx-auto max-w-5xl rounded-[30px] border border-[#3B3259]/20 bg-[#ECE7FA] p-6 shadow-[0_24px_48px_rgba(59,50,89,0.1)] md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B3259]/70">Pilot Terms</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#271F3D] md:text-3xl">
              One challenge. Shared accountability. Three outcomes.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#3B3259] md:text-lg">
              Orbit groups run on a fixed EUR 20 deposit so everyone understands the rules before joining and stays aligned as a
              team.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-3">
              <article className="rounded-2xl border border-[#3B3259]/20 bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.13em] text-[#3B3259]/80">Complete</p>
                <p className="mt-2 text-4xl font-black leading-none text-[#271F3D]">100%</p>
                <p className="mt-1.5 text-base font-bold text-[#3B3259]">Refunded</p>
              </article>

              <article className="rounded-2xl border border-[#3B3259]/20 bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.13em] text-[#3B3259]/80">Missed</p>
                <p className="mt-2 text-4xl font-black leading-none text-[#271F3D]">30%</p>
                <p className="mt-1.5 text-base font-bold text-[#3B3259]">Penalty</p>
              </article>

              <article className="rounded-2xl border border-[#3B3259]/20 bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.13em] text-[#3B3259]/80">Recovery</p>
                <p className="mt-2 text-4xl font-black leading-none text-[#271F3D]">70%</p>
                <p className="mt-1.5 text-base font-bold text-[#3B3259]">Recoverable in 30 days</p>
              </article>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
