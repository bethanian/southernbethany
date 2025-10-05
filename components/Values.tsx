import React from 'react';
import { ArrowRightIcon, PlusIcon, ShieldIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode; highlighted?: boolean; delay?: string; isVisible: boolean }> = ({ title, description, icon, highlighted, delay, isVisible }) => {
    const baseClasses = "p-8 rounded-3xl flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1";
    const cardClasses = highlighted
        ? `${baseClasses} bg-brand-bg-warm text-white`
        : `${baseClasses} bg-white border border-brand-neutral`;
    const buttonClasses = highlighted
        ? "bg-white text-brand-dark"
        : "bg-white border border-brand-neutral text-brand-dark";
    const descriptionClasses = highlighted ? "text-white/80" : "text-brand-dark opacity-80";

    return (
        <div className={`${cardClasses} group animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`} style={{'--stagger-delay': delay} as React.CSSProperties}>
            <div>
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">{icon}</div>
                <h3 className={`text-2xl font-semibold mt-4 ${highlighted ? 'text-white' : 'text-brand-dark'}`}>{title}</h3>
                <p className={`mt-2 ${descriptionClasses}`}>{description}</p>
            </div>
            <button className={`${buttonClasses} w-12 h-12 rounded-full flex items-center justify-center mt-8 transition-transform duration-300 group-hover:rotate-45`}>
                <ArrowRightIcon className="w-5 h-5 -rotate-45" />
            </button>
        </div>
    );
};

const Values: React.FC = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });
    const [cardsRef, areCardsVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="about-us" className="py-20 px-6 md:px-12 lg:px-24 bg-brand-bg-light">
            <div className="container mx-auto">
                <div ref={headerRef} className={`grid lg:grid-cols-2 gap-12 animate-on-scroll slide-in-up ${isHeaderVisible ? 'is-visible' : ''}`}>
                    <div>
                        <p className="font-semibold text-brand-accent">VALUES</p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2">
                            A foundation for success, Built on values
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <p className="text-brand-dark opacity-80 text-lg">
                            Our core values guide every aspect of our community, shaping students into compassionate and capable leaders.
                        </p>
                    </div>
                </div>

                <div ref={cardsRef} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ValueCard
                        // Fix: Changed strokeLineCap to strokeLinecap and strokeLineJoin to strokeLinejoin
                        icon={<svg className="w-8 h-8 text-brand-dark" fill="none" viewBox="0 0 34 34"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.25 12.75a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM32.5 21.25a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"></path></svg>}
                        title="Academic Excellence"
                        description="We are committed to the highest standards of academic achievement, preparing students for future success."
                        isVisible={areCardsVisible}
                        delay="0ms"
                    />
                    <ValueCard
                        icon={<PlusIcon className="w-8 h-8 text-brand-dark" />}
                        title="Christian Values"
                        description="Rooted in biblical principles, we nurture students' spiritual growth and moral character through daily devotion and weekly chapel services."
                        isVisible={areCardsVisible}
                        delay="150ms"
                    />
                    <ValueCard
                        highlighted
                        icon={<ShieldIcon className="w-8 h-8 text-white" />}
                        title="Servant Leadership"
                        description="We cultivate leadership through service, empowering students to make a positive impact in their communities with humility and integrity."
                        isVisible={areCardsVisible}
                        delay="300ms"
                    />
                </div>

                {/* Bethanian's Creed */}
                <div className="mt-16 bg-white p-8 rounded-3xl shadow-lg">
                    <h3 className="text-2xl font-bold text-brand-dark text-center">Bethanian's Creed</h3>
                    <p className="mt-6 text-brand-dark/80 text-center italic">
                        I am a learner of Southern Bethany Christian School of Minglanilla Inc. I seek to please God in everything I do, I respect and obey my parents, teachers, and other authorities in the Lord, I obey rules and regulations at all times, I respect my classmates and treat them like my siblings, I seek to lead by serving others, I do best in humility, I know how to express myself in a reasonable way, I am environmentally friendly, I keep the school clean and orderly, use the facilities with care and consider them as my own. I am a proud school representative who protects and cares for its name and integrity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Values;