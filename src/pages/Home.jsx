// src/pages/Home.jsx
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, 
  FiZap, 
  FiShield, 
  FiTrendingUp, 
  FiCloud,
  FiCpu,
  FiLayers,
  FiCode,
  FiFileText,
  FiSearch,
  FiActivity,
  FiBarChart2
} from 'react-icons/fi';

const Home = () => {
  const heroRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useScroll targeted to heroRef so progress is only for the hero area
  const { scrollYProgress } = useScroll({
    target: heroRef,
    // offsets control start/end mapping — tweak if needed
    offset: ["start start", "end start"]
  });

  // map the progress to a subtle Y translation for parallax (px)
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // --- Data arrays (unchanged from your version) ---
  const trendingFeatures = [
    { icon: <FiTrendingUp className="w-7 h-7" />, title: 'Union Budget: Export & Working Capital Impact', description: 'We track policy and tax updates to help finance teams anticipate changes in incentives, duties, and cash-flow planning.', gradient: 'from-blue-600 to-indigo-700', delay: 0.1 },
    { icon: <FiShield className="w-7 h-7" />, title: 'Compliance-First Automation', description: 'Stronger controls, audit trails, and validation are becoming non-negotiable for exporters and regulated workflows.', gradient: 'from-emerald-600 to-teal-700', delay: 0.2 },
    { icon: <FiFileText className="w-7 h-7" />, title: 'Document Digitisation (eBRC, Invoices, Advices)', description: 'Faster processing depends on clean, structured data—OCR and AI extraction are accelerating end-to-end automation.', gradient: 'from-violet-600 to-purple-700', delay: 0.3 },
    { icon: <FiBarChart2 className="w-7 h-7" />, title: 'Real-Time MIS for Finance Operations', description: 'CFOs are shifting from periodic reporting to live dashboards for collections, closures, exceptions, and performance.', gradient: 'from-cyan-600 to-sky-600', delay: 0.4 }
  ];

  const caseStudies = [
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: 'AI-Powered PDF Extraction',
      description: 'Extract structured data from invoices, shipping documents, and statements using AI-driven document understanding.',
      impact: 'Automates data capture with higher accuracy and faster turnaround',
      gradient: 'from-cyan-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Edge Computing',
      description: 'Enable distributed processing closer to the source for time-sensitive workflows and on-prem environments.',
      impact: 'Faster processing with reduced latency through distributed computing',
      gradient: 'from-amber-500 to-orange-600',
      delay: 0.15
    },
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: 'OCR for Scanned PDFs',
      description: 'Convert scanned documents into searchable, machine-readable text to unlock automation across legacy paperwork.',
      impact: 'Improves downstream processing for compliance, audit, and MIS',
      gradient: 'from-emerald-500 to-teal-600',
      delay: 0.2
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Large Excel Model Automation',
      description: 'Handle large spreadsheets and complex reconciliation models with scalable processing and robust validation.',
      impact: 'Reduces manual effort for heavy Excel-based operations',
      gradient: 'from-violet-600 to-purple-700',
      delay: 0.25
    },
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: 'Real-Time Analytics',
      description: 'Track KPIs as they move with live dashboards, alerts, and drill-down views across your workflows.',
      impact: 'Enables faster decisions with near real-time visibility',
      gradient: 'from-blue-600 to-indigo-700',
      delay: 0.3
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: 'Simulation & Forecasting',
      description: 'Model scenarios and forecast outcomes to plan capacity, costs, and operational performance with confidence.',
      impact: 'Supports proactive planning with scenario-based insights',
      gradient: 'from-pink-600 to-rose-600',
      delay: 0.35
    }
  ];

  const services = [
    { icon: <FiCpu className="w-7 h-7" />, title: 'Optimized Solution', description: 'Cutting-edge AI solutions tailored to your business needs', gradient: 'from-blue-500 to-cyan-400' },
    { icon: <FiShield className="w-7 h-7" />, title: 'Audit & Compliance', description: 'Compliance-first reviews, controls, and reporting to strengthen governance and reduce operational risk.', gradient: 'from-purple-500 to-pink-500' },
    { icon: <FiCode className="w-7 h-7" />, title: 'Custom Development', description: 'Tailored software solutions for your unique requirements', gradient: 'from-green-500 to-emerald-400' }
  ];

  // variants for text reveal
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } }
  };
  const fadeUp = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col scroll-smooth bg-black">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
        {/* Video container — only inside the hero */}
        <motion.div
          style={{ y: videoY }}
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
        >
          {/* optional decorative blobs */}
          <div
            className="absolute -left-40 -top-20 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(6,182,212,0.12))' }}
          />
          <div
            className="absolute -right-40 -bottom-24 w-80 h-80 rounded-full blur-3xl opacity-16"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.14), rgba(96,165,250,0.10))' }}
          />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
            style={{ transform: 'scale(1.02)' }} // tiny scale avoids micro letterbox
          >
            <source src="/homebg.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/8 to-black/24" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                <span className="block">More Than Automation</span>
                <span className="block mt-2 sm:mt-3">Your Partner in Business Evolution</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
                With technology at our core, and audits & MIS in our toolkit, we help you see further, act faster, and achieve more.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group inline-flex items-center justify-center w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-350 transform-gpu hover:-translate-y-1 shadow-md text-sm sm:text-base"
                    aria-label="Explore Our Offerings"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    Explore Our Offerings
                    <FiArrowRight className={`ml-2 sm:ml-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : 'group-hover:translate-x-1 sm:group-hover:translate-x-2'} flex-shrink-0`} />
                  </button>

                  <div 
                    className={`absolute z-20 mt-2 sm:mt-3 w-full sm:w-56 origin-top sm:origin-top-left rounded-md bg-gray-800/90 shadow-lg ring-1 ring-black/10 focus:outline-none transition-all duration-200 transform ${
                      isDropdownOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    } left-0 right-0 sm:right-auto backdrop-blur-sm`}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        to="/advisory" 
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Advisory Services
                      </Link>
                      <Link 
                        to="/assurance" 
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Assurance Services
                      </Link>
                      <Link 
                        to="/automation" 
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Automation Solutions
                      </Link>
                    </div>
                  </div>
                </div>

                <Link to="/company" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-white/20 hover:bg-white/6 text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                  Learn About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-black/60">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h2 
              initial={{ y: 12, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }} 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Trending Now
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: 0.1 }} 
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0"
            >
              Explore the cutting-edge technologies shaping tomorrow's business landscape
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trendingFeatures.map((feature, index) => (
              <motion.article 
                key={index} 
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/8 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500" 
                initial={{ y: 20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ delay: feature.delay }}
              >
                <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br ${feature.gradient} w-max mb-3 sm:mb-4 shadow-lg`}>
                  {React.cloneElement(feature.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/5 to-black/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h2 
              initial={{ y: 12, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }} 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500"
            >
              Advanced Capabilities in Action
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: 0.1 }} 
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0"
            >
              Professional-grade automation and analytics designed for modern finance and operations teams
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-white/10 bg-gradient-to-br from-white/4 to-white/2 backdrop-blur-sm hover:shadow-2xl hover:border-white/20 transition-all duration-500" 
                initial={{ y: 24, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ delay: study.delay }}
              >
                <div className="flex items-start justify-between gap-4 mb-4 sm:mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${study.gradient} text-white shadow-lg`}>
                      {React.cloneElement(study.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">{study.title}</h3>
                      <div className={`h-1 w-10 sm:w-12 mt-2 rounded-full bg-gradient-to-r ${study.gradient}`} />
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{study.description}</p>

                <div className="rounded-lg border border-white/10 bg-black/20 px-3.5 py-2.5">
                  <div className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wide">Key Benefit</div>
                  <div className="text-xs sm:text-sm font-medium text-cyan-300 mt-1">{study.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-black/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h2 
              initial={{ y: 12, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }} 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Our Offerings
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: 0.1 }} 
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0"
            >
              Comprehensive technology solutions for your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/8 bg-white/3 backdrop-blur-sm hover:shadow-2xl transition-all duration-500" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: index * 0.09 }}
              >
                <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br ${service.gradient} w-max mb-3 sm:mb-4 shadow-md`}>
                  {React.cloneElement(service.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / COMPANY */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/3 to-black/12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-10 md:mb-12" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
              About Finocos
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
              Empowering businesses with innovative solutions and strategic insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              className="bg-white/3 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-white/8 hover:border-blue-500/40 transition-all duration-300 h-full" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                To be the global leader in delivering innovative technology solutions that transform businesses and drive sustainable growth.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-4 sm:my-6" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                We empower organizations to achieve their full potential through cutting-edge technology, strategic insights, and exceptional service.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/3 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-white/8 hover:border-blue-500/40 transition-all duration-300 h-full" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">By The Numbers</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { label: 'Years of Service', value: '5+' },
                  { label: 'Client Retention', value: '95%' },
                  { label: 'Excess Finance Costs Identified', value: 'Rs. 65 Crores+' },
                  { label: 'Excesses Refunded by Banks', value: 'Rs. 52 Crores+' },
                  { label: 'EIDPMS Cases Closed with RBI', value: '3000+' },
                  { label: "eBRC's Generated", value: '2000+' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-14 h-10 sm:w-16 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 px-2">
                      <span className="text-blue-400 font-bold text-[11px] sm:text-xs text-center leading-tight">{stat.value}</span>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/3 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-white/8 hover:border-blue-500/40 transition-all duration-300 h-full" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Why Choose Us</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Proven track record of success",
                  "Industry-leading expertise",
                  "Customized solutions",
                  "24/7 dedicated support",
                  "Competitive pricing",
                  "Cutting-edge technology"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link 
              to="/company" 
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 w-full sm:w-auto"
            >
              Learn More About Us
              <FiArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
