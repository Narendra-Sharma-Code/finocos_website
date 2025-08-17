// src/pages/Assurance.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiShield,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiDownload,
  FiArrowRight
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'Internal Audits',
    description:
      'Providing independent and systematic evaluations to identify risks, enhance controls, and drive operational efficiency. Our audits go beyond compliance to deliver actionable insights for business improvement.'
  },
  {
    title: 'FEMA Compliances',
    description:
      'Ensuring seamless adherence to the Foreign Exchange Management Act through expert guidance, accurate documentation, and timely reporting, minimising regulatory risks in cross-border transactions.'
  },
  {
    title: 'International Taxations',
    description:
      'Offering strategic advisory on global tax structures, double taxation avoidance, and cross-border compliance to optimise tax efficiency while maintaining full regulatory conformity.'
  },
  {
    title: 'MIS Development and Improvements',
    description:
      'Designing and refining Management Information Systems that deliver precise, real-time insights, empowering data-driven decision-making and business performance tracking.'
  },
  {
    title: 'EDPMS / IDPMS Closures & eBRC',
    description:
      'Streamlining export and import documentation processes by managing EDPMS/IDPMS closures and generating eBRCs accurately, ensuring compliance with RBI and DGFT norms.'
  },
  {
    title: 'SEZ Compliances',
    description:
      'Facilitating end-to-end Special Economic Zone compliance through meticulous record management, statutory filings, and procedural adherence to maintain operational and fiscal benefits.'
  }
];

const featureBullets = [
  'Independent, objective assurance',
  'Actionable insights for management',
  'Regulatory compliance & filings',
  'Secure handling of sensitive data',
  'Tailored solutions for industry specifics',
  'Dedicated support & rapid response'
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, when: 'beforeChildren' } }
};
const itemFadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } }
};

const Assurance = () => {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Hero */}
      <header className="pt-28 pb-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            variants={itemFadeUp}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            {/* Left: Hero text */}
            <div className="w-full md:w-2/3">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400/30 ring-1 ring-white/6">
                  <FiShield className="text-3xl text-cyan-200" />
                </div>
                <div>
                  <h2 className="text-sm text-cyan-300 font-semibold uppercase tracking-wide">
                    Assurance & Compliance
                  </h2>
                  <p className="text-gray-400 text-sm">Upholding stakeholder trust & transparency</p>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                Assurance services that strengthen trust, compliance and performance
              </h1>

              <p className="text-lg text-gray-300 max-w-3xl mb-8">
                Assurance services uphold the stakeholder’s interest by fostering transparency, integrity, and accountability in business practices — strengthening trust and confidence across your organization.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-md text-white font-medium shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  <span>Get a Consultation</span>
                  <FiArrowRight className="opacity-90" />
                </Link>

                <a
                  href="/assets/Finocos-Assurance-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 hover:border-cyan-400/40 rounded-md text-white/90 text-sm transition-shadow bg-white/2"
                >
                  <FiDownload className="text-base" />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>

            {/* Right: Contact card */}
            <motion.aside
              variants={itemFadeUp}
              className="w-full md:w-1/3 bg-white/4 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Quick Contact</h4>
              <p className="text-gray-300 text-sm mb-4">Speak to an assurance specialist — we'll get back within one business day.</p>

              <div className="flex flex-col gap-3">
                <a className="flex items-center gap-3 text-gray-100 hover:text-white" href="tel:+911234567890">
                  <div className="p-2 rounded-md bg-gradient-to-br from-blue-600 to-cyan-400/20">
                    <FiPhone className="text-cyan-100" />
                  </div>
                  <div>
                    <div className="text-sm">Phone</div>
                    <div className="text-xs text-gray-300">+91 8655167028</div>
                  </div>
                </a>

                <a className="flex items-center gap-3 text-gray-100 hover:text-white" href="mailto:partner@finocos.com">
                  <div className="p-2 rounded-md bg-gradient-to-br from-green-500 to-emerald-400/20">
                    <FiMail className="text-green-100" />
                  </div>
                  <div>
                    <div className="text-sm">Email</div>
                    <div className="text-xs text-gray-300">partner@finocos.com</div>
                  </div>
                </a>

                <div className="pt-3 border-t border-white/6 mt-2">
                  <div className="text-xs text-gray-400 mb-2">Request a callback</div>
                  <Link
                    to="/contact"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-sm font-medium text-white hover:from-cyan-600 hover:to-blue-700 transition"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </header>

      {/* Services grid (numbered, detailed) */}
      <section className="py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div className="mb-10 text-center" variants={itemFadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Core Assurance Offerings</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">We combine technical excellence with domain knowledge to deliver assurance services tailored to your risk profile.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: numbered services list */}
            <div className="space-y-6">
              {servicesList.map((svc, idx) => (
                <motion.article
                  key={svc.title}
                  variants={itemFadeUp}
                  className="group relative overflow-hidden rounded-2xl p-6 border border-white/8 bg-gradient-to-br from-white/2 to-white/3 backdrop-blur-sm hover:shadow-xl transition-all duration-400"
                >
                  <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full blur-2xl opacity-10 bg-gradient-to-br from-blue-500 to-cyan-400/30 pointer-events-none" />
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xl font-bold shadow">
                        <span>{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{svc.title}</h4>
                      <p className="text-gray-300">{svc.description}</p>
                      <div className="mt-4">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:underline"
                        >
                          <FiCheckCircle />
                          <span>Learn how we approach {svc.title.toLowerCase()}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Right: Why choose / Stats / Benefits */}
            <div className="space-y-6">
              <motion.div variants={itemFadeUp} className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-white/4 border border-white/8 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Why partner with Finocos?</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {featureBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                          <FiCheckCircle />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium">{b}</div>
                        <div className="text-gray-300 text-sm">Practical, audit-tested approach tailored to your business.</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemFadeUp} className="rounded-2xl p-6 grid grid-cols-2 gap-4 bg-gradient-to-br from-white/3 to-white/4 border border-white/8 backdrop-blur-sm">
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-cyan-300">12+</div>
                  <div className="text-sm text-gray-300">Years of Experience</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-cyan-300">95%</div>
                  <div className="text-sm text-gray-300">Client Retention</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-cyan-300">120+</div>
                  <div className="text-sm text-gray-300">Professionals</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-cyan-300">60+</div>
                  <div className="text-sm text-gray-300">Major Clients</div>
                </div>
              </motion.div>

              <motion.div variants={itemFadeUp} className="rounded-2xl p-6 bg-white/4 border border-white/8 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3">Industry & Tools</h4>
                <p className="text-gray-300 text-sm mb-4">
                  We work across financial services, SaaS, FMCG and technology sectors — using modern audit & analytics tools to deliver deep insights.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {['Audit', 'Compliance', 'Risk', 'Analytics', 'Data', 'Custom MIS'].map((t) => (
                    <span key={t} className="text-xs bg-white/6 px-3 py-2 rounded-md border border-white/6 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={itemFadeUp} className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to strengthen assurance & compliance?</h3>
              <p className="text-white/90">Talk to our specialists for a quick needs assessment and a bespoke action plan.</p>
            </div>

            <div className="flex gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-700 rounded-md font-semibold shadow hover:scale-105 transition-transform">
                Contact Us
                <FiArrowRight />
              </Link>

              <a href="/assets/Finocos-Assurance-Proposal.pdf" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 rounded-md text-white hover:bg-white/6 transition">
                Request Proposal
                <FiDownload />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer mini (contact summary) */}
      <footer className="py-10 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Finocos. All rights reserved.</div>
            <div className="text-xs text-gray-500 mt-1">Registered & compliant — tailored assurance for modern businesses.</div>
          </div>
          <div className="flex items-center gap-4">
            <a className="text-gray-300 hover:text-white" href="mailto:partner@finocos.com"><FiMail /></a>
            <a className="text-gray-300 hover:text-white" href="tel:+911234567890"><FiPhone /></a>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Assurance;
