import React, { useState } from "react";
import Navigation from "./Navigation";
import "../App.css";

function Header({ selectSection, selectedSection }) {
  return (
    <header className="Header">
      <div className="header-bar">
        {/* Left side: Name + Title */}
        <div className="header-left">
          <h1 className="header-name">Maria Cunha</h1>
          <p className="header-title">Marketing & Communications</p>
        </div>

        {/* Right side: Navigation */}
        <Navigation selectSection={selectSection} selectedSection={selectedSection} />
      </div>
    </header>
  );
}

export default Header;