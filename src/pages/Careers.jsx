import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBriefcase, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const Careers = () => {
  const fadeUp = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white"
      initial="hidden"
      animate="show"
    >
      <section className="pt-28 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500/20 ring-1 ring-white/10">
                <FiBriefcase className="text-3xl text-cyan-200" />
              </div>
              <div className="text-left">
                <h3 className="text-sm text-cyan-300 font-semibold uppercase tracking-wide">Careers</h3>
                <p className="text-gray-400 text-sm">Build with us. Learn. Grow. Deliver impact.</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Join Us on the Journey
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              We’re always looking for driven professionals who care about quality, clarity, and solving real problems in finance and export operations.
              When new openings are available, we’ll list them here.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white">Current Openings</h2>
            <p className="text-gray-300 mt-2">
              No open roles at the moment. If you’d like to be considered for future opportunities, please share your profile.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'High ownership and accountability',
                'Strong compliance mindset',
                'Clear communication and documentation',
                'Customer-first problem solving',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
                  <FiCheckCircle className="mt-0.5 text-cyan-300" />
                  <div className="text-sm text-gray-200">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md text-white font-medium shadow hover:scale-[1.02] transition-transform"
              >
                Contact HR <FiChevronRight />
              </Link>
              <a
                href="mailto:hello@finocos.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/10 rounded-md text-white/90 bg-white/3 hover:bg-white/5 transition"
              >
                Email your resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Careers;
