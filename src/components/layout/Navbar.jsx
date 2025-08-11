import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      dropdownItems: []
    },
    {
      name: 'Services',
      path: '#',
      dropdownItems: [
        { 
          name: 'Assurance', 
          path: '/assurance',
          description: 'Comprehensive audit and compliance solutions',
          icon: '🛡️'
        },
        { 
          name: 'Advisory', 
          path: '/advisory',
          description: 'Strategic business and financial consulting',
          icon: '💼'
        },
        { 
          name: 'Automation', 
          path: '/automation',
          description: 'Innovative technology solutions',
          icon: '⚙️'
        }
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdownItems: [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'Case Studies', path: '/resources/case-studies' },
        { name: 'Whitepapers', path: '/resources/whitepapers' }
      ]
    },
    { 
      name: 'Company', 
      path: '/company',
      dropdownItems: [
        { name: 'About Us', path: '/company/about' },
        { name: 'Careers', path: '/company/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle hover for dropdowns
  const handleMouseEnter = (link) => {
    if (link.dropdownItems && link.dropdownItems.length > 0) {
      setActiveDropdown(link.path);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Handle click to navigate
  const handleNavItemClick = (link) => {
    setActiveDropdown(null);
    navigate(link.path);
  };

  return (
    <header 
      ref={dropdownRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg py-2 backdrop-blur-sm' : 'bg-black/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img 
              src={logo}
              alt="Finocos Logo"
              className="h-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  onClick={() => handleNavItemClick(link)}
                  className={`relative px-2 py-1 text-lg font-medium transition-colors flex items-center ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : scrolled 
                        ? 'text-gray-700 hover:text-primary/80' 
                        : 'text-white hover:text-primary/80'
                  }`}
                >
                  {link.name}
                  {link.dropdownItems && link.dropdownItems.length > 0 && (
                    <svg 
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === link.path ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdownItems && link.dropdownItems.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === link.path && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 rounded-xl shadow-2xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {link.name === 'Services' ? (
                            <div className="grid gap-2">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="group flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="text-2xl mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </span>
                                  <div>
                                    <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                      {item.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="py-1">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-gray-100"
          > 
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-lg font-medium ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-dark hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
