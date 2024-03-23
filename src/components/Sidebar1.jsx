import React from 'react'
import { Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Sidebar1 = () => {
    const navigate = useNavigate()

    const handleBasicVedio = () => {
        navigate(`/user/basic`)
    }

    const handleTutorial = () => {
        navigate(`/user/resource`)
    }
    
  return (
    <>
        <Grid item lg={12} sm={12} md={12} xs={12}>
            <div className="bluesideee" >
                <div className="link" onClick={handleTutorial}>
                    <div 
                        className="bluesideicon"
                    >
                        <h3 className="blueeh3"> All Tutorials </h3>
                    </div>                    
                </div>
                <a className="link" onClick={handleBasicVedio}>
                    <div className="bluesideicon">
                        <h3 className="blueeh3"> BioVisuals Basic </h3>
                    </div>
                </a>
                {/* <a className="link">
                    <div className="bluesideicon">            
                        <h3 className="blueeh3"> All Tutorials </h3>
                    </div>
                </a> */}
            </div>
        </Grid>
    </>
  )
}    

export default Sidebar1