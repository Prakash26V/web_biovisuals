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


const Header = () => {
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
                <div className='header2'>
                    <Grid container spacing={0}>
                        <Grid item md={1} l={1} xl={1}xxl={1}  sm={9} xs={9}>
                            <img src={logo} alt="logo" className='logo' />
                        </Grid>
                        <Grid item md={11} l={11} xxl={11} xl={11} sm={0} xs={0}>
                            <div className='headerText'>
                                <Link to="/" style={{ border: 'none'}} className="menu-item">
                                    <a><h3>Biovisuals</h3> </a>
                                </Link>
                                <Link to="/user/icons" className="menu-item">
                                    <a><h3>Icon hub</h3> </a>
                                </Link>
                                <Link to="/user/scientificLayout" className="menu-item">
                                <a><h3>Scientific Layouts</h3> </a>
                                </Link>
                                <Link to="/user/resource" className="menu-item">
                                    <a><h3>Resources</h3> </a>
                                </Link>
                                <Link to="/user/pricing" className="menu-item">
                                    <a><h3>Pricing</h3> </a>
                                </Link>
                                <a><h3>Contact us</h3> </a>
                            </div>
                        </Grid>
                        <Grid item md={0} l={0} xxl={0} xl={0} s={3} xs={3}>
                            <div className='hamburger'>
                                <img src={menu} alt="menu" className='menu'
                                    onClick={handleOpenModal} />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <Modal
                    open={isModalOpen}
                    onClose={handleCloseModal} 
                >
                    <div>
                        <div className='menutext'>
                            <div className='tanuwedsmanu'>
                            <img src={xmark} alt="xmark" className='tenu'
                                        onClick={handleCloseModal} />
                            </div>
                            <div className='menulinks'>
                                <a><h3>Biovisuals</h3></a>
                                <a><h3>Icon hub</h3></a>
                                <Link to="/user/scientificLayout" className="menu-item">
                                <a><h3>Scientific Layouts</h3></a>
                                </Link>
                                <a><h3>Resources</h3></a>
                                <a><h3>Pricing</h3></a>
                                <a><h3>Contact us</h3></a>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
           
        </div>
    )
}

export default Header