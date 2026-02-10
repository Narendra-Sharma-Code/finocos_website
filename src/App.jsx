import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import Assurance from './pages/Assurance';
import Advisory from './pages/Advisory';
import Automation from './pages/Automation';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <main className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="assurance" element={<Assurance />} />
            <Route path="advisory" element={<Advisory />} />
            <Route path="automation" element={<Automation />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/blog" element={<Blog />} />
            <Route path="company" element={<Company />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            {/* Add a catch-all route that redirects to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
