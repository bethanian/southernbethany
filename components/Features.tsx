import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const Features: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });
  const [card1Ref, isCard1Visible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.3 });
  const [card2Ref, isCard2Visible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.3 });
  const [statsRef, areStatsVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.4 });
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  const studentCount = useCountUp(300, 2000, areStatsVisible);
  const successRate = useCountUp(98, 2000, areStatsVisible);

  React.useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
          const { top } = statsRef.current.getBoundingClientRect();
          const speed = -0.2;
          if (top < window.innerHeight && top > -statsRef.current.offsetHeight) {
              const yPos = (top - window.innerHeight / 2) * speed;
              if (parallaxRef.current) {
                  parallaxRef.current.style.transform = `translateY(${yPos}px)`;
              }
          }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsRef]);

  return (
    <section id="academics" className="py-20 px-6 md:px-12 lg:px-24 bg-brand-neutral">
      <div ref={titleRef} className={`container mx-auto text-center animate-on-scroll slide-in-up ${isTitleVisible ? 'is-visible' : ''}`}>
        <p className="font-semibold text-brand-accent">ACADEMICS</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2 max-w-3xl mx-auto">
          Holistic Curriculum & Specialized Tracks
        </h2>
        <p className="mt-4 text-brand-dark opacity-80 max-w-xl mx-auto">
          Our curriculum is integrated with Christian values, emphasizing academic, spiritual, and character development.
        </p>
      </div>

      <div className="container mx-auto mt-16 grid lg:grid-cols-2 gap-8">
        <div ref={card1Ref} className={`bg-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] animate-on-scroll slide-in-left ${isCard1Visible ? 'is-visible' : ''}`}>
          <div>
            <h3 className="text-4xl font-semibold text-brand-dark">
              Integrated Learning
            </h3>
            <p className="mt-4 text-brand-dark opacity-80">
                Biblical principles are woven into every subject, providing a comprehensive education that nurtures both the mind and the soul.
            </p>
          </div>
          <img src="/stockphotos/buwanngwika3.jpg" alt="Students studying during Buwan ng Wika" className="rounded-xl mt-8 object-cover"/>
        </div>

        <div ref={card2Ref} className={`bg-brand-dark text-white p-10 rounded-3xl min-h-[400px] animate-on-scroll slide-in-right ${isCard2Visible ? 'is-visible' : ''}`}>
          <h3 className="text-4xl font-semibold">
            Senior High Tracks
          </h3>
          <p className="mt-4 text-slate-300">
            The school offers both academic and non-academic tracks to prepare students for university education and future careers.
          </p>
          <ul className="mt-8 space-y-4 text-lg">
            <li className="flex items-center">
              <span className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">1</span>
              Humanities and Social Sciences (HUMSS)
            </li>
            <li className="flex items-center">
              <span className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">2</span>
              Science, Technology, Engineering, and Mathematics (STEM)
            </li>
            <li className="flex items-center">
              <span className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">3</span>
              Accountancy, Business, and Management (ABM)
            </li>
            <li className="flex items-center">
              <span className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">4</span>
              Technical-Vocational-Livelihood - Information and Communications Technology (TVL-ICT)
            </li>
            <li className="flex items-center">
              <span className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">5</span>
              Technical-Vocational-Livelihood - Home Economics (TVL-HE)
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Banner Section */}
      <div ref={statsRef} className="container mx-auto mt-20">
        <div className={`rounded-3xl bg-brand-dark text-white p-12 md:p-20 relative overflow-hidden animate-on-scroll zoom-in ${areStatsVisible ? 'is-visible' : ''}`}>
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{backgroundImage: "url('/stockphotos/intramurals13.jpg')", willChange: 'transform' }}
          ></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-accent font-semibold">BY THE NUMBERS</p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                A Legacy of Excellence
              </h2>
              <p className="mt-4 text-slate-300 max-w-md">
                Our commitment to quality education is reflected in the success of our students and the strength of our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                    <h3 className="text-6xl md:text-7xl font-bold">{studentCount.toLocaleString()}+</h3>
                    <p className="text-lg text-slate-300 mt-2">Active Students</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-6xl md:text-7xl font-bold">{successRate}%</h3>
                    <p className="text-lg text-slate-300 mt-2 text-center">University Placement</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;