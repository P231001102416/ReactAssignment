import React, { useState } from 'react';
import HeaderStats from './components/HeaderStats';
import FilterPanel from './components/FilterPanel';
import EmployeeForm from './components/EmployeeForm';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const departments = ["Cultivation", "Logistics", "Dairy & Livestock", "Quality Control", "Administration", "Research & Development"];

  // Mock initial dataset array state engine
  const [employees, setEmployees] = useState([
    { name: "Arup Langal", empId: "OAGR001", dept: "Cultivation", gender: "Male", phone: "9876543210", localAddress: "Quarters No. 4, Farm Zone A", permAddress: "Medinipur" },
    { name: "Ananya Pathak", empId: "OAGR004", dept: "Quality Control", gender: "Female", phone: "9123456789", localAddress: "Flat 202, Agro-Heights", permAddress: "Tamilnadu" },
    { name: "Dr. Avro Mukhopadhyay", empId: "OAGR003", dept: "Research and Development", gender: "Male", phone: "9123456789", localAddress: "Flat 202, Agro-Heights", permAddress: "Karnatak"},
    { name: "Souradipa Khanna", empId: "OAGR009", dept: "Marketing", gender: "Female", phone: "9123456789", localAddress: "Flat 202, Agro-Heights", permAddress: "Chattagrampur"},
    { name: "Mulayan Jadabh", empId: "OAGR007", dept: "Dairy & Livestock", gender: "Male", phone: "8765432109", localAddress: "Barn Staff Complex B", permAddress: "Uttarpradesh" }
  ]);

  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // CRUD Feature: Add or Update Employee
  const handleFormSubmit = (data) => {
    if (editingEmployee) {
      // Update Mode Match mapping replacement loops
      setEmployees(employees.map(emp => emp.empId === data.empId ? data : emp));
      setEditingEmployee(null);
    } else {
      // Create Add Mode validation checks for duplicates
      if (employees.some(emp => emp.empId.toLowerCase() === data.empId.toLowerCase())) {
        alert("Action Aborted: Employee ID already registered.");
        return;
      }
      setEmployees([...employees, data]);
    }
  };

  // CRUD Feature: Delete Employee
  const handleDeleteEmployee = (empId) => {
    if (window.confirm(`Are you sure you want to remove employee ID: ${empId}?`)) {
      setEmployees(employees.filter((emp) => emp.empId !== empId));
      if (editingEmployee?.empId === empId) setEditingEmployee(null);
    }
  };

  // CRUD Feature: Enter Edit Tracking Mode
  const handleEditSelect = (employee) => {
    setEditingEmployee(employee);
  };

  // Search and Filtering pipeline computations
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) || 
                          emp.empId.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === "All" || emp.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="directory-app">
      <HeaderStats totalCount={employees.length} filteredCount={filteredEmployees.length} />
      
      <main className="directory-main">
        <div className="layout-grid">
          {/* Left Panel: Operations Console */}
          <div className="left-panel">
            <EmployeeForm 
              onSubmit={handleFormSubmit} 
              editingEmployee={editingEmployee}
              onCancel={() => setEditingEmployee(null)}
              departments={departments}
            />
          </div>

          {/* Right Panel: Interactive Records Grid Container */}
          <div className="right-panel">
            <FilterPanel 
              search={search} setSearch={setSearch}
              selectedDept={selectedDept} setSelectedDept={setSelectedDept}
              departments={departments}
            />

            {/* Conditional Rendering Fallback View UI blocks */}
            {filteredEmployees.length === 0 ? (
              <div className="empty-state">
                <p>No active workspace records matched your target parameters.</p>
              </div>
            ) : (
              <div className="records-grid">
                {filteredEmployees.map((emp) => (
                  <EmployeeCard 
                    key={emp.empId} 
                    employee={emp}
                    onEdit={handleEditSelect}
                    onDelete={handleDeleteEmployee}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
