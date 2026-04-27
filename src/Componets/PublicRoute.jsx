import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (isAuthenticated) {
    // If already logged in, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
}

export default PublicRoute;