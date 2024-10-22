import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import NavItem from './nav-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavMobile, setIsNavMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('start');

    const sections = [
        { id: 'start', label: 'Start' },
        { id: 'about', label: 'About' },
        { id: 'what-we-do', label: 'Our Mission' },
        { id: 'events', label: 'Meetups' },
        { id: 'join-us', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offsets = sections.map(section => {
                const element = document.getElementById(section.id);
                return element ? { id: section.id, offsetTop: element.offsetTop } : null;
            }).filter(Boolean);

            for (let i = 0; i < offsets.length; i++) {
                if (scrollPosition >= offsets[i].offsetTop - 80 && 
                    (i === offsets.length - 1 || scrollPosition < offsets[i + 1].offsetTop - 80)) {
                    setActiveSection(offsets[i].id);
                    break;
                }
            }

            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    const handleNavToggle = () => {
        setIsNavMobile(!isNavMobile);
    };

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className={`grid grid-cols-5 gap-8 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 w-full py-2 bg-white shadow-md z-50 px-8 lg:px-48' : 'py-4'}`}>
            <div className="col-span-2 flex">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className={`transition-all duration-300 ${isScrolled ? 'h-12 lg:h-20' : 'h-16 lg:h-28'}`}
                />
            </div>
            <div className="col-span-3 flex">
                <div className="hidden xl:flex flex-row space-x-8 my-auto ms-auto">
                    {sections.map(section => (
                        <NavItem 
                            key={section.id} 
                            label={section.label} 
                            slug={`#${section.id}`} 
                            footer={false} 
                            active={activeSection === section.id}
                            onClick={handleSectionClick}
                        />
                    ))}
                </div>
                <div className="flex xl:hidden my-auto ms-auto">
                    <button 
                        className="flex mx-auto my-auto" 
                        onClick={handleNavToggle}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {isNavMobile && (
                <div className="col-span-5 xl:hidden mt-4">
                    <div className="flex flex-col space-y-2">
                        {sections.map(section => (
                            <NavItem 
                                key={section.id} 
                                label={section.label} 
                                slug={`#${section.id}`} 
                                footer={false} 
                                active={activeSection === section.id}
                                onClick={handleSectionClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
