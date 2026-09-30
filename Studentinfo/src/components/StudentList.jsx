import StudentCard from './StudentCard';

function StudentList(props) {
  return (
    <div className="student-grid">
      {props.students.map((student) => (
        <StudentCard key={student.rollNo} studentData={student} />
      ))}
    </div>
  );
}

export default StudentList;
