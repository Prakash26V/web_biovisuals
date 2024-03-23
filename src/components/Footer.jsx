// import React, { useState } from "react";
// import { Grid, } from "@mui/material";
// import { Col, Layout, Row } from "antd";
// import { MailFilled, ClockCircleOutlined } from "@ant-design/icons";


// import { Link } from "react-router-dom";
// import logo from "../assets/Images/logo.png"
// import dotImg from "../assets/Images/dotImg.png"

// const Footer = () => {
//     const [openWhatsApp, setOpenWhatsApp] = useState(false);
//     const { Footer } = Layout

//     return (
//         <div>
//             <div  className="footer">
//                 <Grid container spacing={1}>

//                     <Grid item lg={3} sm={12} md={12} xs={12}>
//                         <p>
//                             <img src={logo} alt="logo" className="footer_logo" />
//                         </p>
//                         <p>
//                             Nostrud exertation ullamco labor
//                             aliquip commodo duis.
//                         </p>
//                         <p>
//                             Flat 20, Reynolds Neck,<br />
//                             FV77 8WS
//                         </p>
//                         <p>Call Us: 333-666-0001</p>
//                         <p>
//                             info@example.com
//                         </p>
//                     </Grid>
                  
//                     <Grid item lg={3} sm={12} md={12} xs={12}>
//                         <h5>
//                             Latest Events
//                         </h5>
//                         <p>
//                             A New World View Our
//                             Global Impact.
//                         </p>
//                         <p>
//                             27 May, 2021
//                         </p>
//                         <p>
//                             Proper Self-collection of
//                             Nasal Swabs.
//                         </p>
//                         <p>
//                             26 May, 2021
//                         </p>
//                         <p>
//                             Evidence Lacking for
//                             Widespread Vitamin.
//                         </p>
//                         <p>
//                             25 May, 2021
//                         </p>
//                     </Grid>
//                     <Grid item lg={3} sm={12} md={12} xs={12}>
//                        <h5>
                       
//                        Usefull Link
                       
//                        </h5>
//                        <p>
//                        <Link to="/user/aboutus" className="link_footer">
//                        About Us
//                        </Link>
//                        </p>
//                        <p>
//                        <Link to="/user/terms" className="link_footer">
//                        Terms $ Conditions
//                        </Link>
//                        </p>
//                        <p>
//                        <Link to="/user/privacy" className="link_footer">
//                        Privacy Policies
//                        </Link>
//                        </p>
//                        <p>
//                        <Link to="/" className="link_footer">
//                        Contact Us
//                        </Link>
//                        </p>
//                     </Grid>
//                     <Grid item lg={3} sm={12} md={12} xs={12}>
//                        <h5>
//                        Usefull Link
//                        </h5>
                      
//                        <p>
//                        <Link to="/" className="link_footer">
//                        Services
//                        </Link>
//                        </p>
//                         {/* <p>
//                             <Link to="/" className="link_footer">
//                                 How It Works
//                             </Link>
//                         </p> */}
//                         <p onClick={() => setOpenWhatsApp(true)}>
//                             How It Works
//                         </p>

//                        {openWhatsApp && (
//                             <a
//                                 href="https://api.whatsapp.com/send?phone=6307138273"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Open WhatsApp Support
//                             </a>
//                         )}
//                        <p>
//                        <Link to="/" className="link_footer">
//                        Our Blog
//                        </Link>
//                        </p>
//                        <p><Link to="/" className="link_footer">
//                        Contact Us
//                        </Link>
//                        </p>
//                     </Grid>

                    

//                 </Grid>
//                 <hr/>
//                 <div >
//                     <h2 style={{textAlign:'center'}}>Biovisulas <span style={{fontWeight:'300'}}>  © 2024 All Right Reserved</span></h2>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Footer;



import React from 'react'
import { Grid, } from '@mui/material';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <Grid container spacing={2}>
          <Grid item md={3} l={3} xl={12} s={12} xs={12}>
            <div className='footerelem'>
              <h4> Our Network </h4>
              <ui>
                <li> <a className='links'> Brusheezy </a> </li>
                <li> <a className='links'> Vecteezy </a> </li>
                <li>< a className='links'> Videezy </a>    </li>
                <li><a className='links'> Developer Api  </a> </li>
                <li><a className='links'> Ai Reverse Image Search </a> </li>
                <li> <a className='links'>Ai Background Removal </a>  </li>
              </ui>
            </div>
          </Grid>
          <Grid item md={3} l={3} xl={12} s={12} xs={12}>
            <div className='footerelem'>
              <h4> Site Links </h4>
              <ui>
                <li><a className='links'> Licensing Agreement </a> </li>
                <li> <a className='links'>DMCA </a></li>
                <li> <a className='links'>Affiliate Program </a></li>
                <li><a className='links'> Popular Vector Searches </a> </li>
                <li><a className='links'> Popular Photo Searches </a></li>
                <li> <a className='links'>Popular Video  Searches </a></li>
              </ui>
            </div>
          </Grid>
          <Grid item md={3} l={3} xl={12} s={12} xs={12}>
            <div className='footerelem'>
              <h4> Learn More  </h4>
              <ui>
                <li>
                  <a className='links'> FAQs
                  </a> </li>
                <li>
                  <a className='links'>Contact Us
                  </a> </li>
                <li>
                  <a className='links'> About Us
                  </a> </li>
                <li>
                  <a className='links'> Our Blog
                  </a>  </li>
                <li>
                  <a className='links'>Contributor Directory
                  </a> </li>
                <li>
                  <a className='links'> Become a Contributor
                  </a> </li>
              </ui>
            </div>
          </Grid>
          <Grid item md={3} l={3} xl={12} s={12} xs={12}>
            <div className='footerelem'>
              <h4> Languages  </h4>
              <ui>
                <li>
                <a className='links'> English 
                </a> </li>
                <li>
                <a className='links'> Espanol 
                </a></li>
                <li>
                <a className='links'> Portugues 
                </a></li>
                <li>
                <a className='links'> Deutsch  
                </a></li>
                <li>
                <a className='links'> Francaes
                </a> </li>
                <li>
                < a className='links'> More Languages  
                </a></li>
              </ui>
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className='subFooter'>
          <div className='footerIcons'>
           
            <a > <FaSquareFacebook /> 
            </a> 
           
            <a ><FaXTwitter />
            </a>
            
            <a ><FaPinterest />
            </a> 
           
            <a ><AiFillYoutube />
            </a>  
           
            <a ><FaInstagramSquare /> 
            </a>
           
            <a ><FaLinkedin />
            </a> 
           
            <a ><RiTiktokLine /> 
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer