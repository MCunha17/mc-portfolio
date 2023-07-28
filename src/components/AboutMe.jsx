import React from 'react';
import profilePhoto from '../../public/images/maria-cunha-photo.jpeg';

function AboutMe() {
  return (
    <section style={{ padding: '30px' }}>
      <h3 style={{ paddingBottom: '10px' }}>About Me</h3>
      <img src={profilePhoto} alt="Profile Photo" style={{ float: 'left', marginRight: '20px', marginBottom: '10px', maxWidth: '200px' }} />
      <p>With over a decade of experience in product marketing for the advertising technology industry, I have always had a desire to be more involved in product creation and am now transitioning into a career as a developer.</p>
      <br />
      <p>Through my background in product marketing, I've developed valuable skills in project management, collaboration, and communication. Working closely with development teams has also given me a solid understanding of the software development process.</p>
      <br />
      <p>I'm currently expanding my technical skills through a coding bootcamp and personal projects. My goal is to become a full-stack developer and contribute to the creation of innovative software. I'm thrilled at the opportunity to combine my marketing background with my newfound technical skills to create impactful solutions.</p>
    </section>
  );
}

export default AboutMe;