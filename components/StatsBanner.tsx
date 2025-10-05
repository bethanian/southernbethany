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
                // Start effect when section is in view, stop when it's out
                if (top < window.innerHeight && top + height > 0) {
                    const yPos = (top - window.innerHeight / 2) * speed;
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
                    style={{backgroundImage: "url('/stockphotos/intramurals13.jpg')", willChange: 'transform' }}
                ></div>
                <div className={`relative z-10 grid md:grid-cols-2 gap-8 items-center animate-on-scroll fade-in ${isVisible ? 'is-visible' : ''}`}>
                    <div>
                        <div className="flex flex-col sm:flex-row items-baseline space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
                            <h3 className="text-6xl md:text-8xl font-bold">25+</h3>
                            <h3 className="text-6xl md:text-8xl font-bold text-slate-400">98%</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row items-baseline space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 mt-4">
                            <p className="text-lg text-slate-300">Years of Excellence</p>
                            <p className="text-lg text-slate-300">University Placement Rate</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-emerald-300 font-semibold">SCHOOL STATISTICS</p>
                        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                            Building Leaders for Tomorrow
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
