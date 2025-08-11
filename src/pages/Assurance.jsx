import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';

const Assurance = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-24 pb-16 px-4"
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
            className="inline-block p-3 bg-blue-500/20 rounded-full mb-6"
          >
            <FiShield className="text-4xl text-blue-400" />
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Assurance Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive risk management and assurance solutions to protect your business
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Risk Assessment",
              description: "Identify and mitigate potential risks to your business operations."
            },
            {
              title: "Compliance",
              description: "Ensure adherence to industry regulations and standards."
            },
            {
              title: "Internal Audit",
              description: "Comprehensive audit services to improve business processes."
            },
            {
              title: "IT Security",
              description: "Protect your digital assets with our security expertise."
            },
            {
              title: "Fraud Prevention",
              description: "Proactive measures to detect and prevent fraudulent activities."
            },
            {
              title: "Business Continuity",
              description: "Prepare and protect your business from potential disruptions."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4 text-blue-400">0{index + 1}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Assurance;
