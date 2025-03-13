import './styles/App.scss'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Elisabeth Bach</h1>
        <h2>Frontend Developer</h2>
        <p></p>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a junior Developer</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project items will go here */}
          <div className="project-card">
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <a href="mailto:elisabeth95bach@gmail.com">Email Me</a>
          <a href="https://www.linkedin.com/in/elisabeth-bach/">LinkedIn</a>
          <a href="https://github.com/EllieBach">GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default App
