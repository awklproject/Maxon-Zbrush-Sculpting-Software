// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Offers from './components/Offers';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
