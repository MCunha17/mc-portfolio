import React from 'react';

function Project({ title, description, image, projectLink, repoLink }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image"/>
      <div className="card-body">
        <div style={{ flexGrow: 1 }}>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="button-container">
          <a href={repoLink} className="btn btn-repository" target="_blank" rel="noopener noreferrer">See Repository</a>
          {projectLink && 
            <a href={projectLink} className="btn btn-project" target="_blank" rel="noopener noreferrer">See Project</a>
          }
        </div>
      </div>
    </div>
  );
}

export default Project;