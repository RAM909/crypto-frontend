import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function isLoggedIn() {
  return !!localStorage.getItem("token"); // Check if a token exists
}

const routesWithoutAuthentication = ['/login', '/register']; // List of routes that don't require authentication

function AuthHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname;

    if (!isLoggedIn() && !routesWithoutAuthentication.includes(currentPath)) {
      navigate('/login', { replace: true }); // Redirect to login if not logged in and the route requires authentication
    }
  }, [navigate, location]);

  return null;
}

function App() {
  return (
    <Router>
      <AuthHandler /> {/* Render AuthHandler inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
