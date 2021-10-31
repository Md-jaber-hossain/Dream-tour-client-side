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

            {/* ------Our Commitment-------- */}
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Our <span className="text-info"> Commitment</span></h2>
                        <p className="text-secondary text-center">We always want to help our customers in a better way.</p>
                    </div>
                </div>
            </div>
            <div className="row container mx-auto my-5">
                <div className="col-md-8" data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <img src="https://i.ibb.co/MgzMbpr/HERO-SEAsia-Natural-Wonders-shutterstock-440952967.jpg" className="img-fluid rounded-3 w-100" alt="" />
                </div>
                <div id="about" className="col-md-4 mt-5" data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <h1>We are for helping you</h1>
                    <p className="text-secondary">We are on a mission to help people discover the real value of travel to inspire, to give more reasons, to make it easy for you to go. Our company was founded back in 2020, and since then, we’ve imagined and created some of the most well-loved products for travelers all around the world.</p>
                    <h5>Always Get in touch with us to get best travel facilities</h5>
                </div>
            </div>

            {/* ---------Why you choose us----------- */}
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Why You<span className="text-info"> Choose Us</span></h2>
                        <p className="text-secondary text-center">Trusted is a main issue of our travel agency.</p>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 container mx-auto my-5">
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/qBDJzSB/globe.png" className="card-img-top w-50 h-50 mx-auto mt-4 mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">You can get support till end of comfortable tour</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/xCVMB0t/travel.png" className="card-img-top w-50 h-50 mx-auto mt-4 mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">100% trusted to find beautiful location</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/GRLb112/travel-luggage.png" className="card-img-top w-50 h-50 mx-auto mt-4 mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Visa facilities and hotel booking facilities</h5>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="100">
                    <div className="card h-100 card-border card-styles card-zoom">
                        <img src="https://i.ibb.co/tXgb9dq/travel-1.png" className="card-img-top w-50 h-50 mx-auto mt-4 mb-3" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Ensure comfortable and low cost travel for everyone</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;

