import Header from "../components/Header"
import React, { useRef, useEffect, useState } from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import question from '../assets/Images/question.png'
import bell from '../assets/Images/bell.png'
import profile from '../assets/Images/profile.png'
import searchiccoo from '../assets/Images/searchiccoo.png'
import logo from "../assets/Images/logo.png"
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
import  settings from '../assets/Images/settings.png'
import upgrade from '../assets/Images/upgrade.png'
import { Link, useNavigate } from "react-router-dom";
import TemplateCreationModal from "./TemplateCreationModel";
import axios from "axios";
import Header1 from "../components/Header1";


const SharedFiles = () => {
    const [sortBy, setSortBy] = useState("lastOpened"); // Default sorting option

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        // Fetch notifications again based on the selected sorting option
    }

    return (
        <>
            {/* <Header /> */}
            <Header1 />
            {/* <p>Shared Files page</p>
            <hr /> */}
            <Grid container spacing={0}>
                    <Grid item lg={2} sm={2} md={2} xs={2}>
                        <div className="bluesideee">
                            <a className="link">
                                <div 
                                  className="bluesideicon" 
                                //   onClick={handleCreateTemplate} 
                                >
                                  <h3 className="blueeh3"> New template</h3>
                                  <img src={plusiconss} className="blueiconkasize" />

                                </div>
                            </a>
                            <a className="link">
                              <div 
                                className="bluesideicon"
                                // onClick={getAllTemplate}
                                
                                >
                                <h3 className="blueeh3"> My Files </h3>
                                <img src={galleryicooonn} className="blueiconkasize" />
                              </div>
                            </a>
                            <a className="link">
                                <div 
                                    className="bluesideicon"      
                                    // onClick={handleShared}                              
                                >
                                    <h3 className="blueeh3"> Shared </h3>
                                    <img src={shareicon} className="blueiconkasize" />
                                </div>
                            </a>
                            <a className="link">
                                <div className="bluesideicon">

                                    <h3 className="blueeh3"> Trash </h3>
                                    <img src={Trash} className="blueiconkasize" />

                                </div>
                            </a>
                            <a className="link">
                                <div className="bluesideicon">

                                    <h3 className="blueeh3"> Templates </h3>
                                    <img src={templatataae} className="blueiconkasize" />

                                </div>
                            </a>
                        </div>
                    </Grid>

                    <Grid item lg={10} sm={10} md={10} xs={10}>
                        <div className="paddingkliye">
                            <Grid item lg={8} sm={8} md={8} xs={8}>
                                <div className="nehihai">
                                    <div className="qbatau">
                                        <h3 
                                            // className="h3hih3" 
                                            // onClick={getAllTemplate}                                               
                                        >
                                            Shared Files 
                                            {/* <span> 
                                                <img 
                                                    src={galleryicooonn} 
                                                    alt=" down arrow " 
                                                    style={{ height: '12px', width: '12px' }} 
                                                />
                                            </span> */}
                                        </h3>
                                    </div>

                                </div>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item lg={8} sm={8} md={8} xs={8}>
                                    <div className="nehihai">
                                        <div className="qbatau">
                                            <input />
                                        </div>

                                    </div>

                                </Grid>
                                <Grid item lg={2} sm={2} md={2} xs={2}>
                                    <div 
                                    // className="divcom"
                                    >
                                        {/* <h3> Last Opened <span> <img src={downarrow} alt=" down arrow " style={{ height: '12px', width: '12px' }} /></span></h3> */}
                                        <select id="sortSelect" value={sortBy} onChange={handleSortChange}>
                                            <option value="lastOpened">Last opened</option>
                                            <option value="lastModified">Last modified</option>
                                            <option value="nameAZ">Name (A-Z)</option>
                                            <option value="sharedDate">Shared date</option>
                                        </select>
                                    </div>


                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={1}>
                                    <div>
                                        <img src={mennuki} />
                                    </div>
                                </Grid>
                                <Grid item lg={1} sm={1} md={1} xs={1}>
                                    <div>
                                      <img src={botal} />
                                    </div>
                                </Grid>

                            </Grid>

                        </div>
                    
                        
{/*             
                        <div className="chandlerbeingg">
                            <h3 className="chandelerh3"> Begin With a Tempelate </h3>
                        </div> */}
                        <Grid container spacing={0}>
                            {/* <Grid item lg={3} sm={4} md={4} xs={4}>
                              <img src={fake2} />
                            </Grid>
                            <Grid item lg={3} sm={4} md={4} xs={4}>
                                <img src={fake2} />
                            </Grid>
                            <Grid item lg={3} sm={4} md={4} xs={4}>
                                <img src={fake2} />
                            </Grid>
                            <Grid item lg={3} sm={4} md={4} xs={4}>
                                <img src={fake2} />
                            </Grid>
                            <Grid item lg={3} sm={4} md={4} xs={4}>
                                <img src={fake2} />
                            </Grid>
                            <Grid item lg={3} sm={4} md={4} xs={4}>
                                <img src={fake2} />
                            </Grid> */}
                            {/* render here created template */}
                        </Grid>

                    </Grid>
                </Grid>

        </>
    )
}

export default SharedFiles