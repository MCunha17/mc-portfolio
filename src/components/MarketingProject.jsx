import React from 'react';
import '../App.css';

function MarketingProject({ title, description, image, projectLink }) {
  return (
    <article className="card marketing-card">
      {image && (
        <img
          className="card-img-top"
          src={image}
          alt={`${title} thumbnail`}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>

        {projectLink && (
          <div className="button-container">
            <a
              href={projectLink}
              className="btn-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Project
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default MarketingProject;
