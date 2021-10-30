import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const HomeDetails = () => {
    const [packages, setPackage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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

    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete?');
    //     if (proceed) {
    //         const url = `http://localhost:5000/services/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount) {
    //                     alert('Deleted successfully')
    //                     const remaining = packages.filter(service => service._id !== id);
    //                     setPackage(remaining);
    //                 }

    //             })
    //     }
    // }
    return (
        <div id="packagess" className="container mt-5 mb-5">
            <div className="col-md-12 text-center my-5">
                <h2 className="fw-bold">Our <span className="text-info"> Tour</span> Packages</h2>
                <p className="text-secondary text-center">We provide you the best tour pakages that all are minimal cost.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    packages.map((subpackages) => <div key={subpackages._id}>
                        <div className="container my-5">
                            <div className="col">
                                <div className="h-100 home-card-styles">
                                    <div className="img-zoom">
                                        <img src={subpackages.img} className="card-img-top img-style" alt="..." />
                                    </div>
                                    <div className="card-body text-center">
                                        {/* <div className="d-flex justify-content-around"> */}
                                        <h5 className="card-title text-center fw-bold">{subpackages.name}</h5>
                                        <h5 className="card-title text-center fw-bold">{subpackages.country}</h5>
                                        {/* </div> */}
                                        <p className="card-text text-secondary ">{subpackages.description}</p>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-text">$ {subpackages.price} / Per person</h5>
                                            <Link to={`/bookingform/${subpackages._id}`}> <button className="btn btn-info text-white"><i className="fas fa-suitcase-rolling"></i> Booking</button></Link>
                                        </div>
                                        {/* <button onClick={() => handleDelete(subpackages._id)} className="btn btn-danger">Cancel</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeDetails;