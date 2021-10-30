import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ManageAll.css"

const ManageAll = () => {

    const [users, setUsers] = useState([]);
    const [modifiedCount, setModifiedCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setModifiedCount(0);
            });
    }, [modifiedCount]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = users.filter(service => service._id !== id);
                        setUsers(remaining);
                    }

                })
        }
    }
    // ---------Update Status-----------//
    
    const handleSubmit = (id) => {
        const data ={status: 'Approved'}
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // if (result.modifiedCount) {
                //     alert('Updated successfully');
                // }
                setModifiedCount(result.modifiedCount);
            });
        console.log(id);
    };

    return (
        <>
            <div id="services" className="container mt-5 mb-5">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold">Manage <span className="text-info"> All</span> Bookings</h2>
                    <p className="text-secondary text-center">List of users booking info and their package info</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        users.map(subusers => <div key={subusers._id}>
                            <div className="col">
                                <div className="h-100 home-card-styles card-zoom">
                                    <div className="card-body">
                                        <h5 className="card-title text-center ">Package Info</h5>
                                        <span className="card-title "><b>Package Name:</b> {subusers.service}</span> <br />
                                        <span className="card-title "><b>Country:</b> {subusers?.country}</span> <br />
                                        <span className="card-title "><b>Cost:</b> $ {subusers?.price}</span> <br />
                                        <span className="card-text"><b>Status:</b> <span className="text-danger">{subusers?.status}</span></span> <br /><br />
                                        <h5 className="card-title text-center ">Personal Info</h5>
                                        <span className="card-title "><b>Person:</b> {subusers.name}</span> <br />
                                        <span className="card-title "><b>Email:</b> {subusers.email}</span> <br />
                                        <span className="card-title "><b>Phone:</b> {subusers.phone}</span> <br />
                                        <span className="card-title "><b>Date:</b> {subusers.date}</span> <br />
                                        <span className="card-title "><b>Address:</b> {subusers.address}</span> <br /><br />
                                        <button onClick={() => handleDelete(subusers._id)} className="btn btn-danger">Delete</button>
                                        <button onClick={() => handleSubmit(subusers._id)} className="btn btn-info fw-bold rounded-3 text-white ms-2">Approved</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </>
    );
};

export default ManageAll;