import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
const About = lazy(() => import('./components/About/About'));
const Education = lazy(() => import('./components/Education/Education'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Achievements = lazy(() => import('./components/Achievements/Achievements'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <Hero />
      <main id="main">
        <Suspense fallback={<div className="lazy-fallback">Loading...</div>}>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
