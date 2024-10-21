import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NotFound.css'; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <Link to="/" className="not-found-link">Go back to Home</Link>
    </div>
  );
};

export default NotFound;