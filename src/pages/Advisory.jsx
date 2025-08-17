// src/pages/Advisory.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiFileText,
  FiGlobe,
  FiShield,
  FiBarChart2,
  FiUsers,
  FiPhone,
  FiMail,
  FiDownload,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

/**
 * Advisory page — polished, professional, animated with Tailwind + Framer Motion.
 * - Uses a clear hero, numbered core services (the items you provided),
 *   a secondary offerings grid, benefits area, CTA strip and a footer.
 * - Drop this file into src/pages/Advisory.jsx
 */

const coreServices = [
  {
    id: 1,
    title: "Book Keeping",
    description:
      "Maintaining accurate, organised, and up-to-date financial records to ensure clear visibility of your business performance and support informed decision-making.",
    icon: <FiFileText className="w-6 h-6" />
  },
  {
    id: 2,
    title: "GST Compliance",
    description:
      "Managing complete GST compliance — registration, return filing, reconciliation — ensuring accuracy, timeliness and adherence to regulatory requirements.",
    icon: <FiGlobe className="w-6 h-6" />
  },
  {
    id: 3,
    title: "TDS Compliance",
    description:
      "Overseeing TDS deduction, deposit, and reporting obligations precisely to minimise penalty risk and ensure smooth tax compliance.",
    icon: <FiShield className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Income Tax Compliances",
    description:
      "End-to-end support for income tax filings, assessments and documentation — optimising tax positions while keeping full regulatory conformity.",
    icon: <FiBarChart2 className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Start-up Growth Consulting",
    description:
      "Advisory for start-ups on strategy, finance and compliance — building investor readiness, scalability and a strong foundation for sustainable growth.",
    icon: <FiTrendingUp className="w-6 h-6" />
  }
];

const extraOfferings = [
  {
    title: "Bookkeeping Automation",
    description: "Smart workflow to reduce manual bookkeeping time and errors."
  },
  {
    title: "GST Health Check",
    description: "Proactive reconciliations and GST risk checks before filing."
  },
  {
    title: "Payroll & TDS Setup",
    description: "Automated payroll flows and TDS schedules tailored to your policies."
  },
  {
    title: "Tax Planning Sessions",
    description: "Quarterly tax planning to minimise liabilities and optimise cash-flow."
  },
  {
    title: "Investor-Ready Packs",
    description: "Financial packs & dashboards for investor conversations."
  },
  {
    title: "MIS Dashboards",
    description: "Custom dashboards for management visibility and KPI tracking."
  }
];

const pageContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const fadeUp = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } }
};

const Advisory = () => {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      initial="hidden"
      animate="show"
      variants={pageContainer}
    >
      {/* HERO */}
      <header className="pt-24 pb-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12"
          >
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-400/20 ring-1 ring-white/6">
                  <FiTrendingUp className="text-3xl text-pink-200" />
                </div>

                <div>
                  <h3 className="text-sm text-pink-300 font-semibold uppercase tracking-wide">
                    Advisory & Compliance
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Accurate records, on-time filings, proactive guidance
                  </p>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Practical advisory that keeps MSMEs compliant — and growing
              </h1>

              <p className="text-lg text-gray-300 max-w-3xl mb-8">
                Our advisory services combine precision bookkeeping, reliable GST & tax
                compliance and growth-focused consulting so you can focus on building
                your business while we manage the statutory and financial backbone.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-md text-white font-semibold shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  Schedule a Consultation
                  <FiArrowRight />
                </Link>

                <a
                  href="/assets/Finocos-Advisory-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-md text-white/90 text-sm bg-white/3 hover:bg-white/4 transition"
                >
                  <FiDownload />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>

            <motion.aside
              variants={fadeUp}
              className="w-full md:w-1/3 bg-white/4 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-white mb-2">Quick Contact</h4>
              <p className="text-gray-300 text-sm mb-4">
                Speak to an advisor — we respond within one business day.
              </p>

              <div className="flex flex-col gap-3 mb-3">
                <a className="flex items-start gap-3 text-gray-100 hover:text-white" href="tel:+911234567890">
                  <div className="p-2 rounded-md bg-gradient-to-br from-purple-600 to-pink-400/20">
                    <FiPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm">Phone</div>
                    <div className="text-xs text-gray-300">+91 8655167028</div>
                  </div>
                </a>

                <a className="flex items-start gap-3 text-gray-100 hover:text-white" href="mailto:partner@finocos.com">
                  <div className="p-2 rounded-md bg-gradient-to-br from-pink-500 to-purple-600/20">
                    <FiMail className="text-white text-lg" />
                  </div>
                  <div>
                    <div className="text-sm">Email</div>
                    <div className="text-xs text-gray-300">partner@finocos.com</div>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-white/6 mt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md text-sm font-medium text-white hover:from-pink-600 hover:to-purple-700 transition"
                >
                  Request Callback
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </header>

      {/* CORE SERVICES (numbered list) */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Core Advisory Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              "Our advisory services encompass comprehensive bookkeeping, GST compliance,
              and allied regulatory support — ensuring accurate records and timely filings."
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {coreServices.map((svc, idx) => (
                <motion.article
                  key={svc.id}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl p-6 border border-white/8 bg-gradient-to-br from-white/3 to-white/4 backdrop-blur-sm hover:shadow-xl transition-all duration-400"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white text-xl font-bold shadow">
                        <span className="text-lg">{String(svc.id).padStart(2, "0")}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <div className="text-pink-300">{svc.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
                      </div>
                      <p className="text-gray-300 mt-3">{svc.description}</p>

                      <div className="mt-4">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm text-pink-300 hover:underline"
                        >
                          <FiCheckCircle />
                          <span>See our approach to {svc.title.toLowerCase()}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* RIGHT: extra info, benefits & stats */}
            <div className="space-y-6">
              <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/3 border border-white/8 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">How we work</h4>
                <ol className="list-decimal list-inside text-gray-300 space-y-2 text-sm">
                  <li><strong>Assess:</strong> Understand your operation & statuary needs.</li>
                  <li><strong>Plan:</strong> Create a calendar and responsibilities matrix.</li>
                  <li><strong>Implement:</strong> Deploy systems, automation & reporting.</li>
                  <li><strong>Review:</strong> Periodic checks, corrective actions & improvements.</li>
                </ol>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 grid grid-cols-2 gap-4 bg-white/3 border border-white/8 backdrop-blur-sm">
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-pink-300">12+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-pink-300">95%</div>
                  <div className="text-sm text-gray-300">Client Retention</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-pink-300">120+</div>
                  <div className="text-sm text-gray-300">Professionals</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-3xl font-extrabold text-pink-300">60+</div>
                  <div className="text-sm text-gray-300">Major Clients</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 bg-white/3 border border-white/8 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3">Industry Focus & Tools</h4>
                <p className="text-gray-300 text-sm mb-4">We support MSMEs across manufacturing, retail, services and tech using modern tools for accuracy and insights.</p>
                <div className="flex gap-2 flex-wrap">
                  {["Tally / Xero","Zoho Books","Power BI","Excel & Macros","GSTN Tools","Custom MIS"].map(t => (
                    <span key={t} className="text-xs bg-white/6 px-3 py-2 rounded-md border border-white/6 text-gray-200">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRA OFFERINGS GRID */}
      <section className="py-12 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h3 variants={fadeUp} className="text-2xl font-bold mb-6 text-center">Other advisory capabilities</motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {extraOfferings.map((o, i) => (
              <motion.div
                key={o.title}
                variants={fadeUp}
                className="bg-white/4 backdrop-blur-sm p-6 rounded-xl border border-white/8 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 text-white">{o.title}</h4>
                <p className="text-gray-300 text-sm">{o.description}</p>
                <div className="mt-4">
                  <a href="#contact" className="text-pink-300 text-sm hover:underline inline-flex items-center gap-2">
                    Learn more <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to make compliance effortless?</h3>
              <p className="text-white/90">Talk to our advisory team and get a tailored plan for your business in 48 hours.</p>
            </div>

            <div className="flex gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-purple-700 rounded-md font-semibold shadow hover:scale-105 transition-transform">
                Contact Us <FiArrowRight />
              </Link>

              <a href="/assets/Finocos-Advisory-Proposal.pdf" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 rounded-md text-white hover:bg-white/6 transition">
                Request Proposal <FiDownload />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="py-8 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Finocos — Advisory services for MSMEs</div>
            <div className="text-xs text-gray-500 mt-1">Accurate bookkeeping • Reliable compliance • Growth advisory</div>
          </div>

          <div className="flex items-center gap-4">
            <a className="text-gray-300 hover:text-white" href="mailto:partner@finocos.com"><FiMail /></a>
            <a className="text-gray-300 hover:text-white" href="tel:+918655167028"><FiPhone /></a>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Advisory;
