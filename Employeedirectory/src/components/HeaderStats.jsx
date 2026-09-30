import React from 'react';

function HeaderStats({ totalCount, filteredCount }) {
  return (
    <header className="directory-header">
      <div className="header-brand">
        <h1>🌽🚜 Organic AgroFarm Employee Directory</h1>
        <p>Operational Workforce Management System</p>
      </div>
      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-value">{totalCount}</span>
          <span className="stat-label">Total System Staff</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{filteredCount}</span>
          <span className="stat-label">Filtered Match Results</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderStats;
