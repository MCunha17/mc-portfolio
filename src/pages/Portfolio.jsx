import React from 'react';

function Project({ title, description, image, projectLink, repoLink }) {
  return (
    <div className="card" style={{ width: '400px' }}>
      <img className="card-img-top" src={image} alt="Card image" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href={projectLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">See Project</a>
        <a href={repoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">See Repository</a>
      </div>
    </div>
  );
}

export default Project;