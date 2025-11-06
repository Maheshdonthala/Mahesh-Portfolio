import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description: 'A comprehensive library management system built with Java that handles book inventory, user management, borrowing/returning books, and administrative functions for efficient library operations.',
      image: '/project1.jpg',
      technologies: ['Java', 'SQL', 'JDBC', 'Swing'],
      category: 'backend',
      github: 'https://github.com/Maheshdonthala/Library_system.git',
      live: 'https://library-ti57.onrender.com'
    },
    {
      id: 2,
      title: 'Anna Canteen Management',
      description: 'A canteen management system developed in Java for handling food orders, inventory management, billing, and customer service operations in educational institutions.',
      image: '/project2.avif',
      technologies: ['Java', 'SQL', 'Database Management', 'GUI'],
      category: 'backend',
      github: 'https://github.com/Maheshdonthala/Anna-Canteen.git',
      live: 'https://anna-canteen.onrender.com'
    },
    {
      id: 3,
      title: 'Static Web Application',
      description: 'A responsive static web application built with modern web technologies, featuring clean design and optimized performance for showcasing business products and services.',
      image: '/project3.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/Maheshdonthala/Static_web_App.git',
      live: 'https://static-web-app-dusky.vercel.app/'
    },
    {
      id: 4,
      title: 'Multimedia Content Creation',
      description: 'Created professional advertisements, promotional videos, and visual content using Adobe Premiere Pro. Designed eye-catching posters and thumbnails for various projects and campaigns.',
      image: '/project4.jpg',
      technologies: ['Adobe Premiere Pro', 'Video Editing', 'Post-Production', 'Graphic Design'],
      category: 'multimedia',
      youtube: 'https://youtube.com/@themahesh502?si=v6dviDA2DDsl7cj8',
      live: 'https://youtu.be/kuN9bZFRkCE?si=ebUPPz4Z4ZTKYjnq'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend Projects' },
    { id: 'frontend', label: 'Frontend Projects' },
    { id: 'multimedia', label: 'Multimedia Projects' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Projects</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.projectImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.placeholderImage} style={{display: 'none'}}>
                  <span>{project.title}</span>
                </div>
                <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  {project.youtube ? (
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;