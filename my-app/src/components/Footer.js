import React from 'react';

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
          </a>
          <a
            href="https://github.com/MCunha17"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
        <h5 style={{ 
          marginTop: '15px',
          marginBottom: '25px',
          fontFamily: 'Helvetica, sans-serif', 
          fontSize: '12px', 
          color: '#ffffff',
        }}>Created by Maria Cunha, 2023.</h5>
      </footer>
    </div>
  );
}

export default Footer;