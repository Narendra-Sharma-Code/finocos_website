// src/pages/Company.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiAward,
  FiMapPin,
  FiGlobe,
  FiHeart,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiChevronRight
} from "react-icons/fi";

const stats = [
  { icon: <FiUsers className="w-7 h-7" />, value: "50+", label: "Clients Worldwide" },
  { icon: <FiAward className="w-7 h-7" />, value: "15+", label: "Years Experience" },
  { icon: <FiMapPin className="w-7 h-7" />, value: "5", label: "Global Offices" },
  { icon: <FiUsers className="w-7 h-7" />, value: "200+", label: "Team Members" }
];

const values = [
  { icon: <FiUsers className="w-6 h-6" />, title: "Collaboration", description: "We believe in working together to achieve extraordinary results." },
  { icon: <FiAward className="w-6 h-6" />, title: "Excellence", description: "We strive for the highest standards in everything we do." },
  { icon: <FiHeart className="w-6 h-6" />, title: "Integrity", description: "We do what's right, even when no one is watching." },
  { icon: <FiTrendingUp className="w-6 h-6" />, title: "Innovation", description: "We embrace change and continuously seek better solutions." }
];

const leaders = [
  { initials: "AR", name: "Akash Rai", title: "CEO & Founder", bio: "Visionary leader with deep experience in finance, banking operations, and export compliance." },
  { initials: "SM", name: "Simon Majumdar", title: "Co-Founder", bio: "Expert in corporate compliance and process design with strong domain knowledge." },
  { initials: "RS", name: "Ronak Shah", title: "CTO", bio: "Technology lead driving product and platform engineering for automation solutions." },
  { initials: "EM", name: "Emerging", title: "Head - Delivery", bio: "Operational excellence and client delivery specialist." }
];

const timeline = [
  { date: "Late 2019", title: "Genesis of the Idea", text: "Idea formed when founders recognised export industry inefficiencies — export incentives, eBRC generation and excess bank charges." },
  { date: "Dec 2020", title: "Business Plan", text: "Idea matured into a plan, targeting Finance Cost Validation and EDPMS closures." },
  { date: "Jul 2021", title: "Company Founded", text: "Finocos Global established, initially serving SEZ exporters through manual processes with a long-term automation vision." },
  { date: "Mar 2022", title: "Growing Trust", text: "Delivered assurance services and expanded client base within SEEPZ and beyond." },
  { date: "Jun 2023", title: "ConnectX Solutions", text: "Launched Stores & Freight Automation with technology partner; strong client interest followed." },
  { date: "Jun 2024", title: "In-house Tech", text: "Built internal tech team to fully own product development." },
  { date: "Jan 2025", title: "SimplEx & SaaS Focus", text: "Shifted to scalable SaaS — implemented Job Work Invoice & MIS automation and launched SimplEx." }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

const Company = () => {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* HERO */}
      <header className="pt-28 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-red-600 to-pink-500/20 ring-1 ring-white/6">
                <FiGlobe className="text-3xl text-pink-200" />
              </div>
              <div className="text-left">
                <h3 className="text-sm text-pink-300 font-semibold uppercase tracking-wide">Our Journey</h3>
                <p className="text-gray-400 text-sm">From concept to market leadership in export automation</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-pink-300">
              The Journey of Finocos: From Concept to Market Leadership
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Finocos began with a simple mission — solve the repetitive, error-prone financial processes in exports.
              With domain expertise and a product-first mindset, we moved from manual services to automation and SaaS.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 rounded-md text-white font-medium shadow hover:scale-[1.02] transition-transform">
                Contact Us
                <FiChevronRight />
              </Link>
              <a href="/assets/Finocos-Company-Overview.pdf" className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-md text-white/90 bg-white/3 hover:bg-white/4 transition">
                <FiCheckCircle /> Company Overview
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* STATS */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/8 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-3 text-pink-300">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE / STORY */}
      <section className="py-12 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6">Our Story</motion.h2>

          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-8">
            {/* Left: narrative condensed and highlights */}
            <div className="prose prose-invert max-w-none text-gray-300">
              <p>
                Finocos was born from a vision to simplify and automate complex financial processes in the export industry.
                Our founders — Akash (Chartered Accountant) and Simon (Company Secretary) — saw recurring pain points in export incentives,
                eBRC generation and excess bank charges and set out to build practical solutions.
              </p>

              <h4 className="mt-6">From Vision to Foundation</h4>
              <p>
                By December 2020 the idea became a business plan. Finocos Global was formally established on July 1, 2021 focusing initially on SEZ-based exporters.
                The early work estabished trust and revealed clear opportunities for automation.
              </p>

              <h4 className="mt-6">Shift to Automation</h4>
              <p>
                After partnering with a tech collaborator and delivering early ConnectX modules (Stores & Freight Automation), we built an in-house tech team in 2024.
                In January 2025 the SimplEx product launched to automate bank advice entry, eBRC generation and finance cost validation — delivering measurable value.
              </p>

              <p className="mt-6">
                Today, Finocos focuses on scaling SaaS solutions for exporters with a first-mover advantage built on domain experience, engineering excellence, and client trust.
              </p>
            </div>

            {/* Right: Timeline visual */}
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-white/8 hidden lg:block" />
              <ol className="space-y-6">
                {timeline.map((t, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-pink-500 flex items-center justify-center text-white font-semibold shadow">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-pink-300 font-medium">{t.date}</span>
                      <h4 className="text-lg font-semibold text-white">{t.title}</h4>
                      <p className="text-gray-300 mt-1">{t.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES & LEADERSHIP */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((v, idx) => (
                  <div key={idx} className="bg-white/4 p-5 rounded-xl border border-white/8 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-pink-300">{v.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold">{v.title}</h4>
                        <p className="text-gray-300 text-sm mt-1">{v.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Leadership</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {leaders.map((ld, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="bg-white/4 p-4 rounded-xl border border-white/8 backdrop-blur-sm flex gap-4 items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-pink-500/40 flex items-center justify-center text-white text-xl font-bold">
                      {ld.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white">{ld.name}</h4>
                        <span className="text-xs text-gray-300 px-2 py-1 rounded bg-white/4">{ld.title}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{ld.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENT QUOTE / SOCIAL PROOF */}
      <section className="py-12 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="rounded-2xl bg-white/3 p-8 backdrop-blur-sm border border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="text-sm text-pink-300 font-semibold mb-2">Trusted by exporters & finance teams</div>
              <blockquote className="text-gray-300 italic text-lg">“Finocos transformed our export reporting — automation reduced manual effort by 60% and improved accuracy significantly.”</blockquote>
              <div className="mt-3 text-sm text-gray-400">— Finance Head, Export House</div>
            </div>

            <div className="flex gap-3">
              <Link to="/case-studies" className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-500 rounded-md text-white">
                See Case Studies <FiChevronRight />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-md text-white/90">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-r from-red-700 to-pink-500 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Join our journey — build the future of export automation</h3>
              <p className="text-white/90">Partner with us for compliance-first automation that delivers measurable impact.</p>
            </div>

            <div className="flex gap-3">
              <Link to="/careers" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-pink-600 rounded-md font-semibold shadow">
                Careers
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 rounded-md text-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/6">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Finocos. All rights reserved.</div>
            <div className="text-xs text-gray-500 mt-1">Finocos — Export automation • Assurance • Advisory</div>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:hello@finocos.com" className="text-gray-300 hover:text-white">hello@finocos.com</a>
            <a href="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Company;
