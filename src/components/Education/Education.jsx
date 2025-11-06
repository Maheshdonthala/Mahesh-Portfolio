import React, { useState } from 'react';
import styles from './Education.module.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('all');

  const educationData = [
    {
      id: 1,
      position: 'B-Tech in Computer Science',
      company: 'Sai Ganapathi Engineering College',
      duration: '2022 - 2025',
      type: 'education',
      icon: 'fas fa-graduation-cap',
      description: 'Completed Bachelor of Technology with 7.64 CGPA. Focused on software engineering, data structures, algorithms, and system design. Developed strong foundation in computer science principles.',
      achievements: [
        'Achieved 7.64 CGPA',
        'Completed multiple programming projects',
        'Learned software engineering principles',
        'Developed problem-solving skills'
      ],
      color: '#8b5cf6'
    },
    {
      id: 2,
      position: 'Diploma in Mechanical Engineering',
      company: 'Sai Ganapathi Polytechnic',
      duration: '2018 - 2020',
      type: 'education',
      icon: 'fas fa-wrench',
      description: 'Completed Diploma in Mechanical Engineering with 77.7%. Gained knowledge in engineering fundamentals and developed analytical thinking skills.',
      achievements: [
        'Achieved 77.7% aggregate',
        'Learned engineering fundamentals',
        'Developed technical drawing skills',
        'Gained workshop experience'
      ],
      color: '#5b21b6'
    },
    {
      id: 3,
      position: 'Secondary School Certificate (SSC)',
      company: 'Sri Venkateshwara School',
      duration: '2017',
      type: 'education',
      icon: 'fas fa-school',
      description: 'Completed SSC with 8.7 CGPA. Built strong foundation in mathematics, science, and basic computer knowledge.',
      achievements: [
        'Achieved 8.7 CGPA',
        'Excellence in Mathematics and Science',
        'Developed analytical thinking',
        'Built strong academic foundation'
      ],
      color: '#4c1d95'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Education', icon: 'fas fa-th' },
    { id: 'higher', label: 'Higher Education', icon: 'fas fa-university' },
    { id: 'school', label: 'School', icon: 'fas fa-school' }
  ];

  const filteredEducation = educationData.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'higher') return item.id <= 2;
    if (activeTab === 'school') return item.id === 3;
    return true;
  });

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            My Education
            <span className={styles.titleUnderline}></span>
          </h2>
          <p className={styles.subtitle}>
            My academic journey and educational achievements, from foundational learning to specialized training
          </p>
        </div>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.educationGrid}>
          {filteredEducation.map((item, index) => (
            <div key={item.id} className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer} style={{backgroundColor: item.color}}>
                  <i className={item.icon}></i>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.position}>{item.position}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.description}>{item.description}</p>
                
                <div className={styles.achievements}>
                  <h4>Key Achievements:</h4>
                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{
                      width: `${90 - index * 5}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;