import React from 'react'
// import PriceCard from '../../components/card/PriceCard'
// import "../../assets/css/style.scss"
import { Button, Grid, } from '@mui/material';
import bg1 from '../assets/Images/bg1.png'; 
import bg2 from '../assets/Images/bg2.png';
import img1 from '../assets/Images/img1.png';
import img2 from '../assets/Images/img2.png';
import img3 from '../assets/Images/img3.png';
import img4 from '../assets/Images/img4.png';
import img5 from '../assets/Images/img5.png';
import img6 from '../assets/Images/img6.png';
import img7 from '../assets/Images/img7.png';
import img8 from '../assets/Images/img8.png';
import img9 from '../assets/Images/img9.png';
import img10 from '../assets/Images/img10.png';
import img11 from '../assets/Images/img11.png';
import bmg1 from '../assets/Images/bmg1.png';
import bmg2 from '../assets/Images/bmg2.png';
import bmg3 from '../assets/Images/bmg3.jpg';
import bmg4 from '../assets/Images/bmg4.png';
import bg4 from '../assets/Images/bg4.png';
import ban1 from '../assets/Images/ban1.png';
import ban2 from '../assets/Images/ban2.png';
import ban3 from '../assets/Images/ban3.png';
import ban4 from '../assets/Images/ban4.png';
import ban5 from '../assets/Images/ban5.png';
import ban6 from '../assets/Images/ban6.png';
// import mb5 from 'assets/Images/mb5.png'
import aouttag from '../assets/Images/autotag.png';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            {/* Customize your next arrow */}
            <span>&rarr;</span>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            {/* Customize your previous arrow */}
            <span>&larr;</span>
        </div>
    );
};

const LandingPage = () => {

    const imagesWithText = [
        { text: 'Cells and membranes', image: img1, },
        { text: 'Cell Organelles and Structures ', image: img2, },
        { text: 'Human anatomy and physiology', image: img3, },
        { text: 'Nucleic  Acid', image: img4, },
        { text: ' Proteins and enzymes', image: img5, },
        { text: 'Genetic Engineering Tools', image: img6, },
        { text: 'Micro organisms  ', image: img7, },
        { text: 'Chemistry', image: img10, },
        { text: 'Text for Image 9', image: img9, },
        { text: 'Text for Image 10', image: img8, },
        { text: 'Text for Image 11', image: img11, },

    ];
    const secondslider = [
        { text: 'Deep Vein Thrombosis', image: bmg1, },
        { text: 'Cancer Metastasis  ', image: bmg2, },
        { text: 'Tumor Microenvironment', image: bmg3, },
        { text: 'Hypertension', image: bmg4, },
    ];

    const banner = [
        { image: ban1, },
        { image: ban4, },
        { image: ban3, },
        { image: ban2, },
        { image: ban5, },
        { image: ban6, },

    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const batting = {
        dots: false,
        infinite: true,
        autoplay: false, // Set autoplay to false
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const bannering = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1700,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            {/* hero section start */}
            <div className='landingPage' style={{ backgroundImage: `url(${bg1})` }}>
                <Grid container spacing={2}>
                    <Grid item md={4} l={4} xl={12} s={12} xs={12}>
                        <h1 className='herotext' > Craft Scientific
                            Illustrations With
                            Ease</h1>
                        <p className='herop'> Create and visualize scientific figures
                            using our extensive icon library and
                            tools</p>
                        <Button
                            variant="contained"
                            sx={{
                                marginTop: '2rem',
                                backgroundColor: '#8DAFE2',
                                fontSize: '16px',
                            }}>
                            <b> Join us for Free  </b>
                        </Button>
                    </Grid>
                    <Grid item md={8} l={8} xl={12} s={12} xs={12}>

                    </Grid>

                </Grid>
            </div>

            {/* hero section end */}
            <div className='backgroundcol' style={{ backgroundImage: `url(${bg2})` }}>
                <div className='subheroheading' >
                    <h3> Explore our vast scientific icon collection </h3>
                </div>


                <div style={{ padding: '20px', paddingTop: '60px' }}>
                    <div>
                        <Slider {...settings}>
                            {imagesWithText.map((item, index) => (
                                <div key={index} className="image-with-text-wrapper">
                                    <div className='slide_card'>
                                        <h2 className="image-text">{item.text}</h2>
                                        <div className="image-dip" >
                                             <img className="card_image" src={item.image} alt={`Image ${index + 1}`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                           
                    </div>
                </div>
            </div>

            <div className='backgroundcol'>
                <div >
                    <h3 className='subhero' > Creative and expertly Curated science-themed templates </h3>
                    <p className='subzero'> Discover imaginative possibilities with our meticulously designed templates for seamlessly creating publication
                        ready figures</p>
                </div>

                <div style={{ padding: '20px', paddingTop: '60px',paddingBottom: '60px' }}>
                    <div>
                        <Slider {...batting}>
                            {secondslider.map((item, index) => (
                                <div key={index} className="image-with-text-wrapper">
                                    <h2 className="image-text">{item.text}</h2>
                                    <div className="image-dip" > <img className="card_image" src={item.image} alt={`Image ${index + 1}`} /> </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* about section  start */}
            <div className='backgroundcol aboutsec'>
                <div className='aboutdiv' style={{ backgroundImage: `url(${bg4})` }}>
                    <div style={{ textAlign: 'right' }}>
                        <img src={aouttag} alt="about tag" className='aouttag' />
                    </div>

                    <div style={{padding: "1rem"}}>
                        <Grid container spacing={2}>
                            <Grid item md={5} l={5} xl={5} s={12} xs={12}>

                            </Grid>
                            <Grid item md={7} l={7} xl={7} s={12} xs={12}>
                                <div className='aboutdiv' >
                                <h3 className='abouttext' > Biovisuals, a cutting-edge platform that stands at the forefront of
                                    transforming the way biological information is presented. Our aim to
                                    provide unparalleled biological illustrations and graphics, catering to
                                    the diverse needs of students, researchers, scientists, educators, and
                                    industries.</h3>

                                <ul style={{ paddingTop: '20px' }}>
                                    <li className='abouttext'> Editable templates </li>
                                    <li className='abouttext'>Rich Icons Library </li>
                                    <li className='abouttext'> Customized icons </li>
                                    <li className='abouttext'> Advanced Illustration Tools</li>
                                    <li className='abouttext'> Scientific Accuracy</li>
                                    <li className='abouttext'> Collaboration and Sharing</li>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                marginTop: '2rem',
                                                backgroundColor: '#8DAFE2',
                                                fontSize: '16px',
                                            }}>
                                            <b> Join us for Free  </b>
                                        </Button>
                                    </div>
                                </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            {/* about section  end */}
            <div className='backgroundcol '>
                <div className='biohead'>
                    <h1 className='herobox'> Biovisuals community</h1>
                </div>
                <div>
                    <h2 className='bioheadtext'> Trusted by users and intuitions around the world </h2>
                </div>

                <div  style={{ padding: '20px', paddingTop: '20px',paddingBottom: '60px' }}>
                    <Slider {...bannering}>
                        {banner.map((item, index) => (
                            <div key={index} className="image-with-text-wrapper">
                                <div className="image-dip" > <img className="ban_image" src={item.image} alt={`Image ${index + 1}`} /> </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div> 

            <div className='backgroundcol' style={{ padding: '30px',}}>
                <div >
                    <div style={{ backgroundColor: '#F5F5F5', }}>


                        <Grid container spacing={2}>
                            <Grid item md={4} l={4} xl={12} s={12} xs={12}>
                                <div style={{  padding: "20px", }}>
                                <div style={{ display: 'flex', }}>
                                    <div className='redcircle'>

                                    </div>
                                    <div>
                                        <h5> Dr. Nitesh kr Saxena</h5>
                                        <p> Amity University Noida, India</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex',  }}>
                                    <p> Biovisuals is a lifesaver for researchers
                                        like me. Their icons and templates make
                                        presentations look pro without the hassle</p>
                                </div>
                                </div>
                            </Grid>
                            <Grid item md={4} l={4} xl={12} s={12} xs={12}>
                                <div style={{  padding: "20px", }}>
                                <div style={{ display: 'flex', }}>
                                    <div className='redcircle'>

                                    </div>
                                    <div>
                                        <h5> Dr. Nitesh kr Saxena</h5>
                                        <p> Amity University Noida, India</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex',  }}>
                                    <p> Biovisuals is a lifesaver for researchers
                                        like me. Their icons and templates make
                                        presentations look pro without the hassle</p>
                                </div>
                                </div>
                            </Grid>
                            <Grid item md={4} l={4} xl={12} s={12} xs={12}>
                                <div style={{  padding: "20px", }}>
                                <div style={{ display: 'flex', }}>
                                    <div className='redcircle'>

                                    </div>
                                    <div>
                                        <h5> Dr. Nitesh kr Saxena</h5>
                                        <p> Amity University Noida, India</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex',  }}>
                                    <p> Biovisuals is a lifesaver for researchers
                                        like me. Their icons and templates make
                                        presentations look pro without the hassle</p>
                                </div>
                                </div>
                            </Grid>
                           
                        </Grid>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}

        </>
    )
}

export default LandingPage