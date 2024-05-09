// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth({ token: null, user: null });
        navigate('/login');
    };

    return (
        <div>
            <h2>Hello, {auth.user ? auth.user.username : 'Guest'}!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
