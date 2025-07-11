import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.jsx";
import MainPage from "./components/MainPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";
import AdminPage from "./components/AdminPage.jsx";
import UserPage from "./components/UserPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </Router>
  );
}
