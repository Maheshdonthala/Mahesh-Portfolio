import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>MAHESH DONTHALA</h1>
        </div>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <button onClick={() => scrollToSection('hero')} className={styles.navLink}>Home</button>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button>
          <button onClick={() => scrollToSection('education')} className={styles.navLink}>Education</button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>Skills</button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>Projects</button>
          <button onClick={() => scrollToSection('experience')} className={styles.navLink}>Experience</button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;