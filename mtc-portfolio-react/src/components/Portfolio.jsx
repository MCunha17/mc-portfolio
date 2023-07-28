import Project from './Project';

function Portfolio() {
  return (
    <section>
      <h2>My Portfolio</h2>
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
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
}

export default Portfolio;