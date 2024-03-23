// Logout component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');

            const response = await axios.post('http://localhost:5000/api/user/userLogout', { userId }, 
                { 
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            if (response.data.status === true) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                navigate('/');
            } else {
                console.error('Logout failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    // Return the function so that it can be called from the parent component
    return handleLogout;
};

export default Logout;
