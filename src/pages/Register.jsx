import React, { useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Input, InputLabel, MenuItem, Radio, Select, TextField, Button } from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number'
import yahoo from '../assets/Images/yahoo.png'
import window from '../assets/Images/windows-logo.png'
import google from '../assets/Images/google.png'
import logindoc from '../assets/Images/logindoc.png'
import cross from '../assets/Images/cross.png'
import bgno9 from '../assets/Images/bgno9.png'
import loader from '../assets/Images/loader.png'
import { useAuthContext } from '../context/AuthContext'


const Register = ({ handleCloseModal, handleLogin }) => {
    const { userRegister } = useAuthContext()
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        currentRole: '',
        other: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
        privacy: false
    });
    const [showOtherDropdown, setShowOtherDropdown] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));

        // Set showOtherDropdown to true only if the selected role is 'other'
        setShowOtherDropdown(name === 'currentRole' && value.toLowerCase() === 'other');
    };

    const handleRegister = async () => {
        userRegister(userData);
        console.log("userData", userData)        
    }

    return (
        <>
            <div>
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
                                <p className="please">CREATE ACCOUNT</p>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item lg={6} sm={6} md={6} xs={6} >
                                    <FormControl fullWidth>
                                        <TextField
                                            id="standard-basic"
                                            fullWidth
                                            label="First Name"
                                            variant="standard"
                                            onChange={handleChange}
                                            name="firstName"
                                            value={userData.firstName}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item lg={6} sm={6} md={6} xs={6} >
                                    <FormControl fullWidth>
                                        <TextField
                                            id="standard-basic"
                                            fullWidth
                                            label="Surname"
                                            variant="standard"
                                            onChange={handleChange}
                                            name="lastName"
                                            value={userData.lastName}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item lg={12} sm={12} md={12} xs={12}>
                                    <FormControl variant="standard" fullWidth style={{ color: 'black' }}>
                                        <InputLabel id="current-role-select-label">Current Role</InputLabel>
                                        <Select
                                            id="current-role-select"
                                            fullWidth
                                            variant="standard"
                                            onChange={handleChange}
                                            name="currentRole"
                                            value={userData.currentRole}
                                        >
                                            <MenuItem value="student">Student</MenuItem>
                                            <MenuItem value="doctor">Postdoctoral Fellow</MenuItem>
                                            <MenuItem value="professor">Professor/Scientist/Lecturer/Teacher</MenuItem>
                                            <MenuItem value="corporate">Corporate Individual</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                {showOtherDropdown && (
                                    <Grid item lg={12} sm={12} md={12} xs={12}>
                                        <FormControl variant="standard" fullWidth>
                                            <InputLabel htmlFor="other">other Role</InputLabel>
                                            <Input
                                                id="other"
                                                type="text"
                                                placeholder="Enter other role"
                                                onChange={(e) => handleChange({ target: { name: 'other', value: e.target.value } })}
                                            />
                                        </FormControl>
                                    </Grid>
                                )}

                                <Grid item lg={12} sm={12} md={12} xs={12} >
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        label="Email"
                                        variant="standard"
                                        onChange={handleChange}
                                        name="email"
                                        value={userData.email}
                                    />
                                </Grid>

                                <Grid item lg={12} sm={12} md={12} xs={12}
                                // style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}
                                >
                                    <MuiPhoneNumber
                                        name="phone"
                                        value={userData.phone}
                                        label="phone"
                                        variant="standard"
                                        defaultCountry={"in"}
                                        required
                                        size="small"
                                        fullWidth
                                        sx={{
                                            "& > :not(style)": {
                                                color: "black",
                                            },
                                        }}
                                        onChange={(value) => setUserData((prevUserData) => ({
                                            ...prevUserData,
                                            phone: value,
                                        }))}
                                    />
                                </Grid>

                                <Grid item lg={6} sm={6} md={6} xs={6}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} sm={6} md={6} xs={6}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                                        <Input
                                            id="confirm-password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="confirmpassword"
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                </Grid>

                                <div className="frog">
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Term & Condition and Privacy policy" />
                                        </FormGroup>
                                    </div>
                                </div>
                            </Grid>

                            <div className="logbut">
                                <div
                                    style={{
                                        backgroundColor: "#F99A1F !important",
                                        color: "white",
                                        // borderRadius: '50px',
                                        border: '1px solid #F99A1F'
                                    }}
                                >
                                    {/* <Button
                                        variant="contained"
                                        disableElevation
                                        className="customButton"
                                        onClick={handleRegister}
                                        disabled={loading}
                                        style={{
                                            background: "unset",
                                            backgroundColor: "#F99A1F"
                                        }}
                                    >
                                        {loading ? (
                                            <img src={loader} alt="loader" className="loader-icon" />
                                        ) : (
                                            "CREATE"
                                        )}
                                    </Button> */}
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        className="customButton"
                                        onClick={handleRegister}
                                        // disabled={isLoading}
                                        style={{
                                            background: "unset",
                                            backgroundColor: "#F99A1F"

                                        }}
                                    >

                                        CREATE
                                    </Button>
                                </div>
                            </div>
                           

                            <div className="logbut">
                                <h3 className="notmem">
                                    Member? <a className="link"><span className="createacc" onClick={handleLogin}> Login</span> </a>
                                </h3>
                            </div>

                            <div className="sosoicon">
                                <div>
                                    <a className="link"> <img src={yahoo} className="soso" /></a>
                                </div>
                                <div>
                                    <a className="link"><img src={window} className="soso" /></a>
                                </div>
                                <div>
                                    <a className="link"><img src={google} className="soso" /></a>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Register