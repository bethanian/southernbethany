import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FacebookIcon, PaperAirplaneIcon } from './icons';

const Footer: React.FC<{ setCurrentPage?: (page: string) => void }> = ({ setCurrentPage }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

    const handleApplyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (setCurrentPage) {
            setCurrentPage('apply');
        }
    };

    const footerLinks = {
        'Admissions': [
            { name: 'Apply', onClick: handleApplyClick },
            { name: 'Visit Campus', href: '#' },
            { name: 'Tuition', href: '#' },
            { name: 'Scholarships', href: '#' },
            { name: 'Deadlines', href: '#' }
        ],
        'Academics': [
            { name: 'Programs', href: '#' },
            { name: 'Faculty', href: '#' },
            { name: 'Research', href: '#' },
            { name: 'Library', href: '#' },
            { name: 'Catalog', href: '#' }
        ],
        'Student Life': [
            { name: 'Housing', href: '#' },
            { name: 'Clubs', href: '#' },
            { name: 'Athletics', href: '#' },
            { name: 'Health Services', href: '#' },
            { name: 'Career Center', href: '#' }
        ],
        'About': [
            { name: 'Our Mission', href: '#' },
            { name: 'History', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'News', href: '#' },
            { name: 'Events', href: '#' }
        ]
    };

    return (
        <footer ref={ref} className="py-20 px-6 md:px-12 lg:px-24 bg-brand-neutral">
            <div className={`container mx-auto animate-on-scroll fade-in ${isVisible ? 'is-visible' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12">
                    <div className="sm:col-span-2 lg:col-span-4 xl:col-span-2">
                        <h3 className="text-xl font-bold text-brand-dark">Southern Bethany Christian School</h3>
                        <p className="mt-4 text-brand-dark opacity-80">Minglanilla, Cebu, Philippines</p>
                        <div className="mt-4 space-y-2 text-brand-dark opacity-80">
                            <p>Phone: (032) 273 3216 / (032) 490 7081</p>
                            <p>Email: southbeth2002@gmail.com</p>
                        </div>
                        <div className="mt-6">
                             <h4 className="font-semibold text-brand-dark">Subscribe to our newsletter</h4>
                            <p className="mt-2 text-sm text-brand-dark opacity-80">Stay updated with the latest news and events.</p>
                            <div className="mt-4 relative flex items-center">
                                <input type="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-brand-dark bg-white rounded-lg border-0 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-accent peer" placeholder=" " />
                                <label htmlFor="email" className="absolute text-sm text-brand-dark/70 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-brand-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Email address</label>
                                <button className="absolute end-1 bg-brand-accent text-white p-2 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                                    <PaperAirplaneIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="xl:col-span-1">
                            <h4 className="font-semibold text-brand-dark">{title}</h4>
                            <ul className="mt-4 space-y-3">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        {'onClick' in link ? (
                                            <button 
                                                onClick={link.onClick} 
                                                className="text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-accent transition-all text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <a 
                                                href={link.href} 
                                                className="text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-accent transition-all"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-brand-dark/20 flex flex-col md:flex-row justify-between items-center text-sm text-brand-dark/60">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.facebook.com/SBCSMI" target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-accent transition-colors">
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-center md:text-left">&copy; Southern Bethany Christian School 2024. Developed by Dean D. Williams, Son of God and proud student of Southern Bethany Christian School of Minglanilla.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-accent transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;