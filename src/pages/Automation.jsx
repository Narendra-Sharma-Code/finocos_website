// src/pages/Automation.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiCpu,
  FiCode,
  FiDatabase,
  FiCloud,
  FiLayers,
  FiZap,
  FiBriefcase,
  FiPlayCircle,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiDownload
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiPlayCircle className="w-6 h-6" />,
    title: "Automated eBRC - SimplEx",
    subtitle: "DGFT & export documentation automation",
    description:
      "Integrates ERP and export docs to generate and manage eBRCs with full DGFT compliance and audit trail."
  },
  {
    id: 2,
    icon: <FiBriefcase className="w-6 h-6" />,
    title: "Finance Cost Validations - Finocos",
    subtitle: "Automatic bank charge reconciliations",
    description:
      "Detects discrepancies across interest and fee entries, safeguarding margins and simplifying reconciliations."
  },
  {
    id: 3,
    icon: <FiDatabase className="w-6 h-6" />,
    title: "MIS & Report Generation - OpsX",
    subtitle: "Real-time customised dashboards",
    description:
      "Auto-generated MIS and analytical reports that provide actionable insights, delivered on schedule."
  },
  {
    id: 4,
    icon: <FiLayers className="w-6 h-6" />,
    title: "Logistics & Purchase Automations - ConnectX",
    subtitle: "Invoice processing & rate validation",
    description:
      "Automates vendor invoices, rate checks and purchase entries — reducing manual work and improving cost control."
  },
  {
    id: 5,
    icon: <FiCode className="w-6 h-6" />,
    title: "RPA Solutions",
    subtitle: "Bots for rule-based work",
    description:
      "Deploys software robots that mimic human actions for repetitive tasks without changing existing systems."
  },
  {
    id: 6,
    icon: <FiDatabase className="w-6 h-6" />,
    title: "Data Integration",
    subtitle: "Unified data from multiple sources",
    description:
      "Consolidates and synchronises data for a single source of truth across finance, operations, and logistics."
  },
  {
    id: 7,
    icon: <FiLayers className="w-6 h-6" />,
    title: "Workflow Automations",
    subtitle: "End-to-end process flows",
    description:
      "Digitises workflows to remove bottlenecks, routing approvals and tasks intelligently to teams."
  },
  {
    id: 8,
    icon: <FiZap className="w-6 h-6" />,
    title: "AI-Powered Automation",
    subtitle: "Adaptive & predictive automation",
    description:
      "Uses AI to learn patterns, predict exceptions, and optimise process routing and decision rules."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const fadeInUp = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Automation = () => {
  const heroRef = useRef(null);

  // Parallax targeted to hero section only
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <motion.main
      className="min-h-screen text-white bg-gradient-to-b from-slate-900 via-gray-900 to-black"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* HERO (video inside the section so it scrolls with page) */}
      <section ref={heroRef} className="relative min-h-[78vh] w-full overflow-hidden">
        {/* Parallax video */}
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
            style={{ transform: "scale(1.02)" }}
          >
            <source src="/automationbg.mp4" type="video/mp4" />
          </video>

          {/* Subtle gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />
          {/* Decorative blobs */}
          <div
            className="absolute -left-28 -top-16 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.16), rgba(99,102,241,0.18))" }}
          />
          <div
            className="absolute -right-28 -bottom-24 w-80 h-80 rounded-full blur-3xl opacity-16"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.10))" }}
          />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center min-h-[78vh]">
          <div className="container mx-auto max-w-6xl px-6">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600/20 ring-1 ring-white/8">
                  <FiCpu className="text-3xl text-cyan-200" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm text-cyan-300 font-semibold uppercase tracking-wider">Automation & Ops</h4>
                  <div className="text-gray-300 text-sm">Faster processes • Less manual effort • Better control</div>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                Automation solutions that reduce work, increase accuracy, and unlock speed
              </h1>

              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                We design and deploy automation for compliance, reporting and operations — from eBRC generation to AI-powered decisioning — so teams can focus on outcomes, not repetitive tasks.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Get a Demo
                  <FiArrowRight />
                </Link>

                <a
                  href="/assets/Finocos-Automation-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-md text-white/90 text-sm bg-white/3 hover:bg-white/4 transition"
                >
                  <FiDownload /> Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div variants={fadeInUp} className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Automation Capabilities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modular solutions built to integrate with your systems — from ERP to BI — so automation adds value from day one.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.article
                key={f.id}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl p-6 border border-white/8 bg-white/3 backdrop-blur-sm hover:shadow-2xl transition-all duration-400"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-lg font-semibold shadow">
                      {f.id}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-cyan-300">{f.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                    </div>
                    <div className="text-sm text-gray-300 mb-3">{f.subtitle}</div>
                    <p className="text-gray-300 text-sm">{f.description}</p>

                    <div className="mt-4">
                      <a
                        href="#contact"
                        className="text-cyan-300 text-sm inline-flex items-center gap-2 hover:underline"
                      >
                        Learn more
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </div>

                {/* subtle hover sheen */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 -translate-x-32 rotate-12 bg-white/6 pointer-events-none"
                  initial={{ x: -240 }}
                  whileHover={{ x: 360 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  aria-hidden
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose + CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4">Why Finocos Automation?</h3>
              <ul className="space-y-4 text-gray-300">
                {[
                  "Reduced operational costs and faster cycle times",
                  "Improved data accuracy and fewer exceptions",
                  "Scalable, modular automations that integrate easily",
                  "24/7 operations for continuous processing",
                  "AI enhancements for predictive exception handling"
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    </div>
                    <div>{txt}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/4 backdrop-blur-sm rounded-2xl p-6 border border-white/8">
              <h4 className="text-lg font-semibold mb-3">Start with a quick assessment</h4>
              <p className="text-gray-300 mb-4">
                We evaluate your processes and provide a low-effort pilot plan to demonstrate value quickly.
              </p>

              <div className="grid gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md text-white font-medium">
                  Request Assessment
                </Link>

                <a href="/assets/Finocos-Automation-Pilot.pdf" className="inline-flex items-center justify-center px-4 py-3 border border-white/10 rounded-md text-white/90">
                  Download Pilot Pack <FiDownload className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div variants={fadeInUp} className="rounded-2xl bg-gradient-to-r from-cyan-700 to-blue-600 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to automate the repetitive work?</h3>
              <p className="text-white/90">Book a demo to see your processes running automatically in days, not months.</p>
            </div>

            <div className="flex gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-700 rounded-md font-semibold shadow">
                Get a Demo <FiArrowRight />
              </Link>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 rounded-md text-white">
                Talk to Sales <FiPhone />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Finocos Automation</div>
            <div className="text-xs text-gray-500 mt-1">Automate compliance • Streamline reporting • Improve accuracy</div>
          </div>

          <div className="flex items-center gap-4">
            <a className="text-gray-300 hover:text-white" href="mailto:automation@finocos.com"><FiMail /></a>
            <a className="text-gray-300 hover:text-white" href="tel:+911234567890"><FiPhone /></a>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Automation;
