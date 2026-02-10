import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageCircle, FiExternalLink } from 'react-icons/fi';

const Contact = () => {
  const fadeUp = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const contactItems = [
    {
      title: 'Call',
      description: 'Speak with our team for solutions, support, or a quick walkthrough.',
      href: 'tel:+918655167028',
      label: '+91 8655167028',
      icon: <FiPhone className="w-5 h-5" />,
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'WhatsApp',
      description: 'Message us on WhatsApp for fast coordination and document queries.',
      href: 'https://wa.me/918655167028',
      label: 'Chat on WhatsApp',
      icon: <FiMessageCircle className="w-5 h-5" />,
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Email',
      description: 'Send requirements, documents, or questions and we’ll respond promptly.',
      href: 'mailto:partner@finocos.com',
      label: 'partner@finocos.com',
      icon: <FiMail className="w-5 h-5" />,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with us for updates, collaboration, and company information.',
      href: 'https://www.linkedin.com/company/96044082/admin/dashboard/',
      label: 'Visit LinkedIn',
      icon: <FiExternalLink className="w-5 h-5" />,
      gradient: 'from-indigo-600 to-violet-700',
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white"
      initial="hidden"
      animate="show"
    >
      <section className="pt-28 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-rose-300">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Reach out for a consultation, implementation support, or product queries. We’ll route you to the right team.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item) => (
              <motion.a
                key={item.title}
                variants={fadeUp}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/4 to-white/2 backdrop-blur-sm p-6 hover:border-white/20 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-1 leading-relaxed">{item.description}</p>
                    <div className="mt-4 text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
                      {item.label}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white">Office Hours</h2>
            <p className="text-gray-300 mt-2">Monday to Saturday • 10:00 AM – 7:00 PM (IST)</p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
