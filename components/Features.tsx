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
          const { top, height } = statsRef.current.getBoundingClientRect();
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
  }, [statsRef]);

  return (
    <section id="academics" className="py-20 px-6 md:px-12 lg:px-24 bg-brand-neutral">
      <div ref={titleRef} className={`container mx-auto text-center animate-on-scroll slide-in-up ${isTitleVisible ? 'is-visible' : ''}`}>
        <p className="font-semibold text-brand-accent inline-block px-4 py-1 bg-white rounded-full shadow-sm">ACADEMICS</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-6 max-w-3xl mx-auto">
          Holistic Curriculum & Specialized Tracks
        </h2>
        <p className="mt-4 text-brand-dark opacity-80 max-w-xl mx-auto text-lg">
          Our curriculum is integrated with Christian values, emphasizing academic, spiritual, and character development.
        </p>
      </div>

      <div className="container mx-auto mt-16 grid lg:grid-cols-2 gap-8">
        <div ref={card1Ref} className={`bg-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] animate-on-scroll slide-in-left ${isCard1Visible ? 'is-visible' : ''} shadow-xl hover:shadow-2xl transition-all duration-300`}>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-3 h-12 bg-brand-accent rounded-full mr-4"></div>
              <h3 className="text-4xl font-semibold text-brand-dark">
                Integrated Learning
              </h3>
            </div>
            <p className="text-brand-dark opacity-80 text-lg">
                Biblical principles are woven into every subject, providing a comprehensive education that nurtures both the mind and the soul.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-brand-bg-light text-brand-dark px-3 py-1 rounded-full text-sm font-medium">Faith-Based</span>
              <span className="bg-brand-bg-light text-brand-dark px-3 py-1 rounded-full text-sm font-medium">Holistic</span>
              <span className="bg-brand-bg-light text-brand-dark px-3 py-1 rounded-full text-sm font-medium">Character</span>
            </div>
          </div>
          <img src="/stockphotos/buwanngwika3.jpg" alt="Students studying during Buwan ng Wika" className="rounded-xl mt-8 object-cover w-full h-48"/>
        </div>

        <div ref={card2Ref} className={`bg-gradient-to-br from-brand-dark to-gray-900 text-white p-10 rounded-3xl min-h-[400px] animate-on-scroll slide-in-right ${isCard2Visible ? 'is-visible' : ''} shadow-xl hover:shadow-2xl transition-all duration-300`}>
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-brand-accent rounded-full mr-4"></div>
            <h3 className="text-4xl font-semibold">
              Senior High Tracks
            </h3>
          </div>
          <p className="text-slate-300 text-lg">
            The school offers both academic and non-academic tracks to prepare students for university education and future careers.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-bold text-lg">Humanities and Social Sciences (HUMSS)</h4>
                <p className="text-slate-300 text-sm mt-1">For students interested in social sciences, education, and liberal arts</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-bold text-lg">Science, Technology, Engineering, and Mathematics (STEM)</h4>
                <p className="text-slate-300 text-sm mt-1">For aspiring engineers, scientists, and medical professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-bold text-lg">Accountancy, Business, and Management (ABM)</h4>
                <p className="text-slate-300 text-sm mt-1">For future entrepreneurs, accountants, and business leaders</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">4</div>
              <div>
                <h4 className="font-bold text-lg">TVL-ICT</h4>
                <p className="text-slate-300 text-sm mt-1">Technical skills in Information and Communications Technology</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-brand-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">5</div>
              <div>
                <h4 className="font-bold text-lg">TVL-HE</h4>
                <p className="text-slate-300 text-sm mt-1">Home Economics and Livelihood Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner Section */}
      <div ref={statsRef} className="container mx-auto mt-20">
        <div className={`rounded-3xl bg-gradient-to-r from-brand-dark to-gray-900 text-white p-12 md:p-20 relative overflow-hidden animate-on-scroll zoom-in ${areStatsVisible ? 'is-visible' : ''} shadow-xl`}>
          <div
            ref={parallaxRef}
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{backgroundImage: "url('/stockphotos/intramurals13.jpg')", willChange: 'transform' }}
          ></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-accent font-semibold text-lg">BY THE NUMBERS</p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                A Legacy of Excellence
              </h2>
              <p className="mt-4 text-slate-300 max-w-md text-lg">
                Our commitment to quality education is reflected in the success of our students and the strength of our community.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 min-w-[120px]">
                  <p className="text-brand-accent font-bold text-xl">15+</p>
                  <p className="text-xs text-slate-300 mt-1">Years of Excellence</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 min-w-[120px]">
                  <p className="text-brand-accent font-bold text-xl">300+</p>
                  <p className="text-xs text-slate-300 mt-1">Active Students</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 min-w-[120px]">
                  <p className="text-brand-accent font-bold text-xl">5</p>
                  <p className="text-xs text-slate-300 mt-1">Program Tracks</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md">
                <div className="flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold">{successRate}%</span>
                </div>
                <p className="text-xl text-slate-300 mt-2 text-center">University Placement Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;