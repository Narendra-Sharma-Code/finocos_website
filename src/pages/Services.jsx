import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiBriefcase, FiCpu, FiChevronRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Assurance',
      description: 'Comprehensive audit and compliance solutions for export and finance operations.',
      icon: <FiShield className="w-6 h-6" />,
      to: '/assurance',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Advisory',
      description: 'Strategic finance and process advisory to improve governance, controls, and performance.',
      icon: <FiBriefcase className="w-6 h-6" />,
      to: '/advisory',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Automation',
      description: 'Automation solutions for document digitisation, MIS, and workflow efficiencies.',
      icon: <FiCpu className="w-6 h-6" />,
      to: '/automation',
      gradient: 'from-violet-600 to-purple-700',
    },
  ];

  const fadeUp = {
    hidden: { y: 14, opacity: 0 },
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
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Services
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our core offerings across assurance, advisory, and automation—built for finance and export-focused operations.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/4 to-white/2 backdrop-blur-sm p-6 hover:border-white/20 hover:shadow-2xl transition-all"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${s.gradient} w-max text-white shadow-lg`}>
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{s.description}</p>

                <div className="mt-6">
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    Learn more <FiChevronRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Services;
