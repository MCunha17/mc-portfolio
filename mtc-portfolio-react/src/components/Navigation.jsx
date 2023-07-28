function Navigation({ selectSection, selectedSection }) {
    return (
      <nav>
        <ul className="d-flex list-unstyled">
          <li><button onClick={() => selectSection('About Me')}>About</button></li>
          <li><button onClick={() => selectSection('Portfolio')}>Work</button></li>
          <li><button onClick={() => selectSection('Contact')}>Contact</button></li>
          <li><button onClick={() => selectSection('Resume')}>Resume</button></li>
        </ul>
      </nav>
    );
}
  
export default Navigation;  