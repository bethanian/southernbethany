import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { PlusIcon, MinusIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqData: FAQItem[] = [
    {
        question: "How do I apply for admission?",
        answer: "The application process is entirely online through our admissions portal. You will need to create an account, fill out the application form, and submit required documents such as transcripts and letters of recommendation. Please check the admissions page for deadlines."
    },
    {
        question: "What is the tuition fee structure?",
        answer: "Tuition fees vary by program and residency status. A detailed breakdown of fees, including tuition, student services, and other charges, can be found on our 'Tuition & Fees' page. We also provide information on payment plans and deadlines."
    },
    {
        question: "Are scholarships or financial aid available?",
        answer: "Yes, Southern Bethany offers a range of scholarships based on merit, need, and other criteria. Financial aid is also available for eligible students. We encourage all applicants to fill out the financial aid application to be considered for support."
    },
    {
        question: "What extracurricular activities or student organizations can I join?",
        answer: "to be added"
    },
    {
        question: "What facilities and resources are available for students?",
        answer: "to be added"
    }
];

const FaqItemComponent: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-brand-neutral py-6">
            <button
                className="w-full flex justify-between items-center text-left group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-brand-dark group-hover:text-brand-accent transition-colors">{item.question}</h3>
                {isOpen ? <MinusIcon className="w-6 h-6 text-brand-dark/70" /> : <PlusIcon className="w-6 h-6 text-brand-dark/70" />}
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}>
                <p className="text-brand-dark opacity-80">{item.answer}</p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);
    const [leftRef, isLeftVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.3 });
    const [rightRef, isRightVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-section" className="py-20 px-6 md:px-12 lg:px-24 bg-brand-bg-light">
            <div className="container mx-auto grid lg:grid-cols-3 gap-12">
                <div ref={leftRef} className={`lg:col-span-1 animate-on-scroll slide-in-left ${isLeftVisible ? 'is-visible' : ''}`}>
                    <p className="font-semibold text-brand-accent">FAQ</p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2">
                        Frequently asked questions
                    </h2>
                </div>
                <div ref={rightRef} className={`lg:col-span-2 animate-on-scroll slide-in-right ${isRightVisible ? 'is-visible' : ''}`}>
                    {faqData.map((item, index) => (
                        <FaqItemComponent
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;