import React from 'react';
import "./FeatureTour.css"

const FeatureTour = () => {
    return (
        // Feature tour country card
        <div id="expert-doctors">
            <div className=" container my-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold">Our <span className="text-info"> Featured</span> Tour <span className="text-info">Place</span></h2>
                        <p className="text-secondary text-center">This are most attracted and beautiful places in the world</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="h-100 home-card-styles bg-info">
                            <div className="img-zoom">
                                <img src="https://i.ibb.co/tbkxDq2/engin-yapici-WA1u0sc-VLZU-unsplash.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-white text-danger fw-bold">Istambul, Turky</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles bg-info">
                            <div className="img-zoom">
                                <img src="https://i.ibb.co/r0zL3h4/sylwia-bartyzel-e-U4pip-U-8-HA-unsplash.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-white fw-bold">The Taj Mahal, India</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles bg-info">
                            <div className="img-zoom">
                                <img src="https://i.ibb.co/r0mQ9cC/facts-about-stonehenge-4.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-white fw-bold">Stonehenge, England</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 home-card-styles bg-info">
                            <div className="img-zoom">
                                <img src="https://i.ibb.co/JpLpXmM/16187.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-white fw-bold">Forbidden City, China</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureTour;