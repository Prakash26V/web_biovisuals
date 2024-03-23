
import React from 'react'
// import PriceCard from '../../components/card/PriceCard'
// import "../../assets/css/style.scss"
import { Button, Grid, } from '@mui/material';
import bmg3 from '../assets/Images/bmg3.jpg';
import richIcon from '../assets/Images/richIcon.jpeg'
import easyStart from '../assets/Images/easyStart.jpeg'
import scientificAccurcy from '../assets/Images/scientificAccurcy.jpeg'
import community from '../assets/Images/community.jpeg'
import collobration from '../assets/Images/collobration.jpeg'
import illustration from '../assets/Images/illustration.jpeg'
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


const ScientificLayout = () => {


    return (
        <>

            {/* hero section start */}
            <div className='landingPage backgroundcol'>
                <Grid container spacing={2}>
                    <Grid item md={6} l={6} xl={12} s={12} xs={12}>
                        <h1 className='scienceherotext' >
                            Easily transform your scientific
                            ideas into professional figures
                            with Biovisuals
                        </h1>
                    </Grid>
                    <Grid item md={6} lg={6} xl={12} s={12} xs={12}>

                    </Grid>
                </Grid>
            </div>

            <div className=' backgroundcol'>

                <div 
                    style={{ 
                        padding: '10px', 
                        backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)',

                    }}
                >
                    <div style={{ display: 'flex' }}>
                         {/* Image Content */}
                         <div 
                            style={{ 
                                width: '400px', 
                                backgroundColor: 'white' 
                            }}
                        >
                            <p style={{ textAlign: 'center'}}>Advanced Illustration Tools</p>
                            <img style={{width: '100%'}} src={illustration} alt="" />
                        </div>
                        
                        
                         {/* Text Content */}
                         <div style={{ flex: 1, textAlign: 'center'}}>
                            <p 
                                style={{ 
                                    fontSize: '18px', 
                                    paddingTop: "10%",  
                                    width: '450px', 
                                    lineHeight: "27px",
                                    paddingLeft: '30px'

                                }}
                            >
                                Powerful illustration tools designed for
                                the biological sciences, enabling users to
                                effortlessly create detailed, publicationready graphics
                            </p>
                        </div>
                        
                    </div>
                </div>
                <br />

                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)'}}>
                    <div style={{ display: 'flex' }}>
                        
                        {/* Text Content */}
                        <div style={{ flex: 1, textAlign: 'center'}}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                Access a wide range of pre-designed biological elements for streamlined figure creation, including cell structures, DNA sequences, proteins, and organelles.
                            </p>
                        </div>

                        {/* Image Content */}
                        <div 
                            style={{ 
                                width: '400px', 
                                backgroundColor: 'white',
                                borderRadius: '20px' 
                            }}
                        >
                            <p style={{ textAlign: 'center'}}>Rich Icons Library of Biological Elements</p>
                            <img style={{width: '100%', borderRadius: '20px'}} src={richIcon} alt="" />
                        </div>
                        
                    </div>
                </div>
                <br />
                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)' }}>
                    <div style={{ display: 'flex' }}>
                         {/* Image Content */}
                         <div style={{ width: '400px', backgroundColor: 'white', borderRadius: '20px' }}>
                            <p style={{ textAlign: 'center'}}>Easy Start with Editable Templates</p>
                            <img style={{width: '100%', borderRadius: '20px' }} src={easyStart} alt="" />
                        </div>
                        
                         {/* Text Content */}
                         <div style={{ flex: 1, textAlign: 'center', paddingLeft: '30px'}}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                Begin your scientific projects
                                effortlessly with Biovisuals editable
                                templates. Create molecular biology
                                pathways, graphical abstracts and
                                much more. 
                            </p>
                        </div>
                        
                    </div>
                </div>
                <br />
                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)'}}>
                    <div style={{ display: 'flex' }}>
                        
                        {/* Text Content */}
                        <div style={{ flex: 1, textAlign: 'center'}}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                We places a strong emphasis on
                                scientific accuracy. Our scientific team
                                ensures that all elements and
                                annotations adhere to the latest
                                biological knowledge and research
                                standards. 
                            </p>
                        </div>

                        {/* Image Content */}
                        <div style={{ width: '400px', backgroundColor: 'white', borderRadius: '20px' }}>
                            <p style={{ textAlign: 'center'}}>Scientific Accuracy</p>
                            <img style={{width: '100%', borderRadius: '20px' }} src={scientificAccurcy} alt="" />
                        </div>
                        
                    </div>
                </div>
                <br />
                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)' }}>
                    <div style={{ display: 'flex' }}>
                         {/* Image Content */}
                         <div style={{ width: '400px', backgroundColor: 'white' }}>
                            <p style={{ textAlign: 'center' }}> Export and Integration</p>
                            <img style={{width: '100%'}} src={ richIcon} alt="" />
                        </div>
                        
                         {/* Text Content */}
                         <div style={{ flex: 1, textAlign: 'center', paddingLeft: '30px' }}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                Illustrations and graphics can be
                                exported in high resolution image
                                formats. Exported figures can be easily
                                integrated into various editing
                                software for publication and
                                presentations.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <br />
                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)'}}>
                    <div style={{ display: 'flex' }}>
                        
                        {/* Text Content */}
                        <div style={{ flex: 1, textAlign: 'center'}}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                Join a dynamic community of
                                biological illustrators and scientists.
                                Access tutorials, forums, and support
                                to improve graphic design skills.
                            </p>
                        </div>

                        {/* Image Content */}
                        <div style={{ width: '400px', backgroundColor: 'white' }}>
                            <p style={{ textAlign:'center'}}>Community and Support</p>
                            <img style={{width: '100%'}} src={community} alt="" />
                        </div>
                        
                    </div>
                </div>
                <br />
                <div style={{ padding: '10px', backgroundImage: 'linear-gradient(to right, #f58c37, #f1d0b4)' }}>
                    <div style={{ display: 'flex' }}>
                         {/* Image Content */}
                         <div style={{ width: '400px', backgroundColor: 'white' }}>
                            <p style={{textAlign: 'center'}}> Collaboration and Sharing</p>
                            <img style={{width: '100%'}} src={collobration} alt="" />
                        </div>
                        
                         {/* Text Content */}
                         <div style={{ flex: 1, textAlign: 'center', paddingLeft: '30px'}}>
                            <p style={{ fontSize: '18px', paddingTop: "10%",  width: '450px', lineHeight: "27px"}}>
                                Access a wide range of pre-designed biological elements for streamlined figure creation, including cell structures, DNA sequences, proteins, and organelles.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <br />


                {/* <div style={{ paddingTop: '40px' }}>
                    <h1 className='h1h1h1h'>Advanced Illustration Tools </h1>
                    <p className="peepee"> Powerful illustration tools designed for
                        the biological sciences, enabling users to
                        effortlessly create detailed, publicationready graphics</p>

                    <div>
                        <div className="card-grid-main">

                            <ul className="card-grid">
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG3" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className='kantabaidiv'>
                    <h1 className='h1h1h1h'>Rich Icons Library of
                        Biological Elements </h1>
                    <p className="peepee"> Access a wide range of pre-designed
                        biological elements for streamlined
                        figure creation, including cell
                        structures, DNA sequences, proteins,
                        and organelles.</p>

                    <div>
                        <div className="card-grid-main">

                            <ul className="card-grid">
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className='kantabaidiv'>
                    <h1 className='h1h1h1h'>Easy Start with Editable
                        Templates</h1>
                    <p className="peepee"> Begin your scientific projects
                        effortlessly with Biovisuals editable
                        templates. Create molecular biology
                        pathways, graphical abstracts and
                        much more.</p>

                    <div>

                    </div>
                </div>

                <div style={{ padding: '40px' }}>
                    <div className="blog-slider">
                        <div className="blog-slider__wrp swiper-wrapper">
                            <h1 className='h1h1h1h'>
                                Scientific Accuracy
                            </h1>
                            <div className="blog-slider__item swiper-slide">
                                <div className="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
                                </div>
                                <div className="orangetextarea">
                                    <p>We places a strong emphasis on
                                        scientific accuracy. Our scientific team
                                        ensures that all elements and
                                        annotations adhere to the latest
                                        biological knowledge and research
                                        standards.  </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='kantabaidiv'>
                    <h1 className='h1h1h1h'>Export and Integration
                    </h1>
                    <p className="peepee"> Illustrations and graphics can be
                        exported in high resolution image
                        formats. Exported figures can be easily
                        integrated into various editing
                        software for publication and
                        presentations.</p>

                    <div>
                        <div className="card-grid-main">

                            <ul className="card-grid">
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="card-grid-item">
                                    <div className="card-grid-card">
                                        <div className="card-grid-image"><img src={bmg3} alt="BMG1" /></div>
                                        <div className="card-grid-content">
                                            <h2 className="card-grid-title" style={{ color: 'black' }}>Card Grid Layout</h2>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className='backgroundcol' style={{ padding: '30px', }}>
                    <div >
                        <div style={{ backgroundColor: '#F5F5F5', padding:'20px' }}>
                        <h1 className='h1h1h1h'>
                            Community and Support
                        </h1>

                            <Grid container spacing={2}>
                           
                                <Grid item md={6} l={6} xl={12} s={12} xs={12}>
                                    <div className='imgimg' ><img style={{ height: '200px', width: '200px' }} src={bmg3} alt="BMG1" />
                                    </div>
                                </Grid>
                                <Grid item md={6} l={6} xl={12} s={12} xs={12} style={{padding:'20PX'}}>
                                    <div className="orangetextarea">
                                        <p>Join a dynamic community of
                                            biological illustrators and scientists.
                                            Access tutorials, forums, and support
                                            to improve graphic design skills.
                                        </p>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>

                    </div>

                </div>
{/* 
                <div style={{ padding: '40px' }}>
                    <div className="blog-slider">
                        <div className="blog-slider__wrp swiper-wrapper">
                            <h1 className='h1h1h1h'>
                                Collaboration and Sharing
                            </h1>
                            <div className="blog-slider__item swiper-slide">
                                <div className="blog-slider__img">
                                    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
                                </div>
                                <div className="orangetextarea">
                                    <p>Seamlessly collaborate and share
                                        projects on Biovisuals, enhancing team
                                        productivity with real-time tools and
                                        allowing multiple users to work
                                        together on illustrations and graphics </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}




            </div>







        </>
    )
}

export default ScientificLayout;