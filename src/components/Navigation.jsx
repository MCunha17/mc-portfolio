function Navigation({ selectSection, selectedSection }) {
    return (
      <nav>
        <ul className="d-flex list-unstyled">
          <li><button type="button" className="btn btn-light" onClick={() => selectSection('About Me')}>About</button></li>
          <li><button type="button" className="btn btn-light" onClick={() => selectSection('Portfolio')}>Work</button></li>
          <li><button type="button" className="btn btn-light" onClick={() => selectSection('Contact')}>Contact</button></li>
          <li><button type="button" className="btn btn-light" onClick={() => selectSection('Resume')}>Resume</button></li>
        </ul>
      </nav>
    );
}
  
export default Navigation;