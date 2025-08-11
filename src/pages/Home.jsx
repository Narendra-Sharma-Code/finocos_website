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
        <source src="/bg.mp4" type="video/mp4" />
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
                  Transforming Business with Technology
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
                  Innovative solutions for the digital age. We help businesses thrive through technology and automation.
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

          {/* Our Leaders Section */}
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Leaders</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Meet the visionary minds driving innovation and excellence at our company</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Leader 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">AR</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">Akash Rai</h3>
                    <p className="text-blue-300 mb-4">CEO & Founder</p>
                    <p className="text-gray-300 text-sm">Visionary leader with 15+ years of experience in technology and business strategy.</p>
                  </div>
                </motion.div>

                {/* Leader 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SM</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">Simon Majumdar</h3>
                    <p className="text-blue-300 mb-4">CEO & Founder</p>
                    <p className="text-gray-300 text-sm">Visionary leader with 15+ years of experience in technology and business strategy..</p>
                  </div>
                </motion.div>

                {/* Leader 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-900/50 to-emerald-900/50 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">RS</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">Ronak Shah</h3>
                    <p className="text-blue-300 mb-4">CTO</p>
                    <p className="text-gray-300 text-sm">Operational excellence leader with expertise in scaling businesses globally.</p>
                  </div>
                </motion.div>

                {/* Leader 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">Em</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">Empty</h3>
                    <p className="text-blue-300 mb-4">Empty</p>
                    <p className="text-gray-300 text-sm">Empty</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
