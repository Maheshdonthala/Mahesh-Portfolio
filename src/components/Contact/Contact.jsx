import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'maheshdonthala423@gmail.com',
      link: 'mailto:maheshdonthala423@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 6303185623',
      link: 'tel:+916303185623'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Current Location',
      value: 'BTM Layout 2nd Stage, Bengaluru',
      link: '#'
    },
    {
      icon: 'fas fa-home',
      label: 'Permanent Address',
      value: 'Door no: 3-2, Kusuluvada (V), Anandapuram (M), Visakhapatnam, Andhra Pradesh',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Maheshdonthala', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mahesh-donthala', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: 'https://youtube.com/@themahesh502?si=v6dviDA2DDsl7cj8', label: 'YouTube' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mahesh_since_2017?igsh=M2p3aDFrenUzNmQ3', label: 'Instagram' }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's connect!</h3>
            <p className={styles.infoDescription}>
              I'm a certified Developer, DevOps Engineer and Site Reliability Engineer with expertise in AWS, Docker, Kubernetes, and automation tools.
              I'm looking for opportunities to apply my skills in building scalable, reliable systems and infrastructure solutions.
            </p>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className={styles.infoItem}>
                  <i className={info.icon}></i>
                  <div>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <h4>Follow Me</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;