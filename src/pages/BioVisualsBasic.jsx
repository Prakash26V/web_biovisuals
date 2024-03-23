import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { base_url } from "../utils/service";
import Sidebar1 from "../components/Sidebar1";

const BioVisualsBasic = () => {
    const [displayVedio, setDisplayVedio] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleGetVedios = async () => {
        try {
            const response = await axios.get(`${base_url}api/user/getVideoBycategoryName`);
            setDisplayVedio(response.data.result);
            console.log("rdata", response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // changes the code for vedio searching on page please resolve this issue?
    const filteredVideos = displayVedio.filter((video) => {
        const title = (video.title || '').toLowerCase();
        return title.includes(searchTerm.toLowerCase());
    });

    useEffect(() => {
        handleGetVedios();
    }, []);

    return (
        <>       

            <Grid container spacing={0}>
                {/* <Header /> */}
                <Grid style={{textAlign: "center", backgroundColor: '#F29728', width: '100%', height: "150px", color: 'white' }}>
                    <h3 >All Tutorials</h3>
                    <p >Learn how to create professional science figures in minutes with BioVisulas.</p>
                    <TextField
                        fullWidth
                        onChange={handleInputChange}
                        placeholder="Search for videos..."
                        variant="outlined"
                        style={{ margin: '10px 0', backgroundColor: 'white' }}
                    />
                </Grid>
                
                {/* render all videos here, three in one row */}
                <Grid container spacing={2} style={{ paddingTop: "1%" }}>
                    <Grid item lg={2} sm={2} md={2} xs={12}>
                        <Sidebar1 />
                    </Grid>
                    
                    <Grid item lg={10} sm={10} md={10} xs={12}>
                        <Grid container spacing={2}>
                            {filteredVideos.map((videoUrl, index) => (
                                <Grid item key={index} lg={4} md={6} sm={12} xs={12}>
                                    <video width="100%" controls>
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <p>{videoUrl.title}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default BioVisualsBasic;
