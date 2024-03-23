import React, { useRef, useEffect, useState } from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import question from '../assets/Images/question.png'
import bell from '../assets/Images/bell.png'
import profile from '../assets/Images/profile.png'
import searchiccoo from '../assets/Images/searchiccoo.png'
import logo from "../assets/Images/logo.png"
import sideprofile from '../assets/Images/sideprofile.png'
import notifications from '../assets/Images/notifications.png'
import sidesettings from '../assets/Images/sidesettings.png'
import sidelogout from '../assets/Images/sidelogout.png'
import sideback from '../assets/Images/sideback.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import signout from '../assets/Images/signout.png'
import settings from '../assets/Images/settings.png'
import upgrade from '../assets/Images/upgrade.png'
import profilephoto from '../assets/Images/profilephoto.png'
import settingska2icon from '../assets/Images/settingska2icon.png'
import Autocomplete from '@mui/material/Autocomplete';
import uncleprofile from '../assets/Images/uncleprofile.png'
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Header from "../components/Header";


const Notification = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [volume, setVolume] = useState(0.5); const rulerRef = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [error, setError] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [errorKeywords, setErrorKeywords] = useState('');
  const [profilePhoto, setprofilePhoto] = useState({
    file: profilephoto,
    bytes: "",
  });
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setprofilePhoto({
        file: URL.createObjectURL(e.target.files[0]),
        bytes: e.target.files[0],
      });
      // handleError("profilePhoto", null);
    }
  };

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },

  ];
  const top10icons = [
    { title: 'Bio' },
    { title: 'Chemistry' },
    { title: 'op1' },
    { title: 'op2' },
    { title: 'op3' },
  ];

  const handleLogout = () => {
    navigate('/')
  }

  const handleSetting = () => {
    // alert('setting')
    navigate('/user/profile')
  }

  return (
    <div>
      {/* <Header1 /> */}
      
      <div className="profilesideside">
        <Grid container spacing={0} >
          <Grid item lg={3} sm={0} md={3} xs={0}>
            <div className=" sidesidekibaathai">
            <Link to="/user/profile" className="linkblack"> 
              <div className="sideprofile">
                <img src={sideprofile} className="sideprofileicons" />
                <h3>  Profile </h3>
              </div>
              </Link>
              <Link to="/user/notification" className="linkblack">
              <div className="sideprofile">
                <img src={notifications} className="sideprofileicons" />
                <h3>  Notifications </h3>
              </div>
              </Link>
              {/* <Link to="" className="linkblack"> */}
              <div className="sideprofile" onClick={handleSetting}>
                <img src={sidesettings} className="sideprofileicons" />
                <h3>  Settings </h3>
              </div>
              {/* </Link> */}
              {/* <Link to="" className="linkblack"> */}
              <div className="sideprofile" onClick={handleLogout}>
                <img src={sidelogout} className="sideprofileicons" />
                <h3>  Logout </h3>
              </div>
              {/* </Link> */}
              <Link to="" className="linkblack">
              <div className="sideprofile">
                <img src={sideback} className="sideprofileicons" />
                <h3>  Back </h3>
              </div>
              </Link>

            </div>
          </Grid>

          <Grid item lg={9} sm={12} md={9} xs={12}>
            <div className=" dusrikibaathai2">
              <div >
                <div className="profilekiheading">
                  <div className="peroo">
                    <h3 className="profileh3"> Notifications  </h3>
                    <div>
                      <img src={settingska2icon} style={{height:'30px', width:'30px'}} />
                    </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  <div className="notification">
                     <div className="notification">
                       <img src={ uncleprofile} style={{height:'50px', width:'50px', marginRight:'1rem'}} />
                       <div>
                        <h3 style={{color:'black',}}> Lorem abc lorem lorem lorem lorem  lorem lorem </h3>
                        <p style={{color:'gray',}}> 4 minutes ago</p>
                         </div>

                     </div>
                     <div>
                         
                     </div>
                  </div>
                  <hr />

                  

                  
                </div>
              </div>

            </div>


          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Notification;