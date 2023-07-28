import Project from './Project';

function Portfolio() {
  return (
    <section style={{ padding: '30px' }}>
      <h3 style={{ paddingBottom: '10px' }}>My Portfolio</h3>
      <div className="projects">
        <Project
          title="EcoPaw Tracker"
          description="Carbon emissions calculator based on mode of transportation."
          image="/images/ecopaw-tracker.png"
          projectLink="https://ecopaw-tracker-033283e6e802.herokuapp.com/"
          repoLink="https://github.com/MCunha17/ecopaw-tracker"
        />
        <Project
          title="Text Editor"
          description="PWA Text Editor for creating and managing note snippets."
          image="/images/text-editor.png"
          projectLink="https://install-text-editor-e4e157895075.herokuapp.com/"
          repoLink="https://github.com/MCunha17/text-editor"
        />
        <Project
          title="Nosql Social API"
          description="An API for a social network web application, API uses MongoDB database.."
          image="/images/nosql-social-api.png"
          projectLink="https://drive.google.com/file/d/1NTddNbJELPA3zj0SpjmnzcTY9BrMNdtj/view"
          repoLink="https://github.com/MCunha17/nosql-social-api"
        />
        <Project
          title="CMS Site Blog"
          description="Content management system with commenting functionality."
          image="/images/cms-site-blog.png"
          projectLink="https://cms-site-blog.herokuapp.com/"
          repoLink="https://github.com/MCunha17/cms-site-blog"
        />
        <Project
          title="Ecommerce Site Backend"
          description="Backend for an e-commerce site."
          image="/images/cms-site-backend.png"
          projectLink="https://drive.google.com/file/d/1sWL6UEiGLZhQTYTLvgbS63ME-vbP2DqE/view"
          repoLink="https://github.com/MCunha17/ecommerce-site-back-end"
        />
        <Project
          title="Employee Tracker"
          description="Command-line application for managing departments, roles, and employees."
          image="/images/employee-tracker.png"
          projectLink="https://drive.google.com/file/d/1sINT3tKlzLKeQ9XV1bZpjn8mwkw0_9Py/view"
          repoLink="https://github.com/MCunha17/employee-tracker"
        />
      </div>
    </section>
  );
}

export default Portfolio;