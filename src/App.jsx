import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import MarketingPortfolio from "./pages/MarketingPortfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("About Me");

  const renderSection = () => {
    switch (selectedSection) {
      case "About Me":
        return <AboutMe selectSection={setSelectedSection} />;
      case "Portfolio":
        return <Portfolio />;
      case "Dev Portfolio":
        return <Portfolio />;
      case "Marketing Portfolio":
        return <MarketingPortfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe selectSection={setSelectedSection} />;
    }
  };

  return (
    <div className="app-container">
      {/* Unified header/nav */}
      <Header selectSection={setSelectedSection} selectedSection={selectedSection} />

      {/* Main content */}
      <main className="main-content">{renderSection()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;