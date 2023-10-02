import Project from '../pages/Portfolio';
import techprep from '../assets/images/techprep-pro.png';
import ecoPawTracker from '../assets/images/ecopaw-tracker.png';
import textEditor from '../assets/images/text-editor.png';
import nosqlSocialApi from '../assets/images/nosql-social-api.png';
import cmsSiteBlog from '../assets/images/cms-site-blog.png';
import regexTutorial from '../assets/images/regex-tutorial.png';
import cmsSiteBackend from '../assets/images/cms-site-backend.png';
import employeeTracker from '../assets/images/employee-tracker.png';
import noteTaker from '../assets/images/note-taker.png';
import logoGenerator from '../assets/images/logo-generator.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import workdayScheduler from '../assets/images/workday-scheduler.png';
import codingQuiz from '../assets/images/js-coding-quiz.png';
import passwordGenerator from '../assets/images/password-generator.png';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h3 style={{ 
        paddingTop: '25px', 
        fontFamily: 'Helvetica, sans-serif', 
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#ffffff',
      }}>DEVELOPMENT PROJECTS</h3>
      <div className="projects">
      <Project
          title="TechPrep Pro"
          description="Technical job-seeker application with quizzes, flashcards, and other resources. HTML, CSS, JavaScript, Express, React, Mongoose, Bcrypt, React, Graphql"
          image={techprep}
          repoLink="https://github.com/annabellefosburgh/dangerous-wombat"
          // projectLink="https://techprep-pro-4b8ef967b7cd.herokuapp.com/"
        />
        <Project
          title="EcoPaw Tracker"
          description="Carbon emissions calculator based on mode of transportation. CSS, JavaScript, Express, Handlebars, MySQL, Sequelize"
          image={ecoPawTracker}
          repoLink="https://github.com/MCunha17/ecopaw-tracker"
          // projectLink="https://ecopaw-tracker-033283e6e802.herokuapp.com/"
        />
        <Project
          title="Text Editor"
          description="PWA Text Editor for creating and managing note snippets. HTML, CSS, JavaScript, Node, Express, IndexedDB, Webpack, Workbox"
          image={textEditor}
          repoLink="https://github.com/MCunha17/text-editor"
          // projectLink="https://install-text-editor-e4e157895075.herokuapp.com/"
        />
        <Project
          title="Nosql Social API"
          description="An API for a social network web application, API uses MongoDB database. JavaScript, Node.js, Express.js, MongoDB, Mongoose"
          image={nosqlSocialApi}
          repoLink="https://github.com/MCunha17/nosql-social-api"
          projectLink="https://drive.google.com/file/d/1NTddNbJELPA3zj0SpjmnzcTY9BrMNdtj/view"
        />
        <Project
          title="CMS Site Blog"
          description="Content management system with commenting functionality. CSS, JavaScript, Node, Express, Handlebars, MySQL, Sequelize, Bcrypt"
          image={cmsSiteBlog}
          repoLink="https://github.com/MCunha17/cms-site-blog"
          // projectLink="https://cms-site-blog.herokuapp.com/"
        />
        <Project
          title="Regex Tutorial: Matching an HTML Tag"
          description="Gist tutorial on Regex."
          image={regexTutorial}
          repoLink="https://github.com/MCunha17/tutorial-regex"
          projectLink="https://gist.github.com/MCunha17/489c6681535360eca18f227991d32648"
        />
        <Project
          title="Ecommerce Site Backend"
          description="Backend for an e-commerce site. JavaScript, Node, Express, MySQL, Sequelize"
          image={cmsSiteBackend}
          repoLink="https://github.com/MCunha17/ecommerce-site-back-end"
          projectLink="https://drive.google.com/file/d/1sWL6UEiGLZhQTYTLvgbS63ME-vbP2DqE/view"
        />
        <Project
          title="Employee Tracker"
          description="Command-line application for managing departments, roles, and employees. JavaScript, Node, MySQL, Inquirer"
          image={employeeTracker}
          repoLink="https://github.com/MCunha17/employee-tracker"
          projectLink="https://drive.google.com/file/d/1sINT3tKlzLKeQ9XV1bZpjn8mwkw0_9Py/view"
        />
        <Project
          title="Note Taker"
          description="The Note Taker application allows users to write, save, and delete notes to keep track of items. HTML, CSS, JavaScript"
          image={noteTaker}
          repoLink="https://github.com/MCunha17/note-taker-app"
          // projectLink=""
        />
        <Project
          title="Logo Generator"
          description="SVG-formatted logo generator based on user prompts. JavaScript"
          image={logoGenerator}
          repoLink="https://github.com/MCunha17/logo-generator"
          projectLink="https://drive.google.com/file/d/1na0_E13N9XFGvsJWEmZcN4__VQPrVyEH/view"
        />
        <Project
          title="Weather Dashboard"
          description="The Weather Dashboard helps travelers plan trips with current and 5-day forecasted weather information. HTML, CSS, JavaScript, OpenWeatherAPI"
          image={weatherDashboard}
          repoLink="https://github.com/MCunha17/city-weather-dash"
          projectLink="https://mcunha17.github.io/city-weather-dash/"
        />
        <Project
          title="Workday Scheduler"
          description="Web application that displays each hour of the business day. Users can add events and better plan their daily schedule. HTML, CSS, JavaScript"
          image={workdayScheduler}
          repoLink="https://github.com/MCunha17/work-day-scheduler"
          projectLink="https://mcunha17.github.io/work-day-scheduler/"
        />
        <Project
          title="JavaScript Coding Quiz"
          description="A timed quiz on JavaScript fundamentals that stores high scores. HTML, CSS, JavaScript"
          image={codingQuiz}
          repoLink="https://github.com/MCunha17/js-coding-quiz"
          projectLink="https://mcunha17.github.io/js-coding-quiz/"
        />
        <Project
          title="Password Generator"
          description="A Password Generator where users can select character criteria to output a randomly generated password. HTML, CSS, JavaScript"
          image={passwordGenerator}
          repoLink="https://github.com/MCunha17/password-generator"
          projectLink="https://mcunha17.github.io/password-generator/"
        />
      </div>
    </section>
  );
}

export default Portfolio;