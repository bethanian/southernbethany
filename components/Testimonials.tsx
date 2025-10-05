import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { StarIcon } from './icons';

const testimonials = [
    { quote: "Southern Bethany has been a second home for our children. The teachers are incredible, and the values-based education is exactly what we were looking for.", name: "Maria S.", role: "Parent", image: "/stockphotos/photoofteachers.jpg" },
    { quote: "I love my school! The science fairs are my favorite part. I've learned so much and made great friends.", name: "Joshua L.", role: "Student, Grade 6", image: "/stockphotos/boyholdingtorch.jpg" },
    { quote: "The focus on character development is truly exceptional. We've seen our daughter blossom into a confident and compassionate young leader.", name: "David & Anna C.", role: "Parents", image: "/stockphotos/studentsdancing.jpg" },
    { quote: "As an alumnus, I can confidently say that SBCS prepared me not just for university, but for life. The spiritual foundation is invaluable.", name: "John P.", role: "Alumnus, Class of 2018", image: "/stockphotos/buwanngwikaperformance1.jpg" },
    { quote: "The small class sizes ensure that every student gets the attention they need to succeed. The teachers genuinely care.", name: "Isabella G.", role: "Parent", image: "/stockphotos/intramurals7.jpg" },
    { quote: "The community here is amazing. From sports fests to outreach programs, there's always something happening.", name: "Miguel R.", role: "Student, Grade 11", image: "/stockphotos/studentplayingvolleyball.jpg" },
    { quote: "We are so grateful for the safe and nurturing environment at Southern Bethany. It's a true blessing for our family.", name: "The Lim Family", role: "Parents", image: "/stockphotos/intramurals12.jpg" },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="w-[250px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg mx-4 flex flex-col justify-between">
        <div>
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <StarIcon key={`star-${i}`} className="w-5 h-5" />)}
            </div>
            <p className="mt-4 text-brand-dark/90 italic">"{testimonial.quote}"</p>
        </div>
        <div className="mt-4 pt-4 border-t border-brand-neutral flex items-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
                <p className="font-semibold text-brand-dark">{testimonial.name}</p>
                <p className="text-sm text-brand-dark/70">{testimonial.role}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section ref={sectionRef} className="py-20 bg-brand-neutral overflow-hidden">
            <div className="container mx-auto">
                <div className={`text-center animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <p className="font-semibold text-brand-accent">TESTIMONIALS</p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2">
                        What Our Community Says
                    </h2>
                </div>
            </div>
            <div className="mt-16 w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className={`flex items-stretch justify-start scroller-inner animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;