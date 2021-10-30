import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./AllPackages.css"

const AllPackages = () => {
    const [packages, setPackage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setPackage(data));
    }, []);

    // Page loading.....
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    // Package delete by Admin
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = packages.filter(service => service._id !== id);
                        setPackage(remaining);
                    }

                })
        }
    }
    return (
        <>
            {/* ----All packages for Admin panel----- */}
            <div className="container">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold"><span className="text-info"> Tour</span> Packages</h2>
                    <h3>Total Tour Packages {packages?.length}</h3>
                </div>
                <div className="table-responsive package-table">
                    <Table striped bordered hover className="table-responsive package-table-inner">
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Package</th>
                                <th>Country</th>
                                <th>Package Description</th>
                                <th>Cost</th>
                                <th>Image Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {packages?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td className="my-5">{index + 1}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.country}</td>
                                    <td>{pd.description}</td>
                                    <td>$ {pd.price} / Per person</td>
                                    <td>{pd.img}</td>
                                    <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white"> Delete </button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default AllPackages;