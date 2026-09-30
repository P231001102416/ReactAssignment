import React from 'react';

function Education() {
  const academicDetails = [
    { degree: "Bachelor of Computer Application", school: "Tech India main University", year: "2025 - Present" },
    { degree: "Senior Secondary School Examination (Class 10+2)", school: "Bihar Council of Higher Secondary Education, NIOS", year: "2022 - 2024, 2025" },
    { degree: "Secondary School Examination (Class 10)", school: "Bihar Board of Secondary Education", year: "2017 - 2022" }
  ];

  return (
    <section id="education" className="section education-section">
      <h2>Education</h2>
      <div className="timeline">
        {academicDetails.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.degree}</h3>
            <h4>{item.school}</h4>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
