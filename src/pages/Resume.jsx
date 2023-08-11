import React from 'react';
import resume from '../assets/maria-cunha-resume.pdf';

function Resume() {
    return (
      <section style={{ padding: '30px' }}>
          <h3>Resume</h3>
          <div style={{ marginBottom: '20px' }}>
              <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
              >
                  Download My Resume
              </a>
          </div>
          <h4>Front-end Proficiencies</h4>
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>Responsive design</li>
                  <li>React</li>
                  <li>Bootstrap</li>
              </ul>
          <h4>Back-end Proficiencies</h4>
              <ul>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
              </ul>
      </section>
    );
  }

export default Resume;