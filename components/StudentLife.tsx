import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StudentLife: React.FC = () => {
    const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.2 });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // All images for the carousel
    const images = [
        { src: '/stockphotos/intramurals10.jpg', alt: 'Student sports event' },
        { src: '/stockphotos/buwanngwika1.jpg', alt: 'Buwan ng Wika celebration' },
        { src: '/stockphotos/studentsplayingbasketball.jpg', alt: 'Students playing basketball' },
        { src: '/stockphotos/studentshootingthebasketball.jpg', alt: 'Students shooting basketball' },
        { src: '/stockphotos/studentplayingvolleyball.jpg', alt: 'Students playing volleyball' },
        { src: '/stockphotos/studentsdancing.jpg', alt: 'Students dancing' },
        { src: '/stockphotos/intramurals1.jpg', alt: 'Students participating in intramural sports' },
        { src: '/stockphotos/buwanngwikaperformance1.jpg', alt: 'Cultural performance' },
        { src: '/stockphotos/intramurals2.jpg', alt: 'Students engaged in group activities' },
        { src: '/stockphotos/intramurals3.jpg', alt: 'Students in academic activities' }
    ];

    // Auto-advance the carousel every 3 seconds
    useEffect(() => {
        if (!isVisible) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isVisible, images.length]);

    return (
        <section id="student-life" ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="container mx-auto">
                <div className={`text-center animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <p className="font-semibold text-brand-accent">STUDENT LIFE</p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-dark mt-2 max-w-3xl mx-auto">
                        A Vibrant and Nurturing Community
                    </h2>
                    <p className="mt-4 text-brand-dark opacity-80 max-w-xl mx-auto">
                        Beyond academics, we provide a rich campus experience that fosters creativity, teamwork, and personal growth.
                    </p>
                </div>

                {/* Photo Gallery Carousel */}
                <div className="mt-16 rounded-3xl overflow-hidden relative aspect-video">
                    {/* Main image display */}
                    <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                        <img
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    {/* Image caption */}
                    <div className="absolute bottom-8 left-8 right-8 z-10">
                        <p className="text-2xl font-bold text-white">{images[currentImageIndex].alt}</p>
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Previous/Next controls */}
                    <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-10"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Thumbnail grid below carousel */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                index === currentImageIndex 
                                    ? 'ring-4 ring-brand-accent scale-105' 
                                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-24 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentLife;