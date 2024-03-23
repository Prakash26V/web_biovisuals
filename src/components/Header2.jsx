
// Header2.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Grid, } from "@mui/material";
import logo from "../assets/Images/logo.png";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import question from '../assets/Images/question.png'
import bell from '../assets/Images/bell.png'
import profile from '../assets/Images/profile.png'
import searchiccoo from '../assets/Images/searchiccoo.png'
import plusiconss from '../assets/Images/plusiconss.png'
import galleryicooonn from '../assets/Images/galleryicooonn.png'
import shareicon from '../assets/Images/shareicon.png'
import Trash from '../assets/Images/Trash.png'
import templatataae from '../assets/Images/templatataae.png'
import mennuki from '../assets/Images/mennuki.png'
import botal from '../assets/Images/botal.png'
import downarrow from '../assets/Images/downarrow.png'
import fake1 from '../assets/Images/fake1.png'
import fake2 from '../assets/Images/fake2.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import signout from '../assets/Images/signout.png'
import settings from '../assets/Images/settings.png'
import upgrade from '../assets/Images/upgrade.png'
import axios from "axios";
import Logout from "../pages/Logout";
import { base_url } from "../utils/service";

const Header2 = ({ toggleSidebar, isAuthenticated, onSearchInputChange, searchInput }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [folders, setFolders] = useState()
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleSignUp = () => {
        navigate('/admin/signout');
    };

    const handleLogin = () => {
        navigate('/admin/signout');
    };

    console.log("Is Authenticated:", isAuthenticated);

    const handleNotification = () => {
        navigate('/user/notification')
        // alert("sass")
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // navigate('/user/notification')
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseSignOut = Logout();

    const handleUpgardePlan = () => {
        setAnchorEl(null);
        navigate('/user/pricing')
    }

    const handleSearchInputChange = async (event) => {
        const inputValue = event.target.value;
        onSearchInputChange(inputValue);
        try {
            const response = await axios.get(`${base_url}api/user/folderSearch?q=${inputValue}`);
            // Assuming the response contains an array of folders
            setFolders(response.data.folders);
        } catch (error) {
            console.error("Error searching folders:", error);
            // Handle error cases
        }
    };

    const handleHome = () => {
        navigate('/')
    }

    return (
        <>
            <div
                className="dashboardnew_header"
                style={{
                    backgroundColor: "white",
                    // opacity: '0.7',
                    position: 'fixed',
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                }}
            >
                <div className="filename" onClick={handleHome}>
                    <img src={logo} alt="logo" style={{ height: "80px", width: "100px" }} />
                </div>
                <div className="dashboard_centerbutton">
                    <div className="kantaright">
                        <a className="link">
                            < p className="kantabai"> Studio</p>
                        </a>
                    </div>
                    <div>
                        <a className="link">
                            <p className="kantabai"> Training Hub</p>
                        </a>
                    </div>
                </div>

                <div className="dashboard_centerbutton" style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        placeholder="Search"
                        id="customInput"
                        variant="outlined"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <img src={searchiccoo} alt="Search Icon" style={{ width: 30, height: 30 }} />
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            borderRadius: "20px",
                            // backgroundColor: 'red',
                            flex: 1,
                            marginRight: '8px',
                            lineHeight: '1', // Adjust the line height as needed
                            
                        }}
                    />
                </div>

                <div className="side_icons">
                    <div className="quesus" >
                        <img src={question} alt="Question mark" className="question" />
                    </div>
                    <div className="quesus" onClick={handleNotification}>
                        <img src={bell} alt="Bell Icon" className="question" />
                    </div>
                    <div className="profile" >
                        <img src={profile} alt="Bell Icon"
                            onClick={handleClick}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem><Link to="/user/profile" className="linkblack"> <span className="profileicons"> <img src={settings} className="profileicons" /> </span>Profile Settings </Link> </MenuItem>
                            <MenuItem onClick={handleUpgardePlan}> <span className="profileicons"> <img src={upgrade} className="profileicons" /> </span> Upgrade Plans</MenuItem>
                            <MenuItem onClick={handleCloseSignOut}><span className="profileicons"> <img src={signout} className="profileicons" /> </span>Logout </MenuItem>
                        </Menu>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header2;


// import { Heading, Flex, Img, Text } from '@chakra-ui/react';

// export default function Header() {
//   return (
//     <>
//       <Heading
//         as="h1"
//         transition="0.1s ease-in-out"
//         _hover={{ color: 'blue.300' }}
//         fontSize={['2xl', '4xl']}
//       >
//         <a href="https://github.com/MomenSherif/react-oauth">
//           @react-oauth/google
//         </a>
//       </Heading>
//       <Text mt="3" textAlign="center">
//         Google OAuth2 using the new Google Identity Services SDK for React 🚀
//       </Text>

//       <Flex direction={['column', 'row']}>
//         <Img src="/images/react-logo.svg" alt="React logo" w={['32', '56']} />
//         <Img src="/images/google-logo.png" alt="Google logo" w={['32', '48']} />
//       </Flex>
//     </>
//   );
// }
