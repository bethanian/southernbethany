import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StatsBanner: React.FC = () => {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.4 });
    const parallaxRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const speed = -0.2;
                // Only apply parallax when element is in viewport
                if (top < window.innerHeight && top > -height) {
                    const yPos = Math.max(Math.min((top - window.innerHeight / 2) * speed, 0), -height * 0.1);
                    if (parallaxRef.current) {
                        parallaxRef.current.style.transform = `translateY(${yPos}px)`;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRef]);


    return (
        <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto rounded-3xl bg-emerald-950 text-white p-12 md:p-20 relative overflow-hidden">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{backgroundImage: "url('/stockphotos/photoofteachers.jpg')", willChange: 'transform' }}
                ></div>
                <div className={`relative z-10 grid md:grid-cols-2 gap-8 items-center animate-on-scroll fade-in ${isVisible ? 'is-visible' : ''}`}>
                    <div>
                        <div className="flex flex-col sm:flex-row items-baseline space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
                            <h3 className="text-6xl md:text-8xl font-bold">32+</h3>
                            <h3 className="text-6xl md:text-8xl font-bold text-slate-400">15+</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row items-baseline space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 mt-4">
                            <p className="text-lg text-slate-300">Extracurricular Activities</p>
                            <p className="text-lg text-slate-300">Sports Teams</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-emerald-300 font-semibold">STUDENT LIFE</p>
                        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                            Holistic Development Beyond Academics
                        </h2>
                        <p className="text-lg text-slate-300 mt-4 max-w-lg">
                            We believe in nurturing the whole child through diverse programs that foster leadership, creativity, and community engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;