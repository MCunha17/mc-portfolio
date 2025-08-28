import React from 'react';
import '../App.css';

function Project({ title, description, image, projectLink, repoLink }) {
  return (
    <div className="card">
      {image && (
        <img className="card-img-top" src={image} alt={`${title} thumbnail`} />
      )}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>

        <div className="button-container">
          {repoLink && (
            <a
              href={repoLink}
              className="btn-repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Repository
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              className="btn-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;