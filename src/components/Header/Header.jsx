import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Immediately reflect active state for quicker visual feedback
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];
    const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (id) => `${styles.navLink} ${activeSection === id ? styles.activeNav : ''}`;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} role="navigation" aria-label="Primary">
        <div className={styles.logo}>
          <h1>MAHESH DONTHALA</h1>
        </div>

        <div id="primary-navigation" className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <button onClick={() => scrollToSection('hero')} className={linkClass('hero')} aria-current={activeSection==='hero' ? 'page' : undefined}>Home</button>
          <button onClick={() => scrollToSection('about')} className={linkClass('about')} aria-current={activeSection==='about' ? 'page' : undefined}>About</button>
          <button onClick={() => scrollToSection('education')} className={linkClass('education')} aria-current={activeSection==='education' ? 'page' : undefined}>Education</button>
          <button onClick={() => scrollToSection('skills')} className={linkClass('skills')} aria-current={activeSection==='skills' ? 'page' : undefined}>Skills</button>
          <button onClick={() => scrollToSection('projects')} className={linkClass('projects')} aria-current={activeSection==='projects' ? 'page' : undefined}>Projects</button>
          <button onClick={() => scrollToSection('experience')} className={linkClass('experience')} aria-current={activeSection==='experience' ? 'page' : undefined}>Experience</button>
          <button onClick={() => scrollToSection('contact')} className={linkClass('contact')} aria-current={activeSection==='contact' ? 'page' : undefined}>Contact</button>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;