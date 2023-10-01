import React from 'react';

function MarketingProject({ title, description, image, projectLink }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image"/>
      <div className="card-body">
        <div style={{ flexGrow: 1 }}>
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <a href={projectLink} className="btn btn-project" target="_blank" rel="noopener noreferrer">See Project</a>
      </div>
    </div>
  );
}

export default MarketingProject;