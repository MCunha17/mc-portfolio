import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="Footer">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mariabagliencunha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={48} style={{ marginRight: '20px', color: '#808080' }} />
          </a>
          <a
            href="https://github.com/MCunha17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={48} style={{ color: '#808080' }} />
          </a>
        </div>
        <h5 style={{ fontSize: '14px' }}>Created by Maria Cunha, 2023.</h5>
      </footer>
    </div>
  );
}

export default Footer;