import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import Footer from '../components/Footer';
import CanvasPage from '../pages/CanvasPage';
// import IconPage from '../pages/IconPage';
import Profile from '../pages/Profile';
import Notification from '../pages/Notification';
import SharedFiles from '../pages/SharedFiles';
import IconSubCategories from '../pages/IconSubCategories';
import IconsChildCategories from '../pages/IconsChildCategories';
import AboutUs from '../pages/AboutUs';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import PricingPage from '../pages/PricingPage';
import Resource from '../pages/Resource';
import CanvasPageOne from '../pages/Canvas1';
import IconsCategories from '../pages/IconsCategories';
import IconPage from '../pages/IconPage';
import BioVisualsBasic from '../pages/BioVisualsBasic';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useAuthContext } from '../context/AuthContext';
import IconDetailPage from '../pages/IconDetailPage';
import Header from '../components/Header';
import ScientificLayout from '../pages/ScientificLayout';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

const AllRoutes = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { userToken } = useAuthContext()

    console.log("Route Token ::: ", userToken)
    const location = useLocation()
    console.log("location", location.pathname)
    return (
        <>
            {/* {location.pathname === "/"  && <div><Header1 /></div>} */}
            {/* {location.pathname === "/" ? <Header1 /> : <Header2 />} */}

            {/* <Header1 /> */}
            <Header1 />
            <Header />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/user/register' element={<Register />} />
                <Route path='/user/login' element={<Login />} />
                <Route path='/user/icons' element={<IconsCategories />} />
                {/* <Route path='/user/subcategoriesicon' element={<IconSubCategories />} /> */}
                <Route path="/user/subcategoriesicon/:categoryId" element={<IconSubCategories />} />
                <Route path='/user/childCategoriesicon/:subCategoryId' element={<IconsChildCategories />} />
                <Route path='/user/icon/:childCategoryId' element={<IconPage />} />
                <Route path='/user/resource' element={<Resource />} />
                <Route path='/user/basic' element={<BioVisualsBasic />} />
                <Route path='/user/detail/icon/:_id' element={<IconDetailPage />} />

                <Route path='*' element={<div style={{ minHeight: "100vh", minWidth: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>Not Found</div>} />
                <Route path='/user/scientificLayout' element={<ScientificLayout />} />
                {userToken && <>
                    <Route path='/user/canvas' element={<CanvasPage />} />
                    <Route path='/user/dashoard' element={<Dashboard />} />
                    <Route path='/user/canvas1' element={<CanvasPageOne />} />

                    <Route path='/user/aboutus' element={<AboutUs />} />
                    <Route path='/user/terms' element={<Terms />} />
                    <Route path='/user/privacy' element={<Privacy />} />
                    <Route path='/user/profile' element={<Profile />} />
                    <Route path='/user/notification' element={<Notification />} />
                    <Route path='/user/dashoard/share' element={<SharedFiles />} />
                    <Route path='/user/pricing' element={<PricingPage />} />

                </>
                }

            </Routes>
            <Footer />
        </>
    );
}

export default AllRoutes;

