import React from "react";
import uncle from "../assets/Images/uncleee.png"
import gol from "../assets/Images/gol.gif"
import doctdoct from "../assets/Images/doctdoct.png"

const DoctorLogo = () => {

    return ( 
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ backgroundImage: `url(${doctdoct})` ,}} className="DocBg">
                <img src={gol} alt="gol" className="doctor_uncle" />
            </div>
        </div>
    );
}

export default DoctorLogo;

{/* <div style={{ backgroundImage: `url(${uncle})` ,}} className="DocBg"> */}