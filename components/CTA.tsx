import React from 'react';
import { SparkleIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA: React.FC<{ setCurrentPage?: (page: string) => void }> = ({ setCurrentPage }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.4 });
    
    const handleInquireClick = () => {
        if (setCurrentPage) {
            setCurrentPage('apply');
        }
    };
    
    return (
        <section id="admissions" ref={ref} className="py-10 px-6 md:px-12 lg:px-24">
            <div className={`container mx-auto bg-animated-gradient text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden animate-on-scroll zoom-in ${isVisible ? 'is-visible' : ''}`}>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Join the Southern Bethany Family
                    </h2>
                    <p className="mt-4 max-w-md text-slate-300">
                        Discover a nurturing community dedicated to helping you achieve your full potential.
                    </p>
                    <button 
                        onClick={handleInquireClick}
                        className="mt-8 bg-brand-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                        Inquire Today
                    </button>
                </div>
                <div className="relative z-10 mt-8 md:mt-0 flex items-center justify-center">
                    <div className="absolute -top-16 -right-16 text-brand-accent opacity-20">
                        <SparkleIcon className="w-48 h-48" />
                    </div>
                    <div className="w-64 h-48 bg-brand-bg-light rounded-2xl transform -rotate-6 p-2">
                        <img src="https://picsum.photos/id/1078/300/200" alt="Happy students" className="rounded-lg object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;