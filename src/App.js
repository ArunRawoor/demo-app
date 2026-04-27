// import logo from './logo.svg';
// import './App.css';
// import Greeting from './Componets/Greeting';
// import ClassComponentEx from './Componets/ClassComponentEx';
// import PrviosCount from './Componets/PrviosCount';
// import ParentComponent from './Componets/ParentComponent';
// import LocalStorage from './Componets/LocalStorage';
// import SessionStorage from "./Componets/SessionStorage"
// import Form1 from './Componets/Form1';
// import LoginForm from './Componets/LoginForm';
// import UserProfile from './UserProfile';
// import LiveClock from './LiveClock';
// import AllProducts from './Componets/AllProducts';
// import Timer from './Timer';
// import SingleProduct from './Componets/SingleProduct';
// import Bootstrap from './Componets/Bootstrap';
// import Hello from './Componets/Hello'
// import TextButtons from './Componets/TextButtons';

// function App() {
//   return (
//     <div className="App">
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider" /></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//    {/* <h1>Hiii</h1> */}

//    {/* <Greeting/> */}
//    {/* <ClassComponentEx/> */}
//    {/* <PrviosCount/> */}
//      {/* <ParentComponent/> */}
//      {/* <LocalStorage/> */}
//      {/* <SessionStorage/> */}
//      <TextButtons/>
//      {/* <Form1/> */}
//      {/* <LoginForm/> */}
//      {/* <UserProfile/> */}
//      {/* <LiveClock/> */}

//       {/* <AllProducts/> */}
//       {/* <SingleProduct productId={10}/> */}
//       {/* <Timer/> */}
//      {/* <Bootstrap/>  */}
//      {/* <Hello/> */}
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import User from "./Componets/User";
// import NonUser from "./Componets/NonUser";

// function App() {
//   const isLoggedIn = true;

//   return (
//     <div>
//       {isLoggedIn ? <User/> : <NonUser/>}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './Componets/RegistrationForm';
import LoginForm from './Componets/LoginForm';
import Dashboard from './Componets/Dashboard';
import ProtectedRoute from './Componets/ProtectedRoute';
import PublicRoute from './Componets/PublicRoute';
import './App.css'; // Import the CSS file

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-content">
              <Link to="/" className="logo">
                🎓Grow-Tech
              </Link>
              
              <div className="nav-links">
                {!isAuthenticated ? (
                  <>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                    <Link to="/register" className="btn-primary">
                      Register
                    </Link>
                  </>
                ) : (
                  <span className="welcome-text">
                    Welcome, {user.name || 'Student'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            {/* Public Routes - Redirect to dashboard if logged in */}
            <Route path="/login" element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            } />
            
            <Route path="/register" element={
              <PublicRoute>
                <RegistrationForm />
              </PublicRoute>
            } />
            
            {/* Protected Routes - Require authentication */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            {/* Default route - redirect to login or dashboard based on auth */}
            <Route path="/" element={
              isAuthenticated ? 
              <Navigate to="/dashboard" replace /> : 
              <Navigate to="/login" replace />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;