// import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import KeyPersons from './pages/KeyPersons';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('usa-theme');
    if (stored) return stored === 'dark';
    // Default: match system
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
    localStorage.setItem('usa-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggleTheme = () => setIsDarkMode((d) => !d);

  return (
    <Router>
      <Navbar onToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/key-persons" element={<KeyPersons />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="text-center py-4 border-top border-secondary mt-5">
        <small>&copy; 2025 United Supply Agency. All rights reserved.</small>
      </footer>
    </Router>
  );
}

export default App;
