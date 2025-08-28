import React from 'react';
import Project from '../components/Project';

import ecoPawTracker from '../assets/images/ecopaw-tracker.png';
import textEditor from '../assets/images/text-editor.png';
import nosqlSocialApi from '../assets/images/nosql-social-api.png';
import cmsSiteBlog from '../assets/images/cms-site-blog.png';
import cmsSiteBackend from '../assets/images/cms-site-backend.png';
import employeeTracker from '../assets/images/employee-tracker.png';
import techprep from '../assets/images/techprep-pro.png';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h3>DEVELOPMENT PROJECTS</h3>
      <div className="projects">
        <Project
          title="TechPrep Pro"
          description="Technical job-seeker application with quizzes, flashcards, and other resources."
          image={techprep}
          repoLink="https://github.com/annabellefosburgh/dangerous-wombat"
        />
        <Project
          title="EcoPaw Tracker"
          description="Carbon emissions calculator based on mode of transportation."
          image={ecoPawTracker}
          repoLink="https://github.com/MCunha17/ecopaw-tracker"
        />
        <Project
          title="Text Editor"
          description="PWA Text Editor for creating and managing note snippets."
          image={textEditor}
          repoLink="https://github.com/MCunha17/text-editor"
        />
        <Project
          title="NoSQL Social API"
          description="An API for a social network web application using MongoDB."
          image={nosqlSocialApi}
          repoLink="https://github.com/MCunha17/nosql-social-api"
          projectLink="https://drive.google.com/file/d/1NTddNbJELPA3zj0SpjmnzcTY9BrMNdtj/view"
        />
        <Project
          title="CMS Site Blog"
          description="Content management system with commenting functionality."
          image={cmsSiteBlog}
          repoLink="https://github.com/MCunha17/cms-site-blog"
        />
        <Project
          title="E-commerce Site Backend"
          description="Backend for an e-commerce site."
          image={cmsSiteBackend}
          repoLink="https://github.com/MCunha17/ecommerce-site-back-end"
          projectLink="https://drive.google.com/file/d/1sWL6UEiGLZhQTYTLvgbS63ME-vbP2DqE/view"
        />
        <Project
          title="Employee Tracker"
          description="Command-line application for managing departments, roles, and employees."
          image={employeeTracker}
          repoLink="https://github.com/MCunha17/employee-tracker"
          projectLink="https://drive.google.com/file/d/1sINT3tKlzLKeQ9XV1bZpjn8mwkw0_9Py/view"
        />
      </div>
    </section>
  );
}

export default Portfolio;