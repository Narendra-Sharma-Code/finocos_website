import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiFileText, FiVideo, FiDownload, FiCalendar, FiHeadphones, FiArrowRight, FiLayers } from 'react-icons/fi';

const Resources = () => {
  const resourceTypes = [
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Trade & Compliance Guides",
      description: "Practical guides for export realisation, documentation, and audit-ready processes.",
      count: "Guides"
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Checklists & Playbooks",
      description: "Ready-to-use checklists for eBRC, EDPMS closure, reconciliations, and controls.",
      count: "Playbooks"
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Webinars",
      description: "Short sessions on governance, assurance, finance cost validation, and automation.",
      count: "Recordings"
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: "Templates",
      description: "Templates for trackers, reconciliations, and internal reporting (MIS).",
      count: "Templates"
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Events",
      description: "Upcoming sessions, workshops, and partner webinars.",
      count: "Updates"
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "Podcasts",
      description: "Conversations on compliance, operations, and automation trends.",
      count: "Episodes"
    }
  ];

  const featuredResources = [
    {
      title: "Export-to-Realisation Governance: eBRC + EDPMS",
      type: "Guide",
      description: "A practical framework to maintain traceability, closure discipline, and audit-ready records."
    },
    {
      title: "Finance Cost Validation: What to Check Every Month",
      type: "Checklist",
      description: "Spot benchmark issues, spreads, charges, and rate transmission gaps before they hit the P&L."
    },
    {
      title: "Automation for Trade Ops: Where to Start",
      type: "Webinar",
      description: "Identify high-impact automations across compliance, reporting and repetitive operational work."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-24 pb-16 px-4"
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
            className="inline-block p-3 bg-cyan-500/15 rounded-full mb-6 border border-white/10"
          >
            <FiBookOpen className="text-4xl text-cyan-200" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-cyan-200"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Resources
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Practical insights and assets around trade governance, compliance assurance, finance cost validation, and automation — designed for operators and finance teams.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md text-white font-semibold shadow hover:scale-[1.02] transition-transform"
            >
              Read the Blog
              <FiArrowRight />
            </Link>
            <Link
              to="/resources/case-studies"
              className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-md text-white/90 hover:bg-white/5 transition"
            >
              View Case Studies
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {resourceTypes.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-cyan-300 mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
              <p className="text-gray-300 mb-3">{resource.description}</p>
              <span className="text-sm text-cyan-200/80">{resource.count}</span>
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
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                  <div className="text-4xl text-cyan-300">{resource.type === 'Webinar' ? <FiVideo /> : <FiFileText />}</div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-cyan-300">{resource.type}</span>
                  <h3 className="text-xl font-semibold mb-2 mt-1 text-white">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Link
                    to="/contact"
                    className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center"
                  >
                    Request Access <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 text-center"
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
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 whitespace-nowrap"
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
