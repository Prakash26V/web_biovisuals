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


const Privacy = () => {
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
                                    <p className="hero_text ">Privacy Policies
                                    </p>
                                </div>
                                <div className="structtoo">
                                    <p className="struckp"> Home
                                        / <span className="struct"> Privacy Policies </span></p>
                                </div>



                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div style={{ margin: '1rem', }}>



                    <div >
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12}  >
                                <h2 className="h2about" >BioVisuals - Privacy Policies</h2>
                            </Grid>
                            
                                <div className="termsbg">
                                    <p className="h2term" > Privacy Policies </p>
                                </div>
                           
                        </Grid>

                    </div>

                    <div className="gola">
                        <img src={golaa} alt="" className="imggola" />
                    </div>


                </div>

                <div>
                    <Grid container spacing={0}>
                        <Grid item lg={12} sm={12} md={12} xs={12}  >
                           <div className="termcont">
                           <p className="pgray">
                            Greetings and a warm welcome to Biovisuals, your gateway to a revolutionary cloud-based science communication and illustration platform! By embarking on this journey with us, you acknowledge and embrace the terms outlined in this Terms of Service document. It's essential to familiarize yourself with these terms as they form the foundation of our collaboration, ensuring a seamless and enriching experience. Please take a moment to read, understand, and agree to be bound by these terms
                            </p>
                            <h2 className="hblack"> Comprehensive Overview of Our Terms of Services: Your Guide to Understanding and Navigating the Agreement  </h2>

                            <p className="pgray">
                            Welcome to BioVisual! As you embark on your scientific journey with us, it's essential to familiarize yourself with the terms and conditions outlined in this Agreement. Science Suite Inc., operating as BioVisual, a distinguished Canadian corporation, and its affiliates ("BioVisual," "we," or "us") are committed to providing you with exceptional services while ensuring clarity and transparency in our partnership. Below, we'll guide you through the key elements of this Agreement
                            </p>
                            <h2 className="hblack"> Customization Of Your Needs </h2>
                            <ol >
                                <li>  <p className="pgray"> 1. Your BioVisual Plan is not just a static offering; we provide flexibility in terms of the number of Seats and pricing terms to accommodate your unique requirements.</p></li>
                                <li>  <p className="pgray"> 2. Explore our Pricing webpage at https://www.biovisuals.com/pricing for the most up-to-date information on the array of plans available.</p></li>
                            </ol>

                            <h2 className="hblack"> Customization Of Your Needs </h2>
                            <ul>
                                <li>  <p className="pgray"> 1. Your BioVisual Plan is not just a static offering; we provide flexibility in terms of the number of Seats and pricing terms to accommodate your unique requirements.</p></li>
                                <li>  <p className="pgray"> 2. Explore our Pricing webpage at https://www.biovisuals.com/pricing for the most up-to-date information on the array of plans available.</p></li>
                            </ul>
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

export default Privacy;