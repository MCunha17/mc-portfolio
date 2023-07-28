import React from 'react';

function Resume() {
  return (
    <section>
        <h2>Maria Cunha</h2>
        <p>Austin, Texas · (312) 888-6917 · cunha.maria.theresa@gmail.com</p>
        <p>GitHub: <a href="https://github.com/MCunha17" target="_blank" rel="noopener noreferrer">github.com/MCunha17</a></p>
        <br></br>

        <h3>SUMMARY</h3>
        <p>Seasoned Product Marketing Director with over a decade of experience in the advertising technology sector. Known for driving revenue growth, crafting compelling product positioning, and leading successful Go-To-Market strategies. Currently enhancing technical acumen via a Coding Bootcamp.</p>
        <br></br>
        <h3>PROFESSIONAL HISTORY</h3>

        {/* IPG Mediabrands */}
        <div className="resume-item">
            <h4>IPG Mediabrands</h4>
            <p>April 2022 - Present</p>
            <p>Group Director, Product Marketing at Reprise Digital & Initiative Agencies</p>
            <ul>
                <li>Repositioned Mediabrands' product suite, consolidating 160 applications across four agencies into one portfolio, contributing to a $1.4B new business acquisition.</li>
                <li>Partnered with cross-functional teams to highlight proprietary AI products through impactful digital marketing assets, including landing pages, white papers, and email campaigns.</li>
                <li>Procured $2.5MM in development funds from industry leaders like Google and Meta for innovative solution deployment.</li>
                <li>Launched a product-centric monthly newsletter for a global audience of over 3,000 subscribers.</li>
                <li>Developed and maintained a centralized product resource library, facilitating access to over 60 promotional and enablement materials.</li>
            </ul>
        </div>

        {/* Publicis Media */}
        <div className="resume-item">
            <h4>Publicis Media</h4>
            <p>August 2015 - March 2022</p>
            <p>Director, Product Marketing (Promoted from Associate Director, Product Marketing, October 2021)</p>
            {/* Add more details about the role */}
        </div>

        {/* Add other job experiences as needed */}
    
        <br></br>
        <h3>VOLUNTEER HISTORY</h3>

        {/* Women's Storybook Project */}
        <div className="resume-item">
            <h4>Women’s Storybook Project</h4>
            <p>October 2022 - Present</p>
            <ul>
            <li>Designed Instagram posts to promote the non-profit’s mission of connecting incarcerated mothers with their children through reading.</li>
            <li>Managed donor and volunteer contact lists, running targeted email campaigns with an average 62% open rate and 6% click rate.</li>
            <li>Coordinated monthly book club events for volunteers, including securing authors for presentations.</li>
            </ul>
        </div>

        <br></br>
        <h3>EDUCATIONAL HISTORY</h3>

        {/* University of Wisconsin-Madison */}
        <div className="resume-item">
            <h4>University of Wisconsin-Madison (in partnership with edX)</h4>
            <p>February 2023 - August 2023</p>
            <p>Coding Bootcamp Certification</p>
        </div>

        {/* DePaul University */}
        <div className="resume-item">
            <h4>DePaul University</h4>
            <p>September 2016 - April 2019</p>
            <p>MBA, Concentrations in Marketing and Management | GPA 3.5/4.0</p>
            <p>September 2008 - June 2012</p>
            <p>BS, Journalism & BS, Public Relations and Advertising | GPA 3.8/4.0</p>
        </div>

        <br></br>
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