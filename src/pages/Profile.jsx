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
import Autocomplete from '@mui/material/Autocomplete';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header1 from "../components/Header1";
import Swal from "sweetalert2";
import { base_url } from "../utils/service";

const Profile = () => {
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


  // const handleProfile = (event) => {
  //   const file = event.target.files[0]; // Get the uploaded file
  
  //   if (file && file.type.startsWith('image/')) {
  //     // Ensure the file is an image
  //     const reader = new FileReader();
  
  //     reader.onloadend = () => {
  //       // Set the loaded file's data URL as the profile photo state
  //       setprofilePhoto(reader.result);
  //     };
  
  //     reader.readAsDataURL(file); // Read the file
  //   } else {
  //     alert('Please select an image file.');
  //   }
  // };

  // const handleProfile = (event) => {
  //   try {
  //     const file = event.target.files && event.target.files[0]; // Null check before accessing the file
  
  //     if (file && file.type.startsWith('image/')) {
  //       // Ensure the file is an image
  //       const reader = new FileReader();
  
  //       reader.onloadend = () => {
  //         // Set the loaded file's data URL as the profile photo state
  //         setprofilePhoto(reader.result);
  //       };
  
  //       reader.readAsDataURL(file); // Read the file
  //     } else {
  //       alert('Please select an image file.');
  //       console.log("Please select an image file.")
  //     }
  //   } catch (error) {
  //     console.error('Error handling profile photo:', error);
  //     // Handle the error, e.g., display an error message to the user
  //     alert('An error occurred while handling the profile photo.');
  //   }
  // };  

  const handleProfile = (event) => {
    const files = event.target.files;
    
    // Check if files exist and is not empty
    if (files && files.length > 0) {
      const file = files[0]; // Get the uploaded file
      
      if (file && file.type.startsWith('image/')) {
        // Ensure the file is an image
        const reader = new FileReader();
    
        reader.onloadend = () => {
          // Set the loaded file's data URL as the profile photo state
          setprofilePhoto(reader.result);
        };
    
        reader.readAsDataURL(file); // Read the file
      } else {
        alert('Please select an image file.');
      }
    }
  };        
  
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    organizationName: "",
    userType: "",
    institutionName: "",
    departmentName: "",
    primaryAreaOfResearch: [],
    secondaryAreaOfResearch: [],
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Replace 'rajivpathak199@gmail.com' with the email of the user you want to display
        const userEmail = 'rajivpathak199@gmail.com';
        
        const response = await axios.get(`${base_url}api/admin/userManagement?email=${userEmail}`);
        const userArray = response.data.users;
        console.log("data", response.data.users)
        // Assuming that the email is unique, get the first user (if exists)
        const currentUser = userArray.length > 0 ? userArray[0] : null;
  
        if (currentUser) {
          setUser(currentUser);
          // console.log("data", currentUser);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
  
    fetchUserProfile();
  }, []);

  // console.log("data1", user)

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

  const updateProfile = async () => {
    try {
      const { firstName, lastName, password } = user; // Destructure user object to get required fields
      const response = await axios.post(`${base_url}api/user/updateProfile/` + user.userName, { firstName, lastName, password });
      if(response.data.status === true) {
          Swal.fire({
              icon: 'info',
              title: "Profile updated successfully!",
              text: response.data.message,
          });
      } else {
          console.error('Profile update failed:', response.data.message);
          Swal.fire({
              icon: "error",
              title: "Error!",
              text: response.data.message || "Profile update failed",
          });
      }
    } catch (error) {
        console.error('Error updating profile:', error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Profile update failed. Please try again.",
        });
    }
  }

  const updateField = async () => {
    try {
        const { department_name, primaryResearchArea, secondaryResearchArea, type, organizationName } = user;
        const response = await axios.post(`${base_url}api/user/updateField/` + user.userName, { department_name, primaryResearchArea, secondaryResearchArea, type, organizationName });
        
        if(response.data.status === true) {
          // Display success message
          Swal.fire({
              icon: 'info',
              title: "User fields updated successfully!",
              text: response.data.message,
          });
        } else {
            // Handle unsuccessful update
            console.error('Field update failed:', response.data.message);
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: response.data.message || "Field update failed",
            });
        }
    } catch (error) {
        // Handle network errors or other issues
        console.error('Error updating fields:', error);
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Field update failed. Please try again.",
        });
    }
  };

  const handleLogout = () => {
    navigate('/')
  }

  const handleNotification = () => {
    navigate('/user/notification')
  }

  return (
    <div>
      {/* <Header1 /> */}
      <div className="profilesideside">
        <Grid container spacing={0}>
          
          <Grid item lg={2} sm={2} md={2} xs={2} style={{ marginTop: "115px"}}>
            <div className=" sidesidekibaathai">
            <Link to="/user/profile" className="linkblack"> 
              <div className="sideprofile">
                <img src={sideprofile} className="sideprofileicons" />
                <h3>  Profile </h3>
              </div>
              </Link>
              {/* <Link to="/user/notification" className="linkblack"> */}
              <div className="sideprofile" onClick={handleNotification}>
                <img src={notifications} className="sideprofileicons" />
                <h3>  Notifications </h3>
              </div>
              {/* </Link> */}
              {/* </ to="" className="linkblack"> */}
              <div className="sideprofile">
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
              {/* <Link to="" className="linkblack"> */}
                <div className="sideprofile">
                  <img src={sideback} className="sideprofileicons" />
                  <h3>  Back </h3>
                </div>
              {/* </Link> */}

            </div>
          </Grid>

          <Grid item lg={10} sm={10} md={10} xs={10}>
            <div className=" dusrikibaathai">
              <div >
                <div className="profilekiheading">
                  <div className="peroo">
                    <h3 className="profileh3"> Profile Photo </h3>
                    <div>
                      <Button 
                        variant="contained" 
                        disableElevation className="customButton" 
                        style={{ backgroundColor: '#F0EBEB', color: '#988787', fontWeight: '600' }}
                        onClick={updateProfile}
                        >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="photo1">
                    <div className="photoprofileki">
                      <img src={profilephoto} style={{ margin: '1rem' }} />
                      <div>
                        <Grid
                          component="label"
                          onClick={handleProfile}
                          style={{ backgroundColor: 'white', color: 'black',  fontWeight: '600' , padding:'1rem'}}
                        > 
                          <Button>Update photo</Button>
                      
                          <input
                            onChange={handleProfile}
                            hidden
                            accept="image/*"
                            type="file"
                          />
                        </Grid>
                        <p> JPG or PNG . Max size of 3MB </p>
                      </div>
                    </div>
                    <div>
                     
                      <Button variant="contained" disableElevation className="customButton" style={{ backgroundColor: 'green', color: 'white', fontWeight: '600', overflow:'hidden' }}>
                        Upgrade to premium
                      </Button>
                  
                    </div>
                  </div>
                  <div >
                    <Grid container spacing={2}>
                      <Grid item lg={6} sm={12} md={12} xs={12}>
                        <div>
                          <div className="lable">First Name:</div>
                          <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            size="small"
                            fullWidth
                            value={user.firstName}  // Set the initial value to the user's first name
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}  // Update the user's first name on change
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} sm={12} md={12} xs={12}>
                        <div>
                          <div className="lable">Last Name:</div>
                          <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            size="small"
                            fullWidth
                            value={user.lastName}  // Set the initial value to the user's first name
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}  // Update the user's first name on change
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} sm={12} md={12} xs={12}>
                        <div>
                          <div className="lable"> User Name:</div>
                          <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            size="small"
                            fullWidth
                            value={user.userName}  // Set the initial value to the user's first name
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} sm={12} md={12} xs={12}>
                        <div>
                          <div className="lable"> Email:</div>
                          <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            size="small"
                            fullWidth
                            value={user.email}  // Set the initial value to the user's first name
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} sm={12} md={12} xs={12}>
                        <div>
                          <div className="lable">  Password:</div>
                          <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            size="small"
                            fullWidth
                            value={user.password}  // Set the initial value to the user's first name
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>


              <div className="profilekiheading" style={{ marginTop: '2rem' }}>
                <div className="peroo">
                  <h3 className="profileh3"> About You </h3>
                  <div>
                    <Button 
                      variant="contained" 
                      disableElevation className="customButton" 
                      style={{ backgroundColor: '#F0EBEB', color: '#988787', fontWeight: '600' }}
                      onClick={updateField}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
                <hr />
                <div >
                  <Grid container spacing={2}>
                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable">Organizartion Name: </div>
                        <Autocomplete
                          id="size-small-standard"
                          size="small"
                          options={top100Films}
                          getOptionLabel={(option) => option.title}
                          defaultValue={top100Films[13]}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Your Organization Name"
                              value={user.organizationName}
                              onChange={(e) => setUser({ ...user, organizationName: e.target.value })}
                            />
                          )}
                        />
                        
                      </div>
                    </Grid>
                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable">User type: </div>
                        <Autocomplete
                          id="size-small-standard"
                          size="small"
                          options={top100Films}
                          getOptionLabel={(option) => option.title}
                          defaultValue={top100Films[13]}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Intern"
                              value={user.type}  // Set the initial value to the user's organization name
                              onChange={(e) => setUser({ ...user, type: e.target.value })} 
                            />
                          )}
                        />
                      </div>
                    </Grid>
                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable"> Instituation name: </div>
                        <TextField
                          hiddenLabel
                          id="filled-hidden-label-small"
                          size="small"
                          fullWidth
                        />
                      </div>
                    </Grid>
                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable">  Department name: </div>
                        <TextField
                          hiddenLabel
                          id="filled-hidden-label-small"
                          size="small"
                          fullWidth
                        />
                      </div>
                    </Grid>

                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable">  Primary area of research  </div>
                        <Autocomplete
                          multiple
                          id="tags-outlined"
                          options={top10icons}
                          value={keywords}
                          onChange={(event, newValue) => {
                            setKeywords(newValue);
                            setErrorKeywords(newValue.length === 0 ? 'Select at least one keyword' : '');
                          }}
                          getOptionLabel={(option) => option.title}
                          filterSelectedOptions
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              error={Boolean(errorKeywords)}
                              helperText={errorKeywords}
                            />
                          )}
                        />
                      </div>
                    </Grid>

                    <Grid item lg={6} sm={12} md={12} xs={12}>
                      <div>
                        <div className="lable"> Secondary area of research  </div>
                        <Autocomplete
                          multiple
                          id="tags-outlined"
                          options={top10icons}
                          value={keywords}
                          onChange={(event, newValue) => {
                            setKeywords(newValue);
                            setErrorKeywords(newValue.length === 0 ? 'Select at least one keyword' : '');
                          }}
                          getOptionLabel={(option) => option.title}
                          filterSelectedOptions
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              error={Boolean(errorKeywords)}
                              helperText={errorKeywords}
                            />
                          )}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>

            </div>


          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Profile;
