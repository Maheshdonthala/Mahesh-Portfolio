import React, { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Professional Overview",
      content: [
        "I'm a passionate B-Tech graduate in Computer Science with a strong foundation in DevOps, cloud technologies, and software engineering. Born on January 11, 2002, I've developed comprehensive expertise across the full technology stack.",
        "My journey began with traditional software development, but I quickly found my calling in DevOps and Site Reliability Engineering. I thrive on automating processes, optimizing systems, and ensuring reliable, scalable infrastructure.",
        "What sets me apart is my ability to bridge the gap between development and operations, understanding both worlds deeply and creating solutions that benefit entire organizations."
      ]
    },
    technical: {
      title: "Technical Expertise",
      content: [
        "My technical arsenal includes hands-on experience with AWS cloud services, where I've architected and deployed scalable solutions. I'm proficient in containerization technologies like Docker and orchestration with Kubernetes.",
        "I excel in CI/CD pipeline development using Jenkins, GitLab CI, and GitHub Actions. Infrastructure as Code (IaC) is second nature to me, with expertise in Terraform and Ansible for automation.",
        "Programming languages I work with include Java (Spring Boot), Python for automation, Shell Scripting for system administration, and SQL for database management. I also have experience with monitoring tools like Prometheus and Grafana."
      ]
    },
    personal: {
      title: "Beyond Technology",
      content: [
        "Beyond my technical expertise, I have a creative side with strong multimedia and design skills. I'm proficient in Adobe Premiere Pro for video editing and post-production work.",
        "I enjoy creating compelling visual content including advertisements, promotional videos, posters, and thumbnails. This creative skill set allows me to effectively communicate technical concepts to diverse audiences.",
        "I believe in continuous learning and staying updated with the latest industry trends. I'm always excited to take on new challenges and contribute to innovative projects that solve real-world problems."
      ]
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Passionate Developer | DevOps Engineer | Site Reliability Engineer
          </p>
        </div>

        <div className={styles.mainContent}>
          {/* Personal Info Card */}
          <div className={styles.personalCard}>
            <div className={styles.personalInfo}>
              <div className={styles.infoItem}>
                <i className="fas fa-birthday-cake"></i>
                <div>
                  <span className={styles.infoLabel}>Age</span>
                  <span className={styles.infoValue}>23 Years</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Bengaluru, India</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-envelope"></i>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>maheshdonthala423@gmail.com</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-language"></i>
                <div>
                  <span className={styles.infoLabel}>Languages</span>
                  <span className={styles.infoValue}>English, Telugu, Hindi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Content */}
          <div className={styles.contentSection}>
            <div className={styles.tabNavigation}>
              {Object.keys(tabContent).map(tab => (
                <button 
                  key={tab}
                  className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <h3 className={styles.contentTitle}>{tabContent[activeTab].title}</h3>
              <div className={styles.contentText}>
                {tabContent[activeTab].content.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;