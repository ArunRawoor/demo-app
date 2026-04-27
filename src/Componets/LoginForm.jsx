import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

// Validation functions
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateLoginForm = (formData) => {
  const errors = {};
  
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email';
  }
  
  if (!formData.password) {
    errors.password = 'Password is required';
  }
  
  return errors;
};

function LoginForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: 'student@college.com', // Pre-filled for demo
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateLoginForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setLoginError('');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo credentials: student@college.com / password123
      if (formData.email === 'student@college.com' && formData.password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({
          name: 'Student User',
          email: formData.email,
          role: 'student'
        }));
        navigate('/dashboard');
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🎓 Grow-Tech System</h2>
        <p className="login-subtitle">Login to access your dashboard</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@college.com"
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label>
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="field-error">{errors.password}</div>}
          </div>
          
          {loginError && (
            <div className="error-message">
              {loginError}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="login-btn"
          >
            {isSubmitting ? <><span className="spinner"></span> Logging in...</> : 'Login'}
          </button>
        </form>
        
        <div className="register-link">
          Don't have an account?
          <a href="/register">Register here</a>
        </div>
        
        <div className="demo-box">
          <h4>📝 Demo Credentials:</h4>
          <p><strong>Email:</strong> student@college.com</p>
          <p><strong>Password:</strong> password123</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;