import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/Values';
import StudentLife from './components/StudentLife';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StatsBanner from './components/StatsBanner';
import Apply from './components/Apply';

const Loader: React.FC = () => (
  <div className="loader-container">
    <div className="loader-spinner"></div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simulate loading time for a smoother perceived experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'apply':
        return <Apply />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Features />
            <Values />
            <StudentLife />
            <StatsBanner />
            <Testimonials />
            <FAQ />
            <CTA setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-brand-bg-light font-sans text-brand-dark overflow-x-hidden">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header setCurrentPage={setCurrentPage} />
      <main id="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;