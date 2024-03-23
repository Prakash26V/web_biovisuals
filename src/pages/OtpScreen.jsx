import React, { useEffect, useState } from 'react'
import { Grid, Input, Radio, Select, TextField, Button } from "@mui/material";
import OtpInput from 'react18-input-otp';
import bgno9 from '../assets/Images/bgno9.png'
import logindoc from '../assets/Images/logindoc.png'
import cross from '../assets/Images/cross.png'
import { useAuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { base_url } from '../utils/service';

const OtpScreen = ({ handleCloseModal }) => {
    const { userEmail, verifyOtpRequest } = useAuthContext()
    const [otp, setOtp] = useState('');
    const [countdown, setCountdown] = useState(300); // 5 minutes and 30 seconds in seconds
    const [resendDisabled, setResendDisabled] = useState(false);

    const handleOtpSubmit = async () => {
        // verifyOtpRequest(otp, userEmail)
        // console.log("otp", otp);

        if (countdown <= 0) {
            // If countdown has reached 0, show an error message
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'OTP has expired. Please resend OTP.',
            });
        } else {
            // If countdown is still active, proceed with OTP verification
            verifyOtpRequest(otp, userEmail);
            console.log("otp", otp);
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await axios.post(`${base_url}/api/user/resendOtp`, { email: userEmail });
            if (response.data.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'New OTP sent successfully',
                });
                setCountdown(300); // Reset countdown timer
                setResendDisabled(true); // Disable resend button temporarily
                // Enable resend button after 5 minutes
                setTimeout(() => {
                    setResendDisabled(false);
                }, 300000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while resending OTP',
            });
        }
    }

    useEffect(() => {
        // Update the countdown every second
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            }
        }, 1000);

        // Cleanup the timer on component unmount
        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <>
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
                                <p className="email-user"> {userEmail} </p>
                                <p className="email-user">{Math.floor(countdown / 60)}:{countdown % 60} Mins left</p>
                            </div>
                            <div style={{ marginLeft: '15.5rem' }}>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    autoFocus
                                    numInputs={6}
                                    disabled={false}
                                    renderInput={(props) => <input {...props} />}
                                />

                            </div>

                            <div className="logbut">
                                <div>
                                    <Button variant="contained" disableElevation className="customButton"
                                        onClick={handleOtpSubmit}
                                        style={{
                                            background: "unset",
                                            backgroundColor: "#F99A1F"

                                        }}
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
                                            onClick={handleResendOtp}
                                            disabled={resendDisabled}
                                            style={{
                                                cursor: resendDisabled ? 'not-allowed' : 'pointer', background: "unset",
                                                backgroundColor: "#F99A1F"
                                            }}
                                        >
                                            Resend OTP
                                        </span>
                                    </a>
                                </h3>
                            </div>

                        </Grid>
                    </Grid>

                </div>
            </div>
        </>
    )
}

export default OtpScreen