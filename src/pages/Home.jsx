// src/pages/Home.jsx
import React, { useRef } from 'react';
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
  FiCode
} from 'react-icons/fi';

const Home = () => {
  const heroRef = useRef(null);

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
    { icon: <FiZap className="w-7 h-7" />, title: 'AI-Powered Automation', description: 'Next-gen automation solutions powered by artificial intelligence to transform your business processes.', gradient: 'from-purple-600 to-blue-500', delay: 0.1 },
    { icon: <FiShield className="w-7 h-7" />, title: 'Blockchain Security', description: 'Enterprise-grade blockchain solutions ensuring maximum security and transparency.', gradient: 'from-green-500 to-teal-400', delay: 0.2 },
    { icon: <FiTrendingUp className="w-7 h-7" />, title: 'Quantum Computing', description: 'Harness the power of quantum computing for complex problem-solving.', gradient: 'from-pink-500 to-rose-500', delay: 0.3 },
    { icon: <FiCloud className="w-7 h-7" />, title: 'Edge Computing', description: 'Faster processing with reduced latency through distributed computing.', gradient: 'from-amber-500 to-orange-500', delay: 0.4 }
  ];

  const caseStudies = [
    { title: 'Global Bank Digital Transformation', description: 'Enabled 40% faster transaction processing and 99.99% uptime for a leading global bank.', impact: '200% ROI within first year', gradient: 'from-blue-600 to-indigo-700', delay: 0.1 },
    { title: 'Healthcare Data Revolution', description: 'Secured and streamlined patient data management for a healthcare network serving 2M+ patients.', impact: '70% reduction in data processing time', gradient: 'from-emerald-600 to-teal-700', delay: 0.2 },
    { title: 'Retail Supply Chain Optimization', description: 'AI-driven inventory management system reducing waste by 35% for a retail giant.', impact: '25% increase in supply chain efficiency', gradient: 'from-violet-600 to-purple-700', delay: 0.3 }
  ];

  const services = [
    { icon: <FiCpu className="w-7 h-7" />, title: 'Optimized Solution', description: 'Cutting-edge AI solutions tailored to your business needs', gradient: 'from-blue-500 to-cyan-400' },
    { icon: <FiLayers className="w-7 h-7" />, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for your business', gradient: 'from-purple-500 to-pink-500' },
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
                <div className="relative group w-full sm:w-auto">
                  <Link
                    to="/offerings"
                    className="inline-flex items-center justify-center w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-350 transform-gpu group-hover:-translate-y-1 shadow-md text-sm sm:text-base"
                    aria-label="Explore Our Offerings"
                  >
                    Explore Our Offerings
                    <FiArrowRight className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2 flex-shrink-0" />
                  </Link>

                  <div className="absolute z-20 mt-2 sm:mt-3 w-full sm:w-56 origin-top sm:origin-top-left rounded-md bg-gray-800/90 shadow-lg ring-1 ring-black/10 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0 left-0 right-0 sm:right-auto">
                    <div className="py-1">
                      <Link to="/advisory" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left">Advisory Services</Link>
                      <Link to="/assurance" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left">Assurance Services</Link>
                      <Link to="/automation" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors text-center sm:text-left">Automation Solutions</Link>
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
              Impact Case Studies
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: 0.1 }} 
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0"
            >
              Real-world transformations powered by our innovative solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/7 bg-white/2 backdrop-blur-sm hover:shadow-2xl transition-all duration-500" 
                initial={{ y: 24, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ delay: study.delay }}
              >
                <div className={`h-1.5 w-10 sm:w-12 mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${study.gradient}`}></div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{study.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{study.description}</p>
                <div className="flex items-center text-xs sm:text-sm font-medium text-cyan-400">
                  <span className="mr-1.5">🚀</span>
                  <span>{study.impact}</span>
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

      {/* CTA SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/10 to-black/30">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-center" 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Join the ranks of industry leaders who trust our expertise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
              >
                Get Started
                <FiArrowRight className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                to="/company" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-medium text-white bg-transparent hover:bg-white/5 border border-white/20 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
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
                  { label: 'Years of Excellence', value: '10+' }, 
                  { label: 'Dedicated Professionals', value: '120+' }, 
                  { label: 'Major Clients', value: '60+' }, 
                  { label: 'Client Retention', value: '95%' } 
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-blue-400 font-bold text-sm sm:text-base">{stat.value}</span>
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
