import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiDatabase, FiCloud, FiLayers, FiZap } from 'react-icons/fi';

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
      <source src="/automation.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
  </div>
);

const Automation = () => {
  const features = [
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation solutions."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "RPA Solutions",
      description: "Implement Robotic Process Automation to reduce manual effort and errors."
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across your business applications."
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Automation",
      description: "Automate cloud infrastructure and deployment processes for efficiency."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Design and implement custom workflow automation for your business needs."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate complex decision-making processes."
    }
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      <div className="relative flex-1">
        <VideoBackground />
        <div className="relative z-10 flex flex-col h-full">
          <div className="container mx-auto max-w-6xl px-4 py-24 flex-1">
            <div className="text-center mb-16">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block p-3 bg-cyan-500/20 rounded-full mb-6"
              >
                <FiZap className="text-4xl text-cyan-400" />
              </motion.div>
              <motion.h1 
                className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Automation Solutions
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transform your business with intelligent automation and digital transformation
              </motion.p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Automation Solutions?</h2>
              <div className="space-y-6">
                {[
                  "Reduced operational costs and increased efficiency",
                  "Minimized human errors and improved accuracy",
                  "24/7 operation without fatigue or downtime",
                  "Scalable solutions that grow with your business",
                  "Seamless integration with existing systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Get Started with Automation</h3>
              <p className="text-gray-300 mb-6">Ready to transform your business with automation? Schedule a free consultation with our experts.</p>
              <motion.button
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Your Consultency
              </motion.button>
            </motion.div>
          </div>
          {/* Footer Spacer - ensures content doesn't hide behind footer */}
          <div className="h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
