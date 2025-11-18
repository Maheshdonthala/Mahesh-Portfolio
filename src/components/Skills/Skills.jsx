import React, { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'Shell Scripting', level: 70 },
        { name: 'JavaScript', level: 65 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Spring Boot', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 65 },
        { name: 'Jenkins', level: 70 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Ansible', level: 65 }
      ]
    },
    {
      title: 'Multimedia & Design',
      skills: [
        { name: 'Adobe Premiere Pro', level: 85 },
        { name: 'Video Post-Production', level: 80 },
        { name: 'Film Editing', level: 75 },
        { name: 'Advertisement Creation', level: 75 }
      ]
    }
  ];

  const sectionRef = useRef(null);
  const [playAnim, setPlayAnim] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayAnim(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.skillGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div
                      className={styles.circularMeter}
                      style={playAnim ? { '--value': skill.level, '--delay': `${skillIndex * 0.12}s` } : { '--value': 0 }}
                      aria-label={`${skill.name} ${skill.level}%`}
                    >
                      <span className={styles.circularValue}>{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;