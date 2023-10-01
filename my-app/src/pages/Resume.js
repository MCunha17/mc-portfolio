import React from 'react';
import resume from '../assets/maria-cunha-resume.pdf';

function Resume() {
    return (
      <section style={{ padding: '10px 75px' }}>
          <h3 style={{
            paddingTop: '25px',
            marginBottom: '25px',
            fontFamily: 'Helvetica, sans-serif', 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#ffffff',
      }}>RESUME</h3>
          <div className='resume-download'>
              <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
              >
                  Download My Resume
              </a>
          </div>
          <h4 className='proficiency-heading'>Front-end Proficiencies</h4>
              <ul className='proficiency-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>Responsive design</li>
                  <li>React</li>
                  <li>Bootstrap</li>
              </ul>
          <h4 className='proficiency-heading'>Back-end Proficiencies</h4>
              <ul className='proficiency-list'>
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