import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiBarChart2, FiLayers, FiUsers, FiGlobe } from 'react-icons/fi';

const Advisory = () => {
  const services = [
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Expert guidance to develop and execute effective business strategies."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Enhance operational efficiency and maximize business performance."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Financial Advisory",
      description: "Comprehensive financial consulting for sustainable growth."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Leverage technology to transform your business operations."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Talent Management",
      description: "Strategies to attract, develop, and retain top talent."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Market Expansion",
      description: "Expert guidance for entering and growing in new markets."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-24 pb-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 bg-purple-500/20 rounded-full mb-6"
          >
            <FiTrendingUp className="text-4xl text-purple-400" />
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Advisory Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Expert guidance to navigate complex business challenges and drive growth
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-purple-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-gray-300 mb-8">Our expert advisors are here to help you navigate the complexities of today's business landscape and unlock new opportunities for growth.</p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Advisory;
