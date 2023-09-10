import React from 'react';
import profilePhoto from '../assets/images/maria-cunha-photo.jpeg';
import '../App.css';

function AboutMe() {
  return (
    <section style={{ padding: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          padding: '30px',
          borderRadius: '10px',
          width: '80%',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: '10px',
          }}
        >
          {/* Photo Box */}
          <div
            style={{
              width: '300px',
              padding: '30px',
              backgroundColor: 'white',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderBottom: '25px solid #7AB988',
            }}
          >
            <img
              src={profilePhoto}
              alt="Profile Photo"
              style={{
                width: '75%',
                flex: '0.25',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                flex: '0.75',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p className="center-align name" style={{ margin: 0 }}>Maria Cunha</p>
              <hr className="horizontal-line" />
              <p className="center-align position" style={{ margin: 0 }}>MARKETER</p>
            </div>
          </div>
          {/* Text Box */}
          <div className="text-box">
            <p className="hello">Hello</p>
            {/* Buttons */}
            <div className="button-group">
              <button className="button-1">Marketing Work</button>
              <button className="button-2">Dev Work</button>
            </div>
            <p className="summary">Solutions evangelist with 10+ years of marketing experience and a strong grasp of development fundamentals, eager to contribute creativity, passion, and specialized knowledge in an entrepreneurial team environment. My understanding of how products function at a technical level empowers me to market them more effectively, bridging the gaps between development, sales, and end users.</p>
            {/* Email */}
            <a href="mailto:cunha.maria.theresa@gmail.com" className="email-link">cunha.maria.theresa@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;