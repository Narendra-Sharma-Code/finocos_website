import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Import company logos
import pic1 from '../../img_vid_static/Picture1.png';
import pic2 from '../../img_vid_static/Picture2.png';
import pic3 from '../../img_vid_static/Picture3.png';
import pic4 from '../../img_vid_static/Picture4.png';
import pic5 from '../../img_vid_static/Picture5.png';
import pic6 from '../../img_vid_static/Picture6.png';
import pic7 from '../../img_vid_static/Picture7.png';
import pic8 from '../../img_vid_static/Picture8.png';
import pic9 from '../../img_vid_static/Picture9.png';
import pic10 from '../../img_vid_static/Picture10.png';

const Testimonials = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote: "A long-pending import payment, stuck for over five years, was successfully closed with RBI approval through Finocos' structured compliance and bank coordination approach.",
      name: "Mr. Jignesh Mangukiya",
      title: "CFO - Mahendra Brothers",
      image: pic1,
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      quote: "Over 50 long-pending EDPMS cases were successfully closed with Finocos' support, and the team now assists us with live eBRC generation on an ongoing basis.",
      name: "Mr. Brajesh Kabra",
      title: "GM - KGK Creations",
      image: pic8,
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      quote: "My expectations with Finocos Global Team have risen after their first execution. I believe they can tread through areas which are yet untouched and needs improvisation",
      name: "Mr. Nipun Kothari",
      title: "Director - Azure Jouel",
      image: pic9,
      color: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      quote: "At Finocos Global, you will be served with a deep check of your finance charges. Their execution is very thorough",
      name: "Mr. Anuj Jain",
      title: "CFO – Viraj Profiles",
      image: pic2,
      color: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-200'
    },
    {
      id: 5,
      quote: "Finocos Global is a young team with great potential to explore the areas along with recommendations for process integration and cost reduction strategies",
      name: "Mr. Ravi Khapate",
      title: "CFO – Shriraj Jewels",
      image: pic3,
      color: 'from-indigo-500/10 to-blue-500/10',
      borderColor: 'border-indigo-200'
    }
  ];

  const workingWith = [
    { id: 1, image: pic1, name: 'Company 1' },
    { id: 2, image: pic2, name: 'Company 2' },
    { id: 3, image: pic3, name: 'Company 3' },
    { id: 4, image: pic4, name: 'Company 4' },
    { id: 5, image: pic5, name: 'Company 5' },
    { id: 6, image: pic6, name: 'Company 6' },
    { id: 7, image: pic7, name: 'Company 7' },
    { id: 8, image: pic8, name: 'Company 8' },
    { id: 9, image: pic9, name: 'Company 9' },
    { id: 10, image: pic10, name: 'Company 10' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-hidden pt-24 pb-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Success Stories from Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Valued Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Discover how Finocos Global has transformed financial challenges into opportunities for growth and success
            </p>
          </motion.div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
          />
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section
        className="container mx-auto px-4 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`bg-gradient-to-br ${testimonial.color} backdrop-blur-xl border ${testimonial.borderColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer`}>
                
                {/* Quote icon and content */}
                <div className="mb-6">
                  <motion.div
                    animate={{ scale: hoveredCard === testimonial.id ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl text-blue-400 mb-4"
                  >
                    "
                  </motion.div>
                  <p className="text-lg text-slate-200 leading-relaxed mb-6 font-medium">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Bottom section with profile */}
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  {/* Company Logo */}
                  <motion.div
                    animate={{ scale: hoveredCard === testimonial.id ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt="Company Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Profile Info */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-white text-base mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {testimonial.title}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <motion.div
                    animate={{ scale: hoveredCard === testimonial.id ? 1.1 : 1 }}
                    className="flex gap-1"
                  >
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Working With Section */}
      <section className="bg-slate-800/50 backdrop-blur-sm py-20 rounded-3xl mx-4 md:mx-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Partnering with companies across diverse industries
            </p>
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {workingWith.map((company, index) => (
              <motion.div
                key={company.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-xl p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <motion.img
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={company.image}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter hover:drop-shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have entrusted Finocos Global with their most critical financial challenges
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;
