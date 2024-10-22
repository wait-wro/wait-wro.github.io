import React from 'react';

export default function NavItem({ label, slug, active, onClick }) {
    const handleNavClick = (e) => {
        e.preventDefault();
        const sectionId = slug.substring(1);
        onClick(sectionId);  // Trigger the callback to set the active section
        const yOffset = -80; // Adjust based on navbar height
        const element = document.getElementById(sectionId);
        if (element) {
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    return (
        <a 
            href={slug} 
            onClick={handleNavClick}
            className={`transition-all font-bold duration-300 ${active ? 'font-bold text-waitGreen' : ''}`}
        >
            {label}
        </a>
    );
}
