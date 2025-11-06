import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 1,
      position: 'Site Reliability Engineer (SRE) Training',
      company: 'Teamware Solutions',
      duration: '2025',
      type: 'training',
      icon: 'fas fa-server',
      description: 'Completed comprehensive SRE training covering Linux, Shell Scripting, AWS, SQL, GitHub, Docker, and DevOps tools. Gained hands-on experience in cloud infrastructure and automation.',
      achievements: [
        'Mastered Linux system administration',
        'Implemented AWS cloud solutions',
        'Learned containerization with Docker',
        'Practiced DevOps methodologies'
      ],
  color: '#7c3aed'
    },
    {
      id: 2,
      position: 'DevOps Training & Certification',
      company: 'Jspider',
      duration: '2025',
      type: 'training',
      icon: 'fas fa-cogs',
      description: 'Completed intensive DevOps training program covering Shell Scripting, Linux, SQL, and various DevOps tools. Developed strong foundation in automation and infrastructure management.',
      achievements: [
        'Certified in DevOps practices',
        'Mastered Shell Scripting',
        'Gained Linux expertise',
        'Learned SQL database management'
      ],
  color: '#6d28d9'
    },
    {
      id: 3,
      position: 'Java Full-Stack Training & Certification',
      company: 'Jspiders',
      duration: '2025',
      type: 'training',
      icon: 'fab fa-java',
      description: 'Completed comprehensive Java full-stack development training covering Core Java, Advanced Java, Spring Boot, React, and database technologies. Gained expertise in end-to-end web application development.',
      achievements: [
        'Mastered Core and Advanced Java',
        'Learned Spring Boot framework',
        'Developed React frontend skills',
        'Built full-stack web applications'
      ],
  color: '#6d28d9'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', icon: 'fas fa-list' },
    { id: 'training', label: 'Training', icon: 'fas fa-user-graduate' }
  ];

  const filteredExperiences = activeTab === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Experience & Training</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            My professional development journey through specialized training programs and certifications
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience Grid */}
        <div className={styles.experienceGrid}>
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={styles.experienceCard}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer} style={{ backgroundColor: exp.color }}>
                  <i className={exp.icon}></i>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.duration}>
                    <i className="fas fa-calendar-alt"></i>
                    {exp.duration}
                  </span>
                  <span className={styles.type} style={{ backgroundColor: exp.color }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.position}>{exp.position}</h3>
                <h4 className={styles.company}>
                  <i className="fas fa-building"></i>
                  {exp.company}
                </h4>
                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <i className="fas fa-check-circle"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      backgroundColor: exp.color,
                      width: exp.type === 'training' ? '90%' : '70%'
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

export default Experience;