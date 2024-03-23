import React, { useEffect, useState } from "react";
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
import { WidthFull } from "@mui/icons-material";
import axios from "axios";
import useRazorpay from 'react-razorpay';
import { base_url } from "../utils/service";
import { useAuthContext } from "../context/AuthContext";

const PricingPage = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [plans, setPlans] = useState([]); // Updated state to hold an array of plans
    const [paymentdone, setPaymentDone] = useState(false); 
    const [Razorpay] = useRazorpay();
    const [trimmedData, setTrimmedData] = useState(null)
    const [paymentId, setPaymentId] = useState() 
    const { userId, userEmail, email } = useAuthContext();
    console.log("userEmail", email)
    console.log("userId", userId)


    const getPlans = async () => {
        try {
            const response = await axios.get(`${base_url}api/user/getAllPlans`);
            setPlans(response.data.result); // Check if the plans are nested under 'plans' in the response
            console.log("data", response.data.result);
        } catch (error) {
            console.error("Error fetching plans:", error);
        }
    };

    console.log("plans", plans)

    const handlePaymentStatus = async (planId, price) => {
        try {
            console.log("planId", planId);
            console.log("email", email)
            const response1 = await axios.post(`${base_url}api/payment/createPaymentRazorpay`,{ planId, price, email }, { 
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            console.log(response1.data);
    
            const options = {
                key: "rzp_test_LODgn3AQbr3k0A",
                amount: 50000,
                currency: "INR",
                name: "Bio Visuals",
                description: "some description",
                image: "/img/logo/logo.png",
                handler: async function (response) {
                    try {
                        console.log(response, "response");
                        const orderId = {
                            orderId: response1.data.orderId,
                        };
                        const PaymentId = {
                            paymentId: response.razorpay_payment_id,
                        };
                        console.log("paymentId", PaymentId)
                        // Dispatch action to validate payment data
                        const payload = {
                            status: "INSTALLATION PENDING",
                        };
                        // Store payment status data
                        const response2 = await axios.post(`${base_url}api/payment/verifyPayment`, orderId, PaymentId, {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                        console.log("responseData :::::::::::::::", response2.data);
                    } catch (error) {
                        console.log(error);
                    }
                },
                prefill: {
                    name: "rajiv pathak",
                    email: "rajivpathak199@gmail.com",
                },
                notify: {
                    sms: true,
                    email: true,
                },
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error handling payment:", error);
        }
    };

    useEffect(() => {
        getPlans();
        const script = document.createElement("script");
        script.src = "//checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* <Header /> */}
            <div style={{ marginTop: '115px'}}>
                <div style={{ margin: '1rem' }}>
                    <div style={{ backgroundImage: `url(${aboutbg})` }} className="aboutbg">
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12} >
                                <div className="humhaiabout">
                                    <p className="hero_text ">Pricing
                                    </p>
                                </div>
                                <div className="structtoo">
                                    <p className="struckp"> Home
                                        <span className="struct"> Pricing </span>
                                    </p>
                                </div>

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div style={{ margin: '1rem', }}>
               
                    <div >
                        <Grid container spacing={0}>
                            <Grid item lg={12} sm={12} md={12} xs={12}  >
                                <p className="boutcad" >Subscription Plans</p>
                                <p className="boutcadp"> Take your desired plan to get acess to our content easily use like ot offer special license offer to our user </p>
                            </Grid>
                        </Grid>

                    </div>                                

                </div>

                <div className="aboutmaindiv">
                    <Grid container spacing={1}>
                     
                        <Grid container spacing={1}>
                            <Grid item lg={3} sm={12} md={12} xs={12}  >
                                <div className="prcingcard">
                                    <h3 className="prcingh3"> Free Trail </h3>
                                    <hr />
                                    <p className="prcingh1"> <span className="prcingspan" > 0 USD </span></p>
                                    <p>lorem ipsume dummy data </p>
                                  
                                    <progress value={0.5} style={{width:'100%'}}  />
                                    <Button
                                        variant="contained"
                                        className="joinbutton"
                                        style={{
                                            backgroundColor: "#FF9A15",
                                            color: "white",
                                            borderRadius: '50px',
                                            margin:'2rem',
                                            border: '1px solid #FF9A15'

                                        }}
                                    >
                                        10 days left 
                                    </Button>
                                </div>
                            </Grid>
                            {plans?.map((plan) => (
                                <Grid item key={plan._id} lg={3} sm={12} md={3} xs={12}>
                                    <div className="prcingcard">
                                        <h4 className="prcingh3">{plan?.planName}</h4>
                                        <hr />
                                        <p className="prcingh1"> <span className="prcingspan">{plan?.planAmount}</span></p>
                                        <p>{plan?.planValidity}</p>
                                        <p>{plan?.description}</p>                            
                                         <Button
                                            variant="contained"
                                            className="joinbutton"
                                            style={{
                                                backgroundColor: "#FF9A15",
                                                color: "white",
                                                borderRadius: '50px',
                                                margin:'2rem',
                                                border: '1px solid #FF9A15'

                                            }}

                                            // onClick={handlePaymentStatus}
                                            onClick={() => handlePaymentStatus(plan._id, plan.planAmount)}
                                        >
                                            Go Premium 
                                        </Button>
                                    </div>
                                </Grid>
                            ))}
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

export default PricingPage;