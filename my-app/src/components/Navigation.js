import React, { useState } from 'react';

function Navigation({ selectSection, selectedSection }) {
  // State to track the selected section
  const [selected, setSelected] = useState(selectedSection);

  // Function to handle button click and update the selected section
  const handleButtonClick = (section) => {
    setSelected(section);
    selectSection(section);
  };

  return (
    <nav className="nav-container">
      <ul className="d-flex list-unstyled nav-list">
        <li className="nav-item">
          <button
            type="button"
            className={`btn nav-button ${selected === 'About Me' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('About Me')}
          >
            ABOUT
          </button>
        </li>
        <li className="nav-item dropdown">
          <button
            type="button"
            className={`btn nav-button ${selected.includes('Portfolio') ? 'btn-primary' : 'btn-light'}`}
          >
            PORTFOLIO
          </button>
          <div className="dropdown-content">
            <button className="dropdown-item" onClick={() => handleButtonClick('Marketing Portfolio')}>MARKETING PROJECTS</button>
            <button className="dropdown-item" onClick={() => handleButtonClick('Dev Portfolio')}>DEV PROJECTS</button>
          </div>
        </li>
        { /* <li className="nav-item">
          <button
            type="button"
            className={`btn nav-button ${selected === 'Contact' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('Contact')}
          >
            CONTACT
          </button>
        </li>
        */ }
        <li className="nav-item">
          <button
            type="button"
            className={`btn nav-button ${selected === 'Resume' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('Resume')}
          >
            RESUME
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;