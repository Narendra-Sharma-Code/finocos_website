import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTool, FiArrowRight } from 'react-icons/fi';

const CaseStudies = () => {
  const fadeUp = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white"
      initial="hidden"
      animate="show"
    >
      <header className="pt-28 pb-10">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10">
              <FiTool className="h-7 w-7 text-cyan-200" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
              Case Studies
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We’re currently preparing detailed case studies across export compliance, finance cost validation, assurance, and automation.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="pb-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 shadow-2xl"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Under development</h2>
            <p className="text-slate-200 mb-8">
              If you’d like a relevant reference for your industry, contact us and we’ll share suitable anonymised examples.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md text-white font-semibold shadow hover:scale-[1.02] transition-transform"
              >
                Contact Us
                <FiArrowRight />
              </Link>
              <Link
                to="/resources/blog"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-md text-white/90 hover:bg-white/5 transition"
              >
                Read our Blog
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default CaseStudies;
