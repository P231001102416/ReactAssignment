import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="error-banner">
      <span className="error-icon">⚠️</span>
      <p className="error-text">{message}</p>
    </div>
  );
}

export default ErrorMessage;
