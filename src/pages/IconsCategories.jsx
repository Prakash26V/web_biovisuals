// Icons Category page
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";
import aboutbg from '../assets/Images/aboutbg.png'
import searchiccoo from '../assets/Images/searchiccoo.png'
import bluebg from '../assets/Images/bluebg.png'
import drag from '../assets/Images/drag.png'
import pen from '../assets/Images/pen.png'
import drop from '../assets/Images/drop.png'
import frame9 from '../assets/Images/Frame9.png'
import greekida from '../assets/Images/greekida.png'
import bluekeeda from '../assets/Images/bluekeeda.png'
import Footer from "../components/Footer";
import axios from "axios";
import { base_url, image_url } from "../utils/service";


const IconsCategories = () => {
  const [displayCategoriesData, setDisplayCategoriesData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoriesIcon = async () => {
    try {
      const response = await axios.get(`${base_url}api/user/adminCategories`);
      setDisplayCategoriesData(response.data.result);
      console.log("data", (response.data.result))
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = displayCategoriesData.filter((category) => {
    const categoryName = (category.categoryName || '').toLowerCase();
    const subCategoryName = (category.subCategoryName || '').toLowerCase();
    const childCategoryName = (category.childCategoryName || '').toLowerCase();
    const iconName = (category.iconName || '').toLowerCase();

    return (
      categoryName.includes(searchTerm.toLowerCase()) ||
      subCategoryName.includes(searchTerm.toLowerCase()) ||
      childCategoryName.includes(searchTerm.toLowerCase()) ||
      iconName.includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    handleCategoriesIcon()
  }, [searchTerm])

  return (
    <>
      {/* <Header /> */}
      <div>
        <div style={{ margin: '1rem', marginTop: "120px" }}>
          <div style={{ backgroundImage: `url(${aboutbg})` }} className="aboutbg">
            <Grid container spacing={0}>
              <Grid item lg={12} sm={12} md={12} xs={12} >
                <p className="hero_text ">
                  Cutting-edge Scientific Discoveries
                  Exploring the Frontiers of Knowledge
                </p>
                <p className="aboutsectext">Bio Visuals Effortless Creation of Publication-Quality Figures with Pre-Made Icons and Templates</p>

                <div style={{ display: 'flex', flexDirection: 'row', padding: '2rem' }}>
                  <Grid item lg={12} sm={12} md={12} xs={12} >

                    {/* add search feature here behalf using api */}
                    <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                      <TextField
                        // onClick={handleSearch}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="Search Thousands of Icons Across 30+ Life Science Fields for a Truly Unique Experience"
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
              </Grid>
            </Grid>
          </div>
        </div>

        <div style={{ margin: '1rem', }}>
          <div >
            <Grid container spacing={0}>
              <Grid item lg={12} sm={12} md={12} xs={12}  >
                <p className="boutcad" > Industry-Approved Icons: Explore a Curated Collection Vetted by Professionals for Your Creative Needs</p>
              </Grid>
            </Grid>

            {/* need to render all get catgories data here remonve static images need to render dynamic data */}
            <Grid container spacing={2}>        
              {filteredCategories.map((category) => (
                <Grid 
                  key={category._id} 
                  item lg={3} sm={6} md={6} xs={6}
                  // onClick={() => handleSubCategory()}
                >
                  <Link 
                    // to={`/user/subcategoriesicon`} 
                    to={`/user/subcategoriesicon/${category._id}`}
                    className="link"
                  >
                    
                    <div className="Buucards">
                      <div style={{ position: 'relative' }} className="belubee">
                        <img src={image_url + category.categoryImage} className="iconnimagee" />
                        <p
                          className="cardbuu_text"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '15px',
                            color: "black"
                          }}
                        >
                          {category.categoryName}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>

        </div>

        <div className="sbtohbluehai">
          <div style={{ backgroundImage: `url(${bluebg})` }} className="bluebg">
            <div>
              <h2 className="bluebgtext"> Elevate Your Presentations: Craft Exceptional Scientific Figures for Lectures, Publications, Meetings, Posters, and Beyond </h2>
            </div>
          </div>
        </div>

        <div className="drag">
          <Grid container spacing={2}>
            <Grid item lg={4} sm={12} md={12} xs={12}  >
              <div className="dragdiv">
                <a className="link">
                  <img src={drag} className="dragimg" />
                  <h2 className="dragh2"> DRAG-AND-DROP</h2>
                  <p className="dragp">
                    Unleash Creativity: Dive into 50,000+ Icons and Templates Across 30+ Life Science Fields, Expertly Curated by Professional Medical Illustrators
                  </p>
                </a>
              </div>
            </Grid>
            <Grid item lg={4} sm={12} md={12} xs={12}  >
              <div className="dragdiv">
                <a className="link">
                  <img src={pen} className="dragimg" />
                  <h2 className="dragh2"> CUSTOM ICONS </h2>
                  <p className="dragp">
                    Tailored Icons for Your Niche: Discover Icons for the Most Specialized Life Science Fields or Get Custom Creations in Just 48 Hours
                  </p>
                </a>
              </div>
            </Grid>
            <Grid item lg={4} sm={12} md={12} xs={12}  >
              <div className="dragdiv">
                <a className="link">
                  <img src={drop} className="dragimg" />
                  <h2 className="dragh2"> DIRECT EXPORT</h2>
                  <p className="dragp">
                    Seamless Export Options: Share Your Figures Effortlessly in JPG, PNG, or PDF for Presentations, Publications, Web, or Print
                  </p>
                </a>
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

export default IconsCategories;