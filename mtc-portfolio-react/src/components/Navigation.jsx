function Navigation({ selectSection, selectedSection }) {
    return (
      <nav>
        {/* navigation placeholder */}
        <ul>
          <li onClick={() => selectSection('About Me')}>About Me</li>
          {/* repeat for other sections */}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;