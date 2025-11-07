import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import profileImage from '../../images/profile.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Left Side - Visual */}
        <div className={`${styles.heroVisual} ${isVisible ? styles.fadeInLeft : ''}`}>
          <div className={styles.visualContent}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <img 
                  src={profileImage} 
                  alt="Mahesh Donthala"
                  className={styles.profilePhoto}
                />
              </div>
            </div>

            <div className={styles.skillBadges}>
              <span className={styles.badge}>
                <i className="fab fa-aws"></i> AWS
              </span>
              <span className={styles.badge}>
                <i className="fab fa-docker"></i> Docker
              </span>
              <span className={styles.badge}>
                <i className="fas fa-code"></i> DevOps
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`${styles.heroContent} ${isVisible ? styles.fadeInRight : ''}`}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.name}>MAHESH</span>
            <span className={styles.lastname}>DONTHALA</span>
          </h1>

          <div className={styles.roles}>
            <span className={styles.role}>Developer</span>
            <span className={styles.divider}>|</span>
            <span className={styles.role}>DevOps Engineer</span>
            <span className={styles.divider}>|</span>
            <span className={styles.role}>Site Reliability Engineer</span>
          </div>

          <p className={styles.heroDescription}>
            Highly motivated Software Engineering graduate with strong proficiency in Java, Spring Boot, SQL, Shell
Scripting, Linux and AWS. Eager to apply academic knowledge and technical skills in an
entry-level software engineering role. Demonstrated ability to coding, problem-solving
skills, teamwork, and aim to contribute to an organization.
          </p>

          {/* Stats removed per request */}

          <div className={styles.heroButtons}>
            <button className={styles.primaryButton} onClick={scrollToContact}>
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
            <button className={styles.secondaryButton} onClick={scrollToProjects}>
              <i className="fas fa-briefcase"></i>
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingSquare}></div>
        <div className={styles.floatingTriangle}></div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;