import React from 'react';

function Resume() {
  return (
    <section>
        <h3>SKILLS</h3>
            <ul>
                <li>Digital Marketing & Advertising: Appcues, Constant Contact, Google Campaign Manager 360, Google Display & Video 360, Heap, HubSpot, Mailchimp, Pardot, Salesforce CRM, Salesforce Marketing Cloud, Unbounce</li>
                <li>Content Creation & Design: Camtasia, Canva, Wix, WordPress</li>
                <li>Project & Task Management: Asana, Confluence, Jira</li>
                <li>Web Development & Programming: CSS, Express.js, HTML, JavaScript, MongoDB, Node.js, React</li>
                <li>Database Management: SQL</li>
                <li>Language: English (native), Portuguese (limited working proficiency)</li>
            </ul>

            <div style={{ marginTop: '20px' }}>
        <a
          href="../../public/images/maria-cunha-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;