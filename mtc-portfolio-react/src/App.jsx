import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [selectedSection, setSelectedSection] = useState('About Me');

  let section;

  switch(selectedSection) {
    case 'About Me':
      section = <AboutMe />;
      break;
    case 'Portfolio':
      section = <Portfolio />;
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
    <>
      <div className="Header d-flex flex-wrap position-relative mx-1" style={{backgroundImage: "url('/assets/images/header-image.jpg')", height: "125px"}}>
        <Header />
        <nav className="Navigation position-absolute d-flex flex-wrap justify-content-end align-items-center py-1 pr-1" style={{right: 0, top: 0}}>
          <Navigation selectSection={setSelectedSection} selectedSection={selectedSection} />
        </nav>
      </div>
      {section}
      <Footer />
    </>
  );
}

export default App;