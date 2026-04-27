import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  return (
    <div className="login-container">
      <div className="login-card" style={{ maxWidth: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 className="login-title" style={{ marginBottom: 0 }}>Welcome, {user.name || 'Student'}! 🎉</h2>
          <button onClick={handleLogout} className="login-btn" style={{ width: 'auto', padding: '10px 20px' }}>
            Logout
          </button>
        </div>
        
        <div className="demo-box" style={{ background: '#d4edda', borderLeftColor: '#28a745' }}>
          <p>✅ You have successfully logged in to the protected dashboard.</p>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '15px' }}>Your Profile</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role || 'Student'}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;