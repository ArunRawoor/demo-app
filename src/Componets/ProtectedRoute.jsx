import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render the protected component
  return children;
}

export default ProtectedRoute;