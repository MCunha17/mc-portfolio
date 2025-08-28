import React from 'react';
import profilePhoto from '../assets/images/maria-cunha-photo.jpg';
import '../App.css';

function AboutMe({ selectSection }) {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Profile card */}
        <div className="photo-card">
          <img
            src={profilePhoto}
            alt="Profile of Maria Cunha"
            loading="lazy"
            decoding="async"
          />
          <p className="name">Maria Cunha</p>
          <hr className="horizontal-line" />
          <p className="position">CUSTOMER-CENTRIC STORYTELLER</p>
        </div>

        {/* Text content */}
        <div className="text-box">
          <p className="hello">Hello</p>

          {/* Buttons */}
          <div className="button-group">
            <button
              className="button-1"
              onClick={() => selectSection('Marketing Portfolio')}
            >
              Marketing Work
            </button>
            <button
              className="button-2"
              onClick={() => selectSection('Dev Portfolio')}
            >
              Dev Work
            </button>
          </div>

          {/* Summary */}
          <p className="summary"> I’m a senior marketing leader with 12+ years of experience in SaaS, media technology, and communications. I specialize in building impactful go-to-market strategies and driving unified brand positioning. I’ve led launches, guided cross-functional teams, and partnered with global leaders like Google, Meta, and Amazon. With a strong technical foundation—from digital development to AI-enabled campaigns, I translate complex ideas into compelling stories that fuel adoption, growth, and alignment across global stakeholders.
          </p>

          {/* Email */}
          <a
            href="mailto:cunha.maria.theresa@gmail.com"
            className="email-link"
          >
            cunha.maria.theresa@gmail.com
          </a>
        </div>
      </div>

      {/* Glance cards */}
      <div className="glance">
        <div className="glance-card">
          <span className="glance-label">Experience</span>
          <span className="glance-value">12+ years</span>
        </div>
        <div className="glance-card">
          <span className="glance-label">Strategic Partnerships</span>
          <span className="glance-value">Google · Meta · Amazon</span>
        </div>
        <div className="glance-card">
          <span className="glance-label">Business Impact</span>
          <span className="glance-value">$1B+ in wins enabled</span>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
