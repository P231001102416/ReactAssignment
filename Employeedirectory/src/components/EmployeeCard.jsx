import React from 'react';

function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="employee-card">
      <div className="card-header">
        <h3>{employee.name}</h3>
        <span className="emp-id">ID: {employee.empId}</span>
      </div>
      <div className="card-body">
        <p><strong>Department:</strong> <span className="dept-tag">{employee.dept}</span></p>
        <p><strong>Gender:</strong> {employee.gender}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <div className="address-block">
          <p><strong>Local Address:</strong> {employee.localAddress}</p>
          <p><strong>Permanent Address:</strong> {employee.permAddress}</p>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(employee)}>✏️ Edit</button>
        <button className="btn-delete" onClick={() => onDelete(employee.empId)}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
