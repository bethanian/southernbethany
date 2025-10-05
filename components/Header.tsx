import React, { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, MenuIcon, XIcon } from './icons';

const navLinks = [
    { title: 'Home', id: 'home' },
    { title: 'Academics', id: 'academics' },
    { title: 'Student Life', id: 'student-life' },
    { title: 'Admissions', id: 'admissions' },
    { title: 'About Us', id: 'about-us' },
    { title: 'Apply', id: 'apply' }
];

const Header: React.FC<{ setCurrentPage?: (page: string) => void }> = ({ setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen && mobileMenuRef.current) {
            const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            firstElement?.focus();

            const handleTabKeyPress = (e: KeyboardEvent) => {
                if (e.key !== 'Tab') return;

                if (e.shiftKey) { // Shift+Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            };
            
            const currentMenu = mobileMenuRef.current;
            currentMenu.addEventListener('keydown', handleTabKeyPress);

            return () => {
                currentMenu.removeEventListener('keydown', handleTabKeyPress);
                menuButtonRef.current?.focus();
            };
        }
    }, [isMenuOpen]);

    const handleNavigation = (id: string) => {
        if (id === 'apply' && setCurrentPage) {
            setCurrentPage('apply');
        } else if (setCurrentPage) {
            setCurrentPage('home');
            // Scroll to section only for home page sections
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="relative">
            <div className="bg-brand-dark text-white text-center text-sm py-2 px-4 flex items-center justify-center">
                <p>
                    <span className="font-semibold mr-2">Enrollment Open</span> for School Year 2024-2025
                </p>
                <ChevronRightIcon className="w-4 h-4 ml-1" />
            </div>
            <div className="bg-brand-bg-light py-4 px-6 md:px-12 lg:px-24">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-brand-dark flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <img src="/stockphotos/Sbcsmilogo.png" alt="Southern Bethany Christian School Logo" className="h-10 w-10 mr-3" />
                        Southern Bethany
                    </a>
                    <nav className="hidden md:flex" aria-label="Main navigation">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => handleNavigation(link.id)} className="text-brand-dark opacity-80 hover:opacity-100 hover:text-brand-accent transition-all">
                                        {link.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                     <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-brand-dark hover:text-brand-accent font-medium transition-colors">Portal</a>
                        <button onClick={() => handleNavigation('apply')} className="group bg-brand-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center">
                            Apply Now <ChevronRightIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button ref={menuButtonRef} onClick={() => setIsMenuOpen(true)} aria-label="Open menu" aria-controls="mobile-menu" aria-expanded={isMenuOpen} className="p-2 -m-2">
                            <MenuIcon className="w-6 h-6 text-brand-dark" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                className={`fixed inset-0 z-50 transition-transform transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
                <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-brand-bg-light p-6 shadow-lg">
                    <div className="flex justify-between items-center">
                        <span id="mobile-menu-title" className="text-lg font-bold text-brand-dark">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 -m-2">
                            <XIcon className="w-6 h-6 text-brand-dark" />
                        </button>
                    </div>
                    <nav className="mt-8">
                        <ul className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => handleNavigation(link.id)} className="w-full text-left text-xl text-brand-dark hover:text-brand-accent transition-colors">
                                        {link.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-6 border-brand-neutral" />
                        <ul className="flex flex-col space-y-6">
                            <li>
                                <a href="#" className="text-xl text-brand-dark hover:text-brand-accent transition-colors">Portal</a>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('apply')} className="block w-full text-center bg-brand-accent text-white px-4 py-3 rounded-lg font-medium">
                                    Apply Now
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;