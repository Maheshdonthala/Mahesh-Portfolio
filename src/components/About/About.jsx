import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              I'm a B-Tech graduate in Computer Science with a strong foundation in DevOps, cloud technologies, and software engineering.
              Born on January 11, 2002, I've developed expertise in SQL, Shell Scripting, Java with Spring Boot, and various DevOps tools.
            </p>
            <p className={styles.description}>
              My technical journey includes hands-on experience with AWS cloud services, containerization with Docker and Kubernetes,
              CI/CD pipelines with Jenkins, and infrastructure automation with Ansible. I'm passionate about site reliability engineering
              and building scalable, reliable systems.
            </p>
            <p className={styles.description}>
              With multiple certifications in DevOps and SRE, I'm eager to apply my skills in a professional environment
              and contribute to innovative projects that solve real-world challenges.
            </p>
            <p className={styles.description}>
              Beyond technical expertise, I have strong multimedia and design skills using Adobe Premiere Pro for video editing
              and post-production. I'm ready to create compelling advertisements, films, posters, and thumbnails that effectively
              communicate your brand message and engage your audience.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>23</h3>
              <p className={styles.statLabel}>Years Old</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>7.64</h3>
              <p className={styles.statLabel}>B-Tech CGPA</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>5+</h3>
              <p className={styles.statLabel}>Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;