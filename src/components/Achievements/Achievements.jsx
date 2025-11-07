import React from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const items = [
    {
      title: 'NCC A-Certificate',
      year: '2025',
      org: 'National Cadet Corps (NCC)',
      icon: 'fas fa-medal',
      description:
        'Awarded NCC A-Certificate recognizing discipline, leadership, and community service. Completed training and assessment under NCC program.'
    }
  ];

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Achievements</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>A few milestones that reflect dedication, discipline, and leadership.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <article key={idx} className={styles.card} style={{ '--delay': `${idx * 0.1}s` }}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <i className={item.icon}></i>
                </div>
                <span className={styles.year}>
                  <i className="fas fa-calendar-alt"></i>
                  {item.year}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <h4 className={styles.org}>
                <i className="fas fa-building"></i>
                {item.org}
              </h4>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
