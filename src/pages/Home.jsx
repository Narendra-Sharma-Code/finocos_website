import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';

const Home = () => {
  // Video background component
  const VideoBackground = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/homebg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>
  );
  
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Rapid deployment of automation solutions to accelerate your business processes.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and operations.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized solutions that deliver exceptional speed and efficiency.'
    }
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      <div className="relative flex-1">
        <VideoBackground />
        <div className="relative z-10 flex flex-col h-full">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="container mx-auto max-w-6xl px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  More Than Automation 
                  <br />
                  Your Partner in Business Evolution
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
                  With technology at our core, and audits & MIS in our toolkit, we help you see further, act faster, and achieve more.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/assurance" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Explore Our Services <FiArrowRight className="inline-block" />
                  </Link>
                  <Link 
                    to="/company" 
                    className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Learn About Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/80">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-400 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Details Section */}
          <section className="py-20 bg-gradient-to-b from-gray-900/80 to-black">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  About Finocos
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Empowering businesses with innovative solutions and strategic insights
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Company Overview */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    To be the global leader in delivering innovative technology solutions that transform businesses and drive sustainable growth.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-6"></div>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300">
                    We empower organizations to achieve their full potential through cutting-edge technology, strategic insights, and exceptional service.
                  </p>
                </motion.div>

                {/* Key Stats */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-6">By The Numbers</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Years of Excellence' },
                      { label: 'Dedicated Professionals' },
                      { label: 'Major Clients' },
                      { value: '98%', label: 'Client Retention Rate' }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                          <span className="text-blue-400 font-bold">{stat.value}</span>
                        </div>
                        <span className="text-gray-300">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-6">Why Choose Us</h3>
                  <ul className="space-y-4">
                    {[
                      "Proven track record of success",
                      "Industry-leading expertise",
                      "Customized solutions",
                      "24/7 dedicated support",
                      "Competitive pricing",
                      "Cutting-edge technology"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <Link 
                  to="/company" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Learn More About Us
                  <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
