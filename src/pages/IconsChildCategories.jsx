// childCategory Page
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
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
import child1 from '../assets/Images/child1.png'
import Footer from "../components/Footer";
import axios from "axios";
import { base_url, image_url } from "../utils/service";


const IconsChildCategories = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [displayChildCategoriesData, setDisplayChildCategoriesData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const { subCategoryId } = useParams();

    console.log("subCategoryId", subCategoryId)

    const handleChildCatogoriesData = async () => {
        try {
            const response = await axios.post(`${base_url}api/user/adminChildCategories`, { _id: subCategoryId });
            console.log("Childcategories API Response:", response.data);
            setDisplayChildCategoriesData(response.data.result);
            console.log("data", (response.data.result))
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(() => {
        handleChildCatogoriesData()
    }, [])

    return (
        <>
            {/* <Header /> */}
            <div style={{ marginTop: '115px'}}>
                <div style={{ margin: '1rem' }}>
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
                                <p className="kund" > Icons of Cytoskeleton and ECM </p>
                            </Grid>
                        </Grid>
                        
                        {/* render all child catgories data here remove static data */}
                        <Grid container spacing={2}>
                            {displayChildCategoriesData.map((childCategory) => (
                                <Grid key={childCategory.id} item lg={3} sm={6} md={6} xs={6}>
                                    <Link 
                                        // to={`/user/icon`} 
                                        to={`/user/icon/${childCategory._id}`}
                                        className="link"
                                    >
                                        <div className="Buucards">
                                            <div style={{ position: 'relative' }} className="belubee">
                                                <img src={image_url + childCategory.childCategoryImage} className="iconnimagee"  />
                                                <p 
                                                    className="cardbuu_text"
                                                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '15px', color: "black" }}
                                                >
                                                    {childCategory.childCategoryName}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                </div>

                <div className="twobuttons">
                    <div style={{ marginRight: '0.2rem' }} >
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
                    <div>
                        <Button
                            variant="contained"
                            className="joinbutton"
                            style={{
                                backgroundColor: "#025FD9",
                                color: "white",
                                borderRadius: '50px',
                                border: '1px solid #025FD9',
                                paddingRight:'3rem',
                                paddingLeft:'3rem',
                                paddingTop:'0.7rem',
                                paddingBottom:'0.7rem',

                            }}
                        >
                           Next
                        </Button>
                    </div>
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

export default IconsChildCategories;