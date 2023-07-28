import { useState } from 'react'
import './App.css'

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