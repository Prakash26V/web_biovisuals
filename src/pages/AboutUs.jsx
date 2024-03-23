import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import Header from "../components/Header";
import aboutbg from '../assets/Images/aboutbg.png'
import frame9 from '../assets/Images/Frame9.png'
import greekida from '../assets/Images/greekida.png'
import bluekeeda from '../assets/Images/bluekeeda.png'
import whitedoctor from '../assets/Images/whitedoctor.png'
import golaa from '../assets/Images/golaa.png'
import Footer from "../components/Footer";


const AboutUs = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);


    return (
        <>
            <Header />
            <div>
                <div style={{ margin: '1rem' }}>
                    <div style={{ backgroundImage: `url(${aboutbg})` }} className="aboutbg">
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12} >
                                <div className="humhaiabout">
                                    <p className="hero_text ">About Us
                                    </p>
                                </div>
                                <div className="structtoo">
                                    <p className="struckp"> Home
                                        / <span className="struct"> About </span></p>
                                </div>



                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div style={{ margin: '1rem', }}>


               
                    <div >
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12}  >
                                <p className="boutcad" >About Our Comapny</p>
                            </Grid>
                        </Grid>

                    </div>

                    <div className="gola">
                        <img src={golaa} alt="" className="imggola" />
                    </div>
                   

                </div>



                <div className="aboutmaindiv">
                    <Grid container spacing={0}>
                        <Grid item lg={5} sm={12} md={12} xs={12}  >
                            <div className="whitedocdiv">
                                <img src={whitedoctor} alt=" doctorimg" />
                            </div>
                        </Grid>
                        <Grid item lg={7} sm={12} md={12} xs={12}  >
                            <div className="aboutcontetetete">
                                <h2 className="h2about"> About Our Company </h2>
                                <p className="pabout"> Welcome to the cutting edge of scientific communication – BioRender, the world's first and foremost tool designed exclusively to empower scientists in crafting stunning, professional-grade scientific figures. Unleash your creativity and enhance your research impact with our revolutionary platform</p>
                                <p className="pabout"> Welcome to the cutting edge of scientific communication – BioRender, the world's first and foremost tool designed exclusively to empower scientists in crafting stunning, professional-grade scientific figures. Unleash your creativity and enhance your research impact with our revolutionary platform</p>
                                <div>
                                    <Button
                                        variant="contained"
                                        className="joinbutton"
                                        style={{
                                            backgroundColor: "#025FD9",
                                            color: "white",
                                            borderRadius: '50px',
                                            border: '1px solid #025FD9'

                                        }}
                                    >
                                        Join For  Free
                                    </Button>
                                </div>
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
            <Footer />

        </>
    );
};

export default AboutUs;