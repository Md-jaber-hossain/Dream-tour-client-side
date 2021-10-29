import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import FeatureTour from './FeatureTour/FeatureTour';
import Header from './Header/Header';
import "./Home.css"
import HomeDetails from './HomeDetails/HomeDetails';
import TourPercent from './TourPercent/TourPercent';


const Home = () => {

    

    return (

        <>
            {/* ------Header------- */}
            <Header></Header>

            {/* -------Home Details---- */}
            <HomeDetails></HomeDetails>
            
            {/* -----Tour Cover------ */}
            <TourPercent></TourPercent>

            {/* ------ Feature Tour------- */}
            <FeatureTour></FeatureTour>

        </>
    );
};

export default Home;

