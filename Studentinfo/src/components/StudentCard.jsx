function StudentCard(props) {
  // Destructuring props for cleaner code
  const { name, rollNo, department, semester, cgpa, photo } = props.studentData;

  return (
    <div className="student-card">
      {/* Renders the passed emoji photo or image string */}
      <div className="avatar">{photo}</div>
      <h3>{name}</h3>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Dept:</strong> {department}</p>
      <p><strong>Semester:</strong> {semester}</p>
      <div>
        <span className="cgpa-badge">CGPA: {cgpa}</span>
      </div>
    </div>
  );
}

export default StudentCard;
