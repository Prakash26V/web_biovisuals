import React, { useState } from 'react';
import { Button, Grid, Modal } from '@mui/material';
import logo from '../assets/Images/logo.png';
import menu from '../assets/Images/menu.png';
import xmark from '../assets/Images/x-mark.png';
import Login from '../pages/Login';
import Register from '../pages/Register';
import OtpScreen from "../pages/OtpScreen";
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


const Header1 = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close
    const { otpScreen, setOtpscreen, otpSent, setOtpSent, showCreateAccountModal, setShowCreateAccountModal, userRegister, verifyOtpRequest, userEmail } = useAuthContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [passwordModal, setPasswordmodal] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true); // Function to open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Function to close modal
    };

    const handleCreateAccount = () => {
        setShowCreateAccountModal(true);
        setShowLoginModal(false);
        setIsMenuOpen(false);
        setOtpscreen(false);
        setPasswordmodal(false);
    };

    const handleLogin = () => {
        setShowLoginModal(true);
        setShowCreateAccountModal(false);
        setIsMenuOpen(false);
        setOtpscreen(false);
        setPasswordmodal(false);
    };

    return (
        <div className='backgroundcol'>
            <div>
                <div className='headerDiv'>
                    <div className='headerButtons'>
                        <Button 
                            sx={{ mr: '10px', color: '#B11818', }}
                            onClick={handleLogin}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                mr: '10px',
                                backgroundColor: '#8DAFE2',
                                fontSize: '16px',
                            }}
                            onClick={handleCreateAccount}
                        >
                            <b> Free Sign up </b>
                        </Button>
                    </div>
                </div>
            </div>

            {/* login form */}
            {showLoginModal && (
                <Login visible={showLoginModal} visibleSetter={setShowLoginModal} onCancel={handleCloseModal} />
            )}

            {/* Create Account */}
            {showCreateAccountModal && (
                <Register handleCloseModal={handleCloseModal} handleLogin={handleLogin} />
            )}

            {/* OTP Screen */}
            {otpScreen && (
                <OtpScreen handleCloseModal={handleCloseModal} />
            )}
        </div>
    )
}

export default Header1
