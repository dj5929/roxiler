import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css'; // Custom CSS

function UserNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'user') {
      setUsername(user.username);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <div className="navbar-title">User DashBoard</div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/userpage">Dashboard</Link>
          <Link to="/user-stores">Stores</Link>
          <Link to="/user-settings">Settings</Link>
          <span className="navbar-username">Logged in as: {username}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;