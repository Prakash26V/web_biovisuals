
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";
import aboutbg from '../assets/Images/aboutbg.png'
import searchiccoo from '../assets/Images/searchiccoo.png'
import cardbuu from '../assets/Images/cardbuu.png'
import belubee from '../assets/Images/belubee.png'
import cellstuct1 from '../assets/Images/cellstuct1.png'
import cellstuct2 from '../assets/Images/cellstuct2.png'
import cellstuct3 from '../assets/Images/cellstuct3.png'
import cellstuct4 from '../assets/Images/cellstuct4.png'
import cellstuct5 from '../assets/Images/cellstuct5.png'
import cellstuct6 from '../assets/Images/cellstuct6.png'
import cellstuct7 from '../assets/Images/cellstuct7.png'
import cellstuct8 from '../assets/Images/cellstuct8.png'
import cellstuct9 from '../assets/Images/cellstuct9.png'
import cellstuct10 from '../assets/Images/cellstuct10.png'
import cellstuct11 from '../assets/Images/cellstuct11.png'
import bluebg from '../assets/Images/bluebg.png'
import drag from '../assets/Images/drag.png'
import pen from '../assets/Images/pen.png'
import drop from '../assets/Images/drop.png'
import frame9 from '../assets/Images/Frame9.png'
import greekida from '../assets/Images/greekida.png'
import bluekeeda from '../assets/Images/bluekeeda.png'
import sub1 from '../assets/Images/sub1.png'
import sub2 from '../assets/Images/sub2.png'
import frame10 from '../assets/Images/frame10.png'
import smalltick from '../assets/Images/smalltick.png'
import bio from '../assets/Images/bio.png'
import Footer from "../components/Footer";
import axios from "axios";
import { base_url, image_url } from "../utils/service";

const IconPage = () => {
    const [displayIconData, setDisplayIconData] = useState([]);
    const navigate = useNavigate()
    const { childCategoryId } = useParams()
    console.log("childCategoryId", childCategoryId)
    const handleDetailIcon = (icon) => {
        console.log("Clicked Image", icon)
        navigate(`/user/detail/icon/${icon?._id}`);
    }

    const handleIcon = async () => {
        try {
          const response = await axios.post(`${base_url}/api/user/adminIcons`, { _id: childCategoryId });
          setDisplayIconData(response.data.result);
          console.log("data", (response.data.result));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleIcon();
    }, []);

    return (
        <>
            {/* <Header /> */}
            <div>
                <div style={{ margin: '1rem', marginTop: "115px" }}>
                    <div style={{ backgroundImage: `url(${aboutbg})` }} className="aboutbg">
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12} >
                                <p className="hero_text "> Cutting-edge Scientific Discoveries
                                    Exploring the Frontiers of Knowledge
                                </p>
                                <p className="aboutsectext">Bio Visuals Effortless Creation of Publication-Quality Figures with Pre-Made Icons and Templates</p>

                                <div style={{ display: 'flex', flexDirection: 'row', padding: '2rem' }}>
                                    <Grid item lg={12} sm={12} md={12} xs={12} >
                                        <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                                            <TextField
                                                fullWidth
                                                placeholder="Search"
                                                id="customInput"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <img src={searchiccoo} alt="Serach  Icon" style={{ width: 20, height: 20 }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    backgroundColor: "white", // Background color
                                                    borderRadius: "40px", // Border radius
                                                    "& label.Mui-focused": {
                                                        color: "green",
                                                    },
                                                }}
                                            />
                                        </div>
                                    </Grid>
                                </div>
                                <div className="structtoo">
                                    <p className="struckp"> Icon Library
                                        / <span className="struct"> Cell Structures </span></p>
                                </div>
                                <div className="stuct2">
                                <Link to="/" className="link">
                                    <p className="struct" > USE ICON IN THIS APP </p>
                                </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div style={{ margin: '1rem', }}>
                    <div >
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12}  >
                                <p className="kund" > Icons of Cell Structures</p>
                            </Grid>
                        </Grid>

                        {/* render icon data here with image  */}
                        <Grid container spacing={2}>
                            {displayIconData.map((icon) => (
                                <Grid key={icon.id} item lg={3} sm={6} md={6} xs={6}  >
                                        <div className="Buucards">
                                            <div style={{ position: 'relative' }} className="belubee" onClick={() => handleDetailIcon(icon)}>
                                                <img src={image_url + icon.iconImage} className="iconnimagee" />
                                                <p 
                                                  className="cardbuu_text"
                                                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '15px', color: "black" }}
                                                >
                                                  {icon.iconName}
                                                </p>
                                            </div>
                                        </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                </div>


                <div className="buthum">
                    <div style={{ margin: '2rem' }} >
                        <Button
                            variant="contained"
                            className="joinbutton"
                            href=" "
                            style={{
                                backgroundColor: 'white',
                                color: "#025FD9",
                                borderRadius: '50px',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                border: '1px solid #025FD9'

                            }}
                        >
                            Back To Library Home
                        </Button>
                    </div>
                </div>

                <div className="bio">
                    <img src={bio} alt='bio icon' className="biosmallicon"/>
                </div>

                <div className="docdivdiv">
                    
                    <Grid container spacing={0}>
                        <Grid item lg={6} sm={12} md={12} xs={12}  >
                            <div className="newdocmaindiv">
                                <h2 className="newdocheading">
                                    Unleash Creativity: Harness a Wealth of Icons and More in Our Free, Web-Based Software for Limitless Possibilities
                                </h2>
                                <div className="docdiv">
                                    <img src={smalltick} alt='check' className="checksize" />
                                    <h4 >Unlock Creativity: Dive into Life Sciences with Thousands of Pre-Made Icons and Templates Across 30+ Fields</h4>
                                </div>
                                <div className="docdiv">
                                    <img src={smalltick} alt='check' className="checksize" />
                                    <h4> Infinite Inspiration: Explore 1000s of Icons and Templates Spanning 30+ Life Science Discipline</h4>
                                </div>
                                <div className="docdiv">
                                    <img src={smalltick} alt='check' className="checksize" />
                                    <h4>  Design Excellence: 1000s of Icons and Templates, Tailored for 30+ Life Science Specializations</h4>
                                </div>
                                <div className="docdiv">
                                    <img src={smalltick} alt='check' className="checksize" />
                                    <h4> Seamless Export: Transform Your Creations into JPG, PNG, and PDF Formats Directly to Your Desktop</h4>
                                </div>

                                <div className="docsinup">
                                    <div>
                                        <Button 
                                            variant="contained" 
                                            disableElevation 
                                            className="customButton" 
                                            style={{   
                                                fontWeight: '600',   
                                                background: "unset",
                                                background: "#F99A1F" 
                                            }}
                                            >
                                            Sign Up Free
                                        </Button>
                                    </div>

                                </div>

                            </div>
                        </Grid>
                        <Grid item lg={6} sm={12} md={12} xs={12}  >
                            <div className="newdoc">
                                <img src={frame10}  alt='doctorimg' className="frame10" />
                            </div>
                        </Grid>
                    </Grid>

                </div>

                <div className="bluekeeda">
                    <img src={bluekeeda} className="bluekeedaimg" />
                </div>

                <div className="frame9" style={{ backgroundImage: `url(${frame9})` }}>

                    <p className="frame9p">
                        Join the Scientific Community: Millions of Researchers Uniting on
                        BioRender for Collaborative Innovation
                    </p>
                    <p className="frame9p2">Join the Scientific Community: Millions of Researchers Uniting on Unlock Creativity: Sign Up for Your Free Account and Accelerate Scientific Figure Creation Today! </p>
                    <div className="logbut">
                        <div>
                            <Button variant="contained" disableElevation className="customButton" style={{ backgroundColor: 'white', color: 'black', fontWeight: '600' }}>
                                Sign Up Free
                            </Button>
                        </div>

                    </div>

                    <div className="greenkida">
                        <img src={greekida} className="greenkidaimg" />
                    </div>

                </div>

            </div>
            {/* <Footer /> */}

        </>
    );
};

export default IconPage;