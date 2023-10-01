import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './components/Project';
import MarketingPortfolio from './components/MarketingProject.js';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
  const [selectedSection, setSelectedSection] = useState('About Me');

  let section;

  switch(selectedSection) {
    case 'About Me':
      section = <AboutMe />;
      break;
    case 'Dev Portfolio':
      section = <Portfolio />;
      break;
    case 'Marketing Portfolio':
      section = <MarketingPortfolio />;
      break;
    case 'Contact':
      section = <Contact />;
      break;
    case 'Resume':
      section = <Resume />;
      break;
    default:
      section = <AboutMe />;
  }

  return (
    <div style={{ backgroundColor: '#0B5351' }}>
      <div className="Header d-flex flex-wrap position-relative mx-1" style={{backgroundImage: "url('/assets/images/header-image.jpg')", height: "100px"}}>
        <Header />
        <nav className="Navigation position-absolute d-flex flex-wrap align-items-center py-1 pl-1" style={{left: 25, top: 0, bottom: 0}}>
        <Navigation selectSection={setSelectedSection} selectedSection={selectedSection} />
      </nav>
      </div>
      {section}
      <Footer />
      </div>
  );
}

export default App;