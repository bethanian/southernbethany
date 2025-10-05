import React from 'react';
import { StarIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [containerRef, isVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.3 });

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[70vh] sm:min-h-[90vh] flex items-center">
      {/* Background image with vignette effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/80 z-10"></div>
        <img 
          src="/stockphotos/studentwavingthephilippineflag.jpg" 
          alt="Students at Southern Bethany Christian School" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24">
        <div className={`max-w-2xl animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4 sm:mb-6">
            Building a Foundation for a Life of <em className="italic text-brand-accent">Purpose</em>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg mb-6 sm:mb-8">
            Fostering academic excellence, spiritual growth, and character development to prepare students for a life of service and leadership.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={scrollToFAQ}
              className="bg-brand-accent text-white px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base sm:text-base">
              Learn More
            </button>
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg flex-shrink-0">
              <div className="flex text-brand-accent items-center">
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-white font-bold ml-1 sm:ml-2 text-sm sm:text-base">5.0</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 mt-1">from 120+ reviews</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;