import React from 'react';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>Fetching real-time climatic variables...</p>
    </div>
  );
}

export default LoadingSpinner;
