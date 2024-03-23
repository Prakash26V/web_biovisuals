import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { add_user, base_url, forgot_password, user_login } from '../utils/service';
import useToken from 'antd/es/theme/useToken';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Create the context
const AuthContext = createContext();

// Create a provider component to wrap the app
export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [value, setValue] = useState('Default Value');
    const [userId, setUserId] = useState()
    const [userEmail, setUserEmail] = useState()
    const [email, setEmail] = useState()
    const [userToken, setUserToken] = useState()
    const [otpScreen, setOtpscreen] = useState()
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false)
    const [otpSent, setOtpSent] = useState(false)
    // You can add more state or functions here

    const UserLogin = async (loginData) => {
        console.log("logind", loginData)
        try {
            const response = await axios.post(`${base_url}${user_login}`, {
                email: loginData.email,
                password: loginData.password,
            });
            if (response.data.status === true) {
                const { token, userId, email } = response.data.result;

                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('email', email)

                setEmail(email)
                setUserToken(token)
                setUserId(userId)
                console.log(token)
                console.log(userId)
                navigate('/user/dashoard')
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Login successful',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                // toast.success('Login successful!');
            } else {
                console.error('Login failed:', response.data.message);
                // toast.error('Login failed. Please check your credentials.');
                // showAlert('Login failed. Please check your credentials.', 'error');
            }
        } catch (error) {
            console.log(error)
            // showAlert('An error occurred while logging in.', 'error');
            return null
        }
    }

    const userRegister = async (userData) => {
        console.log("Register userData :::", userData)
        try {
            const response = await axios.post(`${base_url}${add_user}`, userData, {})
            if (response.data.status === true) {
                // setEmail(email)
                setOtpscreen(true);
                setShowCreateAccountModal(false);
                setOtpSent(true);
                setUserEmail(userData?.email)   
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Registration successful  Check your email for OTP.',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            } else {
                // showAlert('Registration failed. Please try again.', 'error');
            }
        } catch (error) {
            console.log(error)
            // showAlert('An error occurred during registration.', 'error');
            return null
        }
    }

    const verifyOtpRequest = async (otp, email) => {
        try {
            // Make a request to your backend to verify OTP
            console.log("otp", otp, email)
            const response = await axios.post(`${base_url}/api/user/verifyOTP`, { otp, email });
            console.log("Otp Verification ::: ", response)
            if (response?.data?.status === true) {
                localStorage.setItem('token', response?.data?.result?.token);
                localStorage.setItem('userId', response?.data?.result?._id);
                setUserToken(response?.data?.result?.token)
                setUserId(response?.data?.result?._id)
                navigate('/user/dashoard')
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'OTP verification successful.',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                // showAlert('OTP verification successful', 'success');
            } else {
                // showAlert('OTP verification failed. Please try again.', 'error');
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Invalid OTP. Please try again.',
                    showCancelButton: false,
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while verifying OTP. Please try again.',
                showCancelButton: false,
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
       
    };

    const forgotPassword = async ({ email, phone }) => {
        try {
            let requestBody = {};
            if (email) {
                requestBody = { email };
            } else if (phone) {
                requestBody = { phone };
            } else {
                throw new Error('Either email or phone is required, but not both');
            }

            const response = await axios.post(`${base_url}${forgot_password}`, requestBody);
            if (response.data.status === true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Registration successful  Check your email for OTP.',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                // showAlert('Password reset email sent successfully', 'success');
            } else {
                // showAlert('Failed to send password reset email. Please try again.', 'error');
            }
            return response;
        } catch (error) {
            console.error(error);
            // showAlert('An error occurred during password reset.', 'error');
            return null;
        }
    };

    const isLoggedIn = async () => {
        const localStorageToken = localStorage.getItem("token")
        const localStorageUserId = localStorage.getItem("userId")
        const localStorageEmail = localStorage.getItem("email")

        // const response = await axios.get(`url`)

        console.log("Local Storage Token ::: ", localStorageToken)

        if (localStorageToken) {
            setUserToken(localStorageToken)
            setUserId(localStorageUserId)
            setEmail(localStorageEmail)
            // showAlert('Logged in successfully', 'success');
        }
        else {
            setUserToken(null)
            // showAlert('Not logged in', 'info');
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [useToken])

    return (
        <AuthContext.Provider value={{ userToken, userId, userEmail, email, otpScreen, setOtpscreen, showCreateAccountModal, setShowCreateAccountModal, otpSent, setOtpSent, UserLogin, userRegister, verifyOtpRequest, forgotPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to consume the context
export const useAuthContext = () => {
    return useContext(AuthContext);
};
