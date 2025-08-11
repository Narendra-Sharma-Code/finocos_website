import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiVideo, FiDownload, FiCalendar, FiHeadphones } from 'react-icons/fi';

const Resources = () => {
  const resourceTypes = [
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Guides & E-books",
      description: "Comprehensive guides and e-books on industry best practices.",
      count: "12+ Resources"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Whitepapers",
      description: "In-depth analysis and research on emerging trends.",
      count: "8+ Papers"
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Webinars",
      description: "Recorded sessions from industry experts and thought leaders.",
      count: "15+ Recordings"
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: "Templates",
      description: "Ready-to-use templates for various business needs.",
      count: "20+ Templates"
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Events",
      description: "Upcoming and past events, conferences, and workshops.",
      count: "5+ Upcoming"
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "Podcasts",
      description: "Insightful conversations with industry leaders.",
      count: "10+ Episodes"
    }
  ];

  const featuredResources = [
    {
      title: "The Future of Business Automation",
      type: "Whitepaper",
      description: "Explore how automation is transforming industries and what it means for your business.",
      image: "/src/assets/featured-1.jpg"
    },
    {
      title: "Digital Transformation Playbook",
      type: "Guide",
      description: "Step-by-step guide to successfully implementing digital transformation in your organization.",
      image: "/src/assets/featured-2.jpg"
    },
    {
      title: "AI in Financial Services",
      type: "Webinar",
      description: "Learn how AI is revolutionizing the financial services industry from leading experts.",
      image: "/src/assets/featured-3.jpg"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white pt-24 pb-16 px-4"
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
            className="inline-block p-3 bg-amber-500/20 rounded-full mb-6"
          >
            <FiBookOpen className="text-4xl text-amber-400" />
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Access our library of guides, whitepapers, webinars, and more to stay ahead in your industry
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {resourceTypes.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-amber-400 mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
              <p className="text-gray-300 mb-3">{resource.description}</p>
              <span className="text-sm text-amber-400">{resource.count}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="h-48 bg-amber-500/20 flex items-center justify-center">
                  <div className="text-4xl text-amber-400">{resource.type === 'Webinar' ? <FiVideo /> : <FiFileText />}</div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-amber-400">{resource.type}</span>
                  <h3 className="text-xl font-semibold mb-2 mt-1 text-white">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <button className="text-amber-400 hover:text-amber-300 font-medium flex items-center">
                    View Resource <FiDownload className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and never miss new resources, insights, and company updates.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resources;
