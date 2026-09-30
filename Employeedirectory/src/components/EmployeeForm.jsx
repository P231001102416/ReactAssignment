import React, { useState, useEffect } from 'react';

function EmployeeForm({ onSubmit, editingEmployee, onCancel, departments }) {
  const initialState = {
    name: '', empId: '', dept: '', gender: 'Male', phone: '', localAddress: '', permAddress: ''
  };

  const [formData, setFormData] = useState(initialState);

  // Sync state if form transforms into Edit Target profile mode
  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialState);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.dept) {
      alert("Please select a target Department.");
      return;
    }
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <h3>{editingEmployee ? "✏️ Edit Employee Details" : "➕ Add New Employee"}</h3>
      <form onSubmit={handleFormSubmit} className="employee-form">
        <div className="form-group-row">
          <input
            type="text" name="name" placeholder="Full Name"
            value={formData.name} onChange={handleChange} required
          />
          <input
            type="text" name="empId" placeholder="Employee ID"
            value={formData.empId} onChange={handleChange} required
            disabled={!!editingEmployee} // Cannot mutate original primary IDs during edits
          />
        </div>

        <div className="form-group-row">
          <select name="dept" value={formData.dept} onChange={handleChange} required>
            <option value="">Select Department</option>
            {departments.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>

        <input
          type="tel" name="phone" placeholder="Phone Number"
          value={formData.phone} onChange={handleChange} required
        />
        
        <textarea
          name="localAddress" placeholder="Local Address" rows="2"
          value={formData.localAddress} onChange={handleChange} required
        />
        
        <textarea
          name="permAddress" placeholder="Permanent Address" rows="2"
          value={formData.permAddress} onChange={handleChange} required
        />

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {editingEmployee ? "Update Record" : "Save Employee"}
          </button>
          {editingEmployee && (
            <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
