import { Routes, Route, useLocation } from 'react-router-dom';
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
import Resources from './pages/Resources';
import Company from './pages/Company';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

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
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/assurance" element={<Assurance />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
