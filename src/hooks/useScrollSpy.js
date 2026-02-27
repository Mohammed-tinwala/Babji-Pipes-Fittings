import { useState, useEffect, use } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find current section
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        handleScroll(); // Initial check

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);

    }, [sectionIds, offset]);

    return activeSection;
};

// Smooth scroll to section
export const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const top = section.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
};