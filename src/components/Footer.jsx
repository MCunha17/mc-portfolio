import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <h5>Created by Maria Cunha, 2023.</h5>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/mariacunha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/MCunha17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;