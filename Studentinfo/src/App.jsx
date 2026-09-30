import { useState } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

function App() {
  // 1. Initial raw mock data array (using emojis as easy visual photos)
  const initialStudents = [
    { name: "Dipanjan Aru", rollNo: "2018PHARMA78U", department: "Pharmaceutical Science", semester: "4th", cgpa: 8.5, photo: "👨‍💻" },
    { name: "Mainak Mitra", rollNo: "EC104", department: "Electronics", semester: "6th", cgpa: 9.4, photo: "👩‍🔬" },
    { name: "Sagnik Ray", rollNo: "ME102", department: "Mechanical", semester: "2nd", cgpa: 7.8, photo: "🧑‍🔧" },
    { name: "Sneha Reddy", rollNo: "CS105", department: "Computer Science", semester: "4th", cgpa: 9.1, photo: "👩‍💻" },
  ];

  // 2. React state hook to keep track of the student data layout changes
  const [students, setStudents] = useState(initialStudents);
  const [isHighestFirst, setIsHighestFirst] = useState(true);

  // 3. Sorting Mechanism logic triggered by the button click
  const handleSort = () => {
    const sortedArray = [...students].sort((a, b) => {
      return isHighestFirst ? b.cgpa - a.cgpa : a.cgpa - b.cgpa;
    });
    
    setStudents(sortedArray);
    setIsHighestFirst(!isHighestFirst); // Toggle sorting sequence for next click
  };

  return (
    <div>
      <Header />
      <main className="container">
        
        {/* Sorting Controller Bar */}
        <div className="controls">
          <h2>Total Students: {students.length}</h2>
          <button className="sort-btn" onClick={handleSort}>
            Sort by CGPA ({isHighestFirst ? "Highest First" : "Lowest First"})
          </button>
        </div>

        {/* Data Passed down via Props */}
        <StudentList students={students} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
