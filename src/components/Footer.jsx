import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com/in/mariabagliencunha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/MCunha17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
        </div>
        <p className="footer-text">© 2025 Maria Cunha</p>
      </div>
    </footer>
  );
}

export default Footer;