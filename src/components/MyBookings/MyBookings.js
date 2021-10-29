import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyBookings.css"

const MyBookings = () => {
    const [mypackages, setMypackages] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMypackages(data));
    }, [user.email]);


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
                        const remaining = mypackages.filter(service => service._id !== id);
                        setMypackages(remaining);
                    }

                })
        }
    }

    return (
        <div className="container my-5">
            <h1 className="text-center my-5">My <span className="text-info">Booking</span> List: {mypackages.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {mypackages?.map((pd, index) => (<div key={pd._id}>

                    <div className="col">
                        <div className="h-100 home-card-styles">
                            <img src={pd.img} className="card-img-top my-event-img-style" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center ">Package Info</h5>
                                <span className="card-title "><b>Package Name:</b> {pd.service}</span> <br />
                                <span className="card-title "><b>Country:</b> {pd?.country}</span> <br />
                                <span className="card-title "><b>Cost:</b> $ {pd?.price}</span> <br />
                                <span className="card-text"><b>Status:</b> <span className="text-danger">{pd?.status}</span></span> <br /><br />
                                <h5 className="card-title text-center ">Personal Info</h5>
                                <span className="card-title "><b>Person:</b> {pd.name}</span> <br />
                                <span className="card-title "><b>Email:</b> {pd.email}</span> <br />
                                <span className="card-title "><b>Phone:</b> {pd.phone}</span> <br />
                                <span className="card-title "><b>Date:</b> {pd.date}</span> <br />
                                <span className="card-title "><b>Address:</b> {pd.address}</span> <br /><br />
                                <button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Cancel</button>
                            </div>
                        </div>
                    </div>

                </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;