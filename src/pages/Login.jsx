import React, { useEffect, useState } from "react";
import {
    Autocomplete,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Radio,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Input
} from "@mui/material";
import loginImg1 from '../assets/Images/loginImg1.png';
import logindoc from '../assets/Images/logindoc.png';
import yahoo from '../assets/Images/yahoo.png';
import window from '../assets/Images/windows-logo.png';
import google from '../assets/Images/google.png';
import bgno9 from '../assets/Images/bgno9.png';
import cross from '../assets/Images/cross.png';
import { forgotPassword, verifyOtpRequest } from "../utils/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import OtpInput from 'react-otp-input';
import OtpInput from 'react18-input-otp';
// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
// import GoogleFeatures from '../components/GoogleFeatures';
// import SignInFlows from '../components/SignInFlows';

// import { Flows } from '../types/enums';
// import AuthorizationFeatures from '../components/AuthorizationFeatures';


import axios from "axios";
import { base_url } from "../utils/service";
import googleLogo from "../assets/Images/google.png"
import { useAuthContext } from "../context/AuthContext";

const Login = ({ visible, visibleSetter }) => {
    const navigate = useNavigate()
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [passwordModal, setPasswordmodal] = useState(false);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const [otpscreen, setOtpscreen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [countdown, setCountdown] = useState(330); // 5 minutes and 30 seconds in seconds
    const [otp, setOtp] = useState('');
    const [resendDisabled, setResendDisabled] = useState(false);
    const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otpSent, setOtpSent] = useState(false);
    const { setValue, UserLogin } = useAuthContext();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleInputChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    };

    const onFinish = async () => {
        UserLogin(loginData)
    };

    const handleCloseModal = () => {
        setShowLoginModal(false);
        setPasswordmodal(false);
        setShowCreateAccountModal(false);
        setOtpscreen(false);
        visibleSetter(!visible);
    };

    const handleCreateAccount = () => {
        setShowCreateAccountModal(true);
        setShowLoginModal(false);
    };

    const handlePasswordModal = () => {
        setShowLoginModal(false);
        setPasswordmodal(true);
    };

    const handleOtpSubmit = async () => {
        console.log("otp", otp);
        try {
            console.log("Entered OTP:", otp);
            console.log("EmailOrphone:", loginData.email);

            const otpVerificationResponse = await verifyOtpRequest(otp, loginData.email)
            console.log("OTP Verification Response:", otpVerificationResponse);
            if (otpVerificationResponse?.data?.success === true) {
                Swal.fire({
                    icon: "info",
                    title: "success!",
                    text: otpVerificationResponse?.data?.msg || "verify OTP successful",
                });
                // navigate('/user/dashoard')
                setPasswordmodal(true);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: otpVerificationResponse?.data?.msg || "Failed to verify OTP",
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while verifying OTP. Please try again.',
            });
        }
    };

    const handleForgotPassword = async () => {
        try {
            console.log('Login Data:', loginData);

            // Check if either email or phone is provided
            if (loginData.email && !loginData.phone) {
                console.log('Login email Data:', loginData.email);
                const response = await forgotPassword({ email: loginData.email });
                console.log('Forgot Password Response:', response);
                if (response && response.data && response.data.status === true) {
                    Swal.fire({
                        icon: 'info',
                        title: 'OTP Sent!',
                        text: response.data.message,
                    });
                    setOtpSent(true); // Mark OTP as sent
                    setOtpscreen(true); // Open OTP screen
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: response && response.data && response.data.message || 'Failed to send OTP',
                    });
                }
            } else if (loginData.phone && !loginData.email) {
                const response = await forgotPassword({ phone: loginData.phone });
                console.log('Forgot Password Response:', response);
                if (response && response.data && response.data.status === true) {
                    Swal.fire({
                        icon: 'info',
                        title: 'OTP Sent!',
                        text: response.data.message,
                    });
                    setOtpSent(true); // Mark OTP as sent
                    setOtpscreen(true); // Open OTP screen
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: response && response.data && response.data.message || 'Failed to send OTP',
                    });
                }
            } else {
                // Handle case where either both email and phone are provided or neither is provided
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Please provide either an email or a phone number, but not both.',
                });
            }
        } catch (error) {
            console.error('Error during forgot password request:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while processing the forgot password request. Please try again.',
            });
        }
    };

    const handleSetPassword = async () => {
        try {
            // Check if both password and confirmPassword are provided
            if (!newPassword || !confirmPassword) {
                throw new Error("Both password and confirmPassword are required");
            }

            // Check if password and confirmPassword match
            if (newPassword !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            // Make an HTTP request to the setPassword API endpoint using Axios
            const response = await axios.post('http://localhost:5000/api/user/setPassword', {
                email: loginData.email,
                password: newPassword,
                confirmPassword,
            });

            // Check if the request was successful
            if(response.status === 200) {
                if (response.data && response.data.status === true) {
                    console.log(response.data.message); // Password updated successfully
                    Swal.fire({
                        icon: 'success',
                        title: 'Password updated successfully!',
                        text: response.data.message,
                    });
                    navigate('/user/dashoard');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: response && response.data && response.data.message || 'Failed to update password',
                    });
                }
            } else {
                throw new Error('Failed to update password');
            }
        } catch (error) {
            console.error(error.message);
            // Display error message in a pop-up
        }
    };

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    // Get user info from Google
                    const googleUserInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    });

                    // Send user data to your backend API
                    await axios.post(`${base_url}/api/user/auth/google`, {
                        googleUserInfo: googleUserInfo.data,
                        googleAccessToken: user.access_token
                    });
                    // Set the user profile in your component state
                    setProfile(googleUserInfo.data);
                }
            } catch (error) {
                console.error('Error fetching or saving user data:', error);
            }
        };

        fetchData(); // Call the fetchData function

    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <>
            <div >
                <div className="login_card">
                    <Grid container spacing={0}>
                        <Grid item lg={6} sm={12} md={6} xs={12} >
                            <div className="docframe" style={{ backgroundImage: `url(${bgno9})` }}>
                                <img src={logindoc} alt="logindoc" className="logindoc" />
                            </div>
                        </Grid>
                        <Grid item lg={6} sm={12} md={6} xs={12} >
                            <div className="cross" onClick={handleCloseModal}>
                                <img src={cross} alt="cross" className="crossicon" />
                            </div>
                            <div>
                                <h6 className="welcome">Welcome To Bio-visuals</h6>
                                <p className="please">Please Sign to Your Account and start your visual in reality</p>
                            </div>
                            <Grid container spacing={1}>
                                <Grid item lg={12} sm={12} md={12} xs={12} >
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        label="Email/Phone"
                                        variant="standard"
                                        onChange={handleChange}
                                        name="email"
                                    />
                                </Grid>
                                <Grid item lg={12} sm={12} md={12} xs={12} >
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            onChange={handleChange}
                                            name="password"
                                        />
                                    </FormControl>
                                </Grid>
                                <div className="frog">
                                    <div>
                                        <a href="" className="link"><p>Remember Me</p></a>
                                    </div>
                                    <div>
                                        <a className="link"><p onClick={handleForgotPassword}>Forgot password</p></a>
                                    </div>
                                </div>
                            </Grid>
                            <div className="logbut">
                                <div>
                                    <Button variant="contained" disableElevation className="customButton"
                                        style={{
                                            background: "unset",
                                            background: "#F99A1F"
                                        }}
                                        onClick={onFinish}>
                                        LOGIN
                                    </Button>
                                </div>
                            </div>
                            <div className="logbut">
                                <h3 className="notmem">
                                    Not a member? <a className="link"><span className="createacc" onClick={handleCreateAccount}> Create Account</span></a>
                                </h3>
                            </div>
                            <div className="sosoicon">
                                <div>
                                    {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}

                                    {profile ? (
                                        <div>
                                            <img src={profile.picture} alt="user image" />
                                            <h3>User Logged in</h3>
                                            <p>Name: {profile.name}</p>
                                            <p>Email Address: {profile.email}</p>
                                            <br />
                                            <br />
                                            <button onClick={logOut}>Log out</button>
                                        </div>
                                    ) : (
                                        <button onClick={login}>
                                            {/* Sign in with Google 🚀  */}
                                            <img
                                                src={googleLogo}
                                                alt="Google Icon"
                                                style={{ width: '24px', marginRight: '8px' }}
                                            />
                                        </button>

                                    )}
                                    {/* <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            console.log('=====',credentialResponse);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                        // redirectUri={`${base_url}/api/user/auth/google/callback`}
                                    />; */}
                                    {/* <GoogleLogin
                                        clientId="507594540528-3jehpkured8cgr35vlmssomlqgkq3opm.apps.googleusercontent.com"
                                        onSuccess={ handleGoogleLogin}
                                        onFailure={(error) => {
                                            console.error('Google login failed:', error);
                                            // Handle the error or log more details for debugging.
                                        }}
                                        // onFailure={ handleGoogleLogin}
                                        cookiePolicy={'single_host_origin'}
                                        // redirectUri={`${base_url}/api/user/auth/google/callback`}
                                        render={(renderProps) => (
                                            <div onClick={renderProps.onClick} disabled={renderProps.disabled} className="custom-google-button">
                                                <img 
                                                    src={googleLogo} 
                                                    alt="Google Logo" 
                                                    className="google-logo"
                                                    style={{ width: "45px", cursor:"pointer" }}
                                                />
                                            </div>
                                        )}
                                    /> */}
                                </div>
                                <div>
                                    <a className="link">
                                        <img
                                            style={{ width: "65px" }}
                                            src={yahoo}
                                            className="soso"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a className="link">
                                        <img style={{ width: "65px" }} src={window} className="soso" />
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {otpscreen && otpSent && (
                <div>
                    <div className="login_card">
                        <Grid container spacing={0}>
                            <Grid item lg={6} sm={12} md={12} xs={12} >
                                <div className="docframe" style={{ backgroundImage: `url(${bgno9})` }}>
                                    <img src={logindoc} alt="logindoc" className="logindoc" />
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} >
                                <div className="cross" onClick={handleCloseModal}>
                                    <img src={cross} alt="cross" className="crossicon" />
                                </div>
                                <div>
                                    <p className="please">OTP</p>
                                    <p className="email-user"> {loginData.email} </p>
                                    <p className="email-user"> {Math.floor(countdown / 60)}:{countdown % 60} Mins left  </p>
                                </div>
                                <div style={{ marginLeft: '10rem' }}>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderInput={(props) => <input {...props} />}
                                    />

                                </div>
                                <div className="logbut">
                                    <div>
                                        <Button variant="contained" disableElevation className="customButton"
                                            onClick={handleOtpSubmit}
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </div>
                                <div className="logbut">
                                    <h3 className="notmem">
                                        <a className="link">
                                            <span
                                                className="createacc"
                                                // onClick={handleResendOtp}
                                                disabled={resendDisabled}
                                                style={{ cursor: resendDisabled ? 'not-allowed' : 'pointer' }}
                                            >
                                                Resend OTP
                                            </span>
                                        </a>
                                    </h3>
                                </div>
                                {/* <div>
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        className="customButton"
                                        // onClick={handleResendOTP}
                                        disabled={resendDisabled}
                                    >
                                        Resend OTP
                                    </Button>
                                </div> */}
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )}

            {passwordModal && (
                <div>
                    <div className="login_card">
                        <Grid container spacing={0}>
                            <Grid item lg={6} sm={12} md={12} xs={12} >
                                <div className="docframe" style={{ backgroundImage: `url(${bgno9})` }}>
                                    <img src={logindoc} alt="logindoc" className="logindoc" />
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12} xs={12} >
                                <div className="cross" onClick={handleCloseModal}>
                                    <img src={cross} alt="cross" className="crossicon" />
                                </div>
                                <div>
                                    <p className="please">CHANGE PASSWORD</p>
                                </div>
                                <div style={{ margin: '2rem' }}>
                                    <Grid container spacing={0}>
                                        <Grid item lg={12} sm={12} md={12} xs={12} >
                                            <div style={{ margin: '1rem' }}>
                                                <FormControl variant="standard" fullWidth>
                                                    <InputLabel htmlFor="standard-adornment-password">NewPassword</InputLabel>
                                                    <Input
                                                        id="new-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                    />
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item lg={12} sm={12} md={12} xs={12} >
                                            <div style={{ margin: '1rem' }}>
                                                <FormControl variant="standard" fullWidth>
                                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                                    <Input
                                                        id="confirm-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </FormControl>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="logbut">
                                    <div>
                                        <Button variant="contained" disableElevation className="customButton"
                                            // onClick={handleSetPassword}
                                            onClick={() => handleSetPassword(newPassword, confirmPassword)}
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
