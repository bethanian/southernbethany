import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Apply: React.FC = () => {
    const [formRef, isVisible] = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would send the data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="container mx-auto">
                <div ref={formRef} className={`animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="font-semibold text-brand-accent">APPLICATION</p>
                        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2">
                            Begin Your Journey with Us
                        </h1>
                        <p className="mt-4 text-brand-dark opacity-80 text-lg">
                            Take the first step toward a transformative educational experience grounded in Christian values and academic excellence.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="mt-16 max-w-2xl mx-auto bg-brand-bg-light rounded-3xl p-12 text-center">
                            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-semibold text-brand-dark mt-6">Application Received!</h2>
                            <p className="mt-4 text-brand-dark opacity-80">
                                Thank you for your interest in Southern Bethany Christian School. Our admissions team will review your application and contact you within 2-3 business days.
                            </p>
                            <p className="mt-4 text-brand-dark opacity-80">
                                If you have any urgent questions, please contact us at (032) 273 3216 / (032) 490 7081.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-16 max-w-4xl mx-auto">
                            <div className="bg-brand-bg-light rounded-3xl p-8 md:p-12">
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-brand-dark font-medium mb-2">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-accent"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-brand-dark font-medium mb-2">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-accent"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-brand-dark font-medium mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-accent"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-brand-dark font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-accent"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="message" className="block text-brand-dark font-medium mb-2">Message (Optional)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-accent"
                                            placeholder="Any additional information you'd like to share..."
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 mt-6">
                                        <button
                                            type="submit"
                                            className="w-full bg-brand-accent text-white px-6 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-3xl border border-brand-neutral text-center">
                                    <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand-dark mt-6">Submit Application</h3>
                                    <p className="mt-2 text-brand-dark opacity-80">
                                        Complete and submit the online application form with required documentation.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-brand-neutral text-center">
                                    <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand-dark mt-6">Admissions Review</h3>
                                    <p className="mt-2 text-brand-dark opacity-80">
                                        Our admissions team will review your application and contact you to schedule an interview.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-brand-neutral text-center">
                                    <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand-dark mt-6">Enrollment Confirmation</h3>
                                    <p className="mt-2 text-brand-dark opacity-80">
                                        Upon acceptance, complete the enrollment process and secure your place at SBCS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Apply;