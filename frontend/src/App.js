
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';
import Profile from './auth/Profile';
import Home from './pages/Home';
import { useAuth } from './contexts/AuthContext';
import { useState } from 'react';
import { FaHome, FaUserPlus, FaSignInAlt, FaUser, FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <header className="navbar">
          <div className="nav-left">
            <Link to="/"> <FaHome /> Home</Link>
            <Link to="/register"> <FaUserPlus /> Register</Link>
            <Link to="/login"> <FaSignInAlt /> Login</Link>
            <Link to="/profile"> <FaUser /> Profile</Link>
          </div>
          <div className="nav-right">
            <button onClick={toggleDarkMode} className="icon-btn">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            {user && (
              <>
                <span className="user-name">{user.name}</span>
                <button onClick={logout}>Logout</button>
              </>
            )}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
