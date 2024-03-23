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
import settings from '../assets/Images/settings.png'
import upgrade from '../assets/Images/upgrade.png'
import { Link, useNavigate } from "react-router-dom";
import TemplateCreationModal from "./TemplateCreationModel";
import axios from "axios";
import Header1 from "../components/Header1";
import { base_url } from "../utils/service";


const Dashboard = () => {
    const navigate = useNavigate()
    const [volume, setVolume] = useState(0.5); const rulerRef = useRef();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [showTutorial, setShowTutorial] = useState(false);
    const [showTemplates, setShowTemplates] = useState(true);
    const [randomTemplates, setRandomTemplates] = useState([]);
    const [dateFilter, setDateFilter] = useState('');
    const [isCreatingTemplate, setCreatingTemplate] = useState(false);
    const [templates, setTemplates] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isCreatingFolder, setIsCreatingFolder] = useState(false);
    const open = Boolean(anchorEl);
    // const [visibleCount, setVisibleCount] = useState(1);
    const [showAllFiles, setShowAllFiles] = useState(false);
    const [folders, setFolders] = useState([]);
    const [sortBy, setSortBy] = useState("lastOpened"); // Default sorting option
    const [showCreateByMe, setShowCreateByMe] = useState(false);

    const toggleCreateByMe = () => {
        setShowCreateByMe(!showCreateByMe);
    };

    // Function to handle viewing all files
    const handleViewAllFiles = () => {
        setShowAllFiles(true);
        // Fetch and set all files here, or update the templates state accordingly
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        //   navigate('/user/notification')
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let [canvaData, setCanvaData] = useState([])
    // Function to handle creating templates
    const handleCreateTemplate = () => {
        //   setCreatingTemplate(true);
        //   navigate("/user/canvas")
        window.location.href = `https://astroone.s3.ap-south-1.amazonaws.com/canvas_biovisuals/JS-canva-Backup/index.html`;
    };

    useEffect(() => {
        axios.get('https://biovisuals.in/api/user/get_templete').then(res => {
            // console.log("Response Canvas :: ", res)
            console.log("Live Data")
            console.log("Canvas List Response ::: ", res?.data?.result)
            setCanvaData(res?.data?.result)
        }).catch(error => {
            console.log("Error ::: ", error)
        })
    }, [])

    const handleClickTemplate = (data) => {
        window.location.href = `https://astroone.s3.ap-south-1.amazonaws.com/canvas_biovisuals/JS-canva-Backup/index.html?id=${data?._id}&name=${encodeURIComponent(data?.templateName)}`;

    }

    const handleCloseModal = () => {
        setCreatingTemplate(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Function to filter templates based on the search input
    const filterTemplates = (templates) => {
        return templates.filter((template) => {
            return template.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    };

    // Function to handle watching tutorial videos
    const handleWatchTutorial = () => {
        setShowTutorial(true);
        // Implement logic to show tutorial videos
    };

    const handleNotification = () => {
        navigate('/user/notification')
    }

    const fetchRandomTemplatesFromAPI = async () => {
        // Assume this function returns a response with random templates
        const response = await fetch(`${base_url}api/user/`);
        const data = await response.json();
        return data.templates; // Assuming the response contains a property named 'templates'
    };

    // Function to handle viewing random templates
    const handleViewRandomTemplates = () => {
        // Implement logic to fetch and set random templates
        // For example, you can make an API call here
        setRandomTemplates([...fetchRandomTemplatesFromAPI]);
        // setRandomTemplates(randomTemplatesData);
        setShowTemplates(true);
    };

    // Function to handle filtering templates by date
    const handleFilterByDate = () => {
        // Implement logic to filter templates by date
        // You may need to make an API call with the selected date
        setShowTemplates(true);
    };

    const handleVolumeChange = (event) => {
        setVolume(event.target.valueAsNumber);
    };

    const getAllTemplate = async () => {
        try {
            const response = await axios.get(`${base_url}api/user/all-created-folder`);
            setTemplates(response.data.result);
            // console.log("data", response.data.result)
            console.log("data", response.data.result)
        } catch (error) {
            console.error("Error fetching templates:", error);
            // Handle error cases
        }
    };
    console.log("templates", templates)

    // Function to handle filtering templates by date and search
    const handleFilter = () => {
        // Implement logic to filter templates by date and search
        // You may need to make an API call with the selected date and search input
        // For now, let's assume you have a function to fetch filtered templates
        const filteredTemplates = fetchFilteredTemplatesFromAPI(dateFilter);
        setTemplates(filteredTemplates);
        setShowTemplates(true);
    };

    const handleShared = () => {
        navigate('/user/dashoard/share')
    }

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        // Fetch notifications again based on the selected sorting option
    }

    const fetchFilteredTemplatesFromAPI = async (dateFilter) => {
        // Assume this function returns a response with filtered templates
        const response = await fetch(`/api/templates/filter?date=${dateFilter}`);
        const data = await response.json();
        return data.templates; // Assuming the response contains a property named 'templates'
    };

    const filterFolders = (folders) => {
        return folders.filter((folder) => {
            return folder.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    };

    // // Function to open the create folder popup
    // const handleOpenCreateFolder = () => {
    //     setIsCreatingFolder(true);
    // };

    // Function to close the create folder popup
    const handleCloseCreateFolder = () => {
        setIsCreatingFolder(false);
    };

    const createNewFolder = () => {
        // Function to handle clicking on "New Folder"
        console.log("create folder")
    };

    // Function to open the template creation modal
    const handleOpenCreateFolder = () => {
        setCreatingTemplate(true); // Set isCreatingTemplate to true
    };

    useEffect(() => {
        // getAllTemplate();
    }, []);

    return (
        <div>

            {/* <Header1 
                style={{ backgroundColor: "red" }} 
                searchInput={searchInput} 
                onSearchInputChange={handleSearchInputChange}
            /> */}


            <div className="wideride" >
                <Grid container spacing={0}>
                    <Grid item lg={2} sm={2} md={2} xs={2}>
                        <div className="bluesideee">
                            <a className="link">
                                <div
                                    className="bluesideicon"
                                    onClick={handleCreateTemplate}
                                >
                                    <h3 className="blueeh3"> New template</h3>
                                    <img src={plusiconss} className="blueiconkasize" />

                                </div>
                            </a>

                            <div className="link">
                                <div
                                    className="bluesideicon"
                                    onClick={toggleCreateByMe}
                                >
                                    <h3 className="blueeh3"> Create by Me </h3>
                                    <img src={galleryicooonn} className="blueiconkasize" />
                                </div>
                                {showCreateByMe && (
                                    <div className="dropdown-content">
                                        <div className="bluesideicon">
                                            <a
                                                onClick={getAllTemplate}>My Files</a>
                                            <img src={galleryicooonn} className="blueiconkasize" />
                                        </div>
                                        <a className="bluesideicon" onClick={handleOpenCreateFolder}>New Folder</a>
                                        {/* Popup for creating a new folder */}
                                        <Grid container spacing={1}>
                                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                                <div >
                                                    {filterTemplates(templates).map((template) => (
                                                        <p className="bluesideicon" key={template.id}>{template.name}</p>
                                                    ))}
                                                </div>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={1}>
                                            {filterFolders(folders).map((folder) => (
                                                <Grid item key={folder.id} lg={3} md={4} sm={6} xs={12}>
                                                    <div>
                                                        <p>{folder.name}</p>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>

                                    </div>
                                )}
                            </div>
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

                    <Grid item lg={10} sm={10} md={10} xs={10} style={{ backgroundColor: '#FFE2C4' }} >
                        <div className="paddingkliye" >
                            <Grid container spacing={2}>
                                <Grid item lg={8} sm={8} md={8} xs={8}>
                                    <div className="nehihai">
                                        <div className="qbatau">
                                            <h3
                                                className="h3hih3"
                                                onClick={getAllTemplate}
                                            >
                                                My Files
                                                <span>
                                                    <img
                                                        src={galleryicooonn}
                                                        alt=" down arrow "
                                                        style={{ height: '12px', width: '12px' }}
                                                    />
                                                </span>
                                            </h3>
                                        </div>

                                    </div>

                                </Grid>
                                <Grid item lg={2} sm={2} md={2} xs={2}>

                                    <div >
                                        {/* <h3> Last Opened <span> <img src={downarrow} alt=" down arrow " style={{ height: '12px', width: '12px' }} /></span></h3> */}
                                        <select id="sortSelect" value={sortBy} onChange={handleSortChange} className="divcom" >
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
                        <Grid container spacing={1}>
                            {/* {filterTemplates(templates).map((template) => (
                                <Grid item key={template.id} lg={3} md={4} sm={6} xs={12}>
                                    <div>
                                        <p>{template.name}</p>
                                    </div>
                                </Grid>
                            ))} */}
                        </Grid>
                        <Grid container spacing={1}>
                            {filterFolders(folders).map((folder) => (
                                <Grid item key={folder.id} lg={3} md={4} sm={6} xs={12}>
                                    <div>
                                        <p>{folder.name}</p>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>

                        <div className="chandlerbeingg">
                            <h3 className="chandelerh3"> Begin With a Tempelate </h3>
                        </div>
                        <div style={{padding:"50px"}}>
                            <div style={{ listStyleType: "none", display: "flex", gap: "30px", flexWrap: "wrap" }}>
                                {canvaData?.map((value, index) => (
                                    <li key={index} style={{ minHeight: "100px", minWidth: "100px", display: "flex", gap: "50px", justifyContent: "space-between", marginBottom: "5px", backgroundColor: "#fff", padding: "10px", borderRadius: "5px" }}>
                                        <div style={{}}>{value?.templateName}</div>
                                        {/* <img src={fake2} /> */}
                                        <div style={{ cursor: "pointer", alignSelf: "end" }} onClick={() => handleClickTemplate(value)}>Open</div>
                                    </li>
                                ))}
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </div>

            {/* Render the TemplateCreationModal */}
            <TemplateCreationModal isOpen={isCreatingTemplate} onClose={handleCloseModal} />

        </div>
    );
};

export default Dashboard;