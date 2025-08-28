import React, { useState } from "react";

function Navigation({ selectSection, selectedSection }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (section) => {
    selectSection(section);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <button
            className={`nav-button ${selectedSection === "About Me" ? "active" : ""}`}
            onClick={() => selectSection("About Me")}
          >
            ABOUT
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-button ${selectedSection.includes("Portfolio") ? "active" : ""}`}
            onClick={handleDropdownToggle}
          >
            PORTFOLIO ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button
                className="dropdown-item"
                onClick={() => handleSelect("Marketing Portfolio")}
              >
                MARKETING PROJECTS
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleSelect("Dev Portfolio")}
              >
                DEV PROJECTS
              </button>
            </div>
          )}
        </li>

        <li className="nav-item">
          <button
            className={`nav-button ${selectedSection === "Resume" ? "active" : ""}`}
            onClick={() => selectSection("Resume")}
          >
            RESUME
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-button ${selectedSection === "Contact" ? "active" : ""}`}
            onClick={() => selectSection("Contact")}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;