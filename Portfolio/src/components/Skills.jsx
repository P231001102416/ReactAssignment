import React from 'react';

function Skills() {
  const technicalSkills = ["C", "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Web Design"];

  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
