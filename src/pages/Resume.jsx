import React from 'react';
import '../App.css';

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-card">
        <h3 className="resume-title">RESUME</h3>
        <div className="resume-download">
          <a
            href="https://drive.google.com/file/d/16Iknvc9gSn7DrRIAbPmL5nFpMG_VJiqz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;