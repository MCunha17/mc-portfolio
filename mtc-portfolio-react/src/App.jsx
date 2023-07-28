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
      <Header />
      <Navigation selectSection={setSelectedSection} selectedSection={selectedSection} />
      {section}
      <Footer />
    </>
  );
}

export default App;