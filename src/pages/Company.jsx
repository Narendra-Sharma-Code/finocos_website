import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiMapPin, FiGlobe, FiHeart, FiTrendingUp } from 'react-icons/fi';

const Company = () => {
  const stats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: "50+",
      label: "Clients Worldwide"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience"
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      value: "5",
      label: "Global Offices"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: "200+",
      label: "Team Members"
    }
  ];

  const values = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Collaboration",
      description: "We believe in working together to achieve extraordinary results."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Integrity",
      description: "We do what's right, even when no one is watching."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace change and continuously seek better solutions."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white pt-24 pb-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 bg-red-500/20 rounded-full mb-6"
          >
            <FiGlobe className="text-4xl text-red-400" />
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Finocos
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Empowering businesses with innovative solutions and strategic insights to drive growth and transformation
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="text-red-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2008, Finocos began as a small consulting firm with a vision to transform businesses through technology and innovation. 
                What started as a team of passionate professionals has grown into a global organization with a presence across multiple continents.
              </p>
              <p>
                Over the years, we've helped hundreds of clients navigate complex business challenges, implement cutting-edge solutions, 
                and achieve sustainable growth in an ever-evolving digital landscape.
              </p>
              <p>
                Our commitment to excellence, integrity, and client success has been the driving force behind our journey, and we continue to push 
                boundaries to deliver exceptional value to our clients worldwide.
              </p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
            <div className="aspect-w-16 aspect-h-9 bg-red-500/20 rounded-lg flex items-center justify-center h-64">
              <FiGlobe className="text-6xl text-red-400" />
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-red-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Leaders */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leader 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AR</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">Akash Rai</h3>
                <p className="text-red-300 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm">Visionary leader with 15+ years of experience in technology and business strategy.</p>
              </div>
            </motion.div>

            {/* Leader 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">SM</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">Simon Majumdar</h3>
                <p className="text-red-300 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm">Visionary leader with 15+ years of experience in technology and business strategy.</p>
              </div>
            </motion.div>

            {/* Leader 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-cyan-900/50 to-emerald-900/50 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">RS</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">Ronak Shah</h3>
                <p className="text-red-300 mb-4">CTO</p>
                <p className="text-gray-300 text-sm">Operational excellence leader with expertise in scaling businesses globally.</p>
              </div>
            </motion.div>

            {/* Leader 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">Em</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">Empty</h3>
                <p className="text-red-300 mb-4">Empty</p>
                <p className="text-gray-300 text-sm">Empty</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Company;
