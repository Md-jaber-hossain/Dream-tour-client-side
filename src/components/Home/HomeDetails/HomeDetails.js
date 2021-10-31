import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeDetails = () => {

    // -------Animation-----//
    useEffect(()=>{
        AOS.init();
    },[]);
    //--------------//

    const [packages, setPackage] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-beach-03194.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);

    // Home page loading.....
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        // --------Packages for home page---------------//
        <div id="packagess" className="container mt-5 mb-5">
            <div className="col-md-12 text-center my-5">
                <h2 className="fw-bold">Our <span className="text-info"> Tour</span> Packages</h2>
                <p className="text-secondary text-center">We provide you the best tour pakages that all are minimal cost.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    packages.map((subpackages) => <div key={subpackages._id}>
                        <div className="container my-5">
                            <div className="col" data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="400">
                                <div className="card h-100 home-card-styles">
                                    <div className="img-zoom">
                                        <img src={subpackages.img} className="card-img-top img-style" alt="..." />
                                    </div>
                                    <div className="card-body text-center">
                                        {/* <div className="d-flex justify-content-around"> */}
                                        <h5 className="card-title text-center text-info fw-bold">{subpackages.name}</h5>
                                        <h5 className="card-title text-center fw-bold"><i className="fas fa-map-marker-alt"></i> {subpackages.country}</h5>
                                        {/* </div> */}
                                        <p className="card-text text-secondary ">{subpackages.description}</p>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-text"><span className="text-info fw-bold">$ {subpackages.price} </span> / Per person</h5>
                                            <Link to={`/bookingform/${subpackages._id}`}> <button className="btn btn-info text-white"><i className="fas fa-suitcase-rolling"></i> Book Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeDetails;