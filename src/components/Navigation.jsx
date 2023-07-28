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
    <nav>
      <ul className="d-flex list-unstyled">
        <li>
          <button
            type="button"
            className={`btn ${selected === 'About Me' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('About Me')}
          >
            About
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`btn ${selected === 'Portfolio' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('Portfolio')}
          >
            Work
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`btn ${selected === 'Contact' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('Contact')}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`btn ${selected === 'Resume' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => handleButtonClick('Resume')}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;