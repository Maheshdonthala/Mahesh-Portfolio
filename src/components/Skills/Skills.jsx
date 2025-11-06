import React from 'react';
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
        { name: 'Thumbnail Design', level: 70 },
        { name: 'Poster Design', level: 70 },
        { name: 'Advertisement Creation', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
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
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
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