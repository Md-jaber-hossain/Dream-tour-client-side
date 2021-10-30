import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./TourPercent.css"

const TourPercent = () => {
    return (
        // -----Tour coverd area information show------//
        <>
            <div className=" container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Successfully <span className="text-info"> Organized</span> Tour</h2>
                        <p className="text-secondary text-center">We have successfully organized 100 plus country tour.</p>
                    </div>
                </div>
            </div>

            <div id="percent" className="container my-5">
                <div className="row mx-auto">
                    {/* <div className="col-lg-12"> */}
                    <div className="card mb-6 tour-card-shadow">
                        <div className="row g-0 text-lg-start text-center">
                            <div className="col-md-6">
                                <div className="card-body mt-4">
                                    <h5>Area coverd in each country</h5>
                                    <span className="card-text">USA</span>
                                    <ProgressBar animated variant="info" now={85} label={`${85}%`} />
                                    <p className="card-text mt-2 mb-0">India</p>
                                    <ProgressBar animated variant="info" now={100} label={`${100}%`} />
                                    <p className="card-text mt-2 mb-0">Turky</p>
                                    <ProgressBar animated variant="info" now={70} label={`${70}%`} />
                                    <p className="card-text mt-2 mb-0">England</p>
                                    <ProgressBar animated variant="info" now={95} label={`${95}%`} />
                                    <p className="card-text mt-2 mb-0">China</p>
                                    <ProgressBar animated variant="info" now={85} label={`${85}%`} />
                                    <p className="card-text mt-2 mb-0">France</p>
                                    <ProgressBar animated variant="info" now={100} label={`${100}%`} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 my-2">
                                    <img src="https://i.ibb.co/phqBQz9/pexels-te-lensfix-1371360.jpg" className="d-block w-100 tour-img-rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourPercent;


{/* <ProgressBar animated variant="danger" now={45} label={`${85}%`} />
            <ProgressBar animated variant="info" now={70} label={`${70}%`} />
            <ProgressBar animated variant="success" now={50} label={`${50}%`} />
            <ProgressBar animated variant="secondary" now={90} label={`${90}%`} />
            <ProgressBar animated variant="primary" now={60} label={`${60}%`} />
            <ProgressBar animated variant="dark" now={80} label={`${80}%`} /> */}