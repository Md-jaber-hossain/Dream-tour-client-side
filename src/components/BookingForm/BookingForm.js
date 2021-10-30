import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./BookingForm.css"
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookingForm = () => {

    const { user } = useAuth();
    const { bookingId } = useParams();

    const [users, setUsers] = useState([]);

    const { register, handleSubmit, setFocus, reset } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const detailsMatchedCard = users?.find(subusers => subusers._id === bookingId);

    // focus on package name field //
    useEffect(() => {
        setFocus("service");
    }, [setFocus]);

    // --------Post the booking and package--------- //

    const onSubmit = data => {
        console.log(data);
        data.img = detailsMatchedCard.img
        // data.packageName = detailsMatchedCard.name
        data.country = detailsMatchedCard.country
        data.price = detailsMatchedCard.price
        data.description = detailsMatchedCard.description
        data.status = "panding";
        axios.post('http://localhost:5000/adduser', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <>  
            {/* -----Booking form------- */}
            <div className="row">
                <h2 className="text-center my-5">Package <span className="text-info">Booking</span> Form</h2>
                <div className="col-md-6">
                    <div className="booking-main my-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                            <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Name" />
                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                            <input defaultValue={detailsMatchedCard?.name} {...register("service", { required: true })} placeholder="Package" />
                            <input type="date" {...register("date")} placeholder="Date" />
                            <input type="number" {...register("phone")} placeholder="Phone" />
                            <input type="text" {...register("address")} placeholder="Address" />
                            <input type="submit" className="bg-info fw-bold text-white" />
                        </form>
                    </div>
                </div>
                {/* ------Details of specific package------- */}
                <div className="col-md-6 my-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col container">
                            <div className="h-100 home-card-styles">
                                <img src={detailsMatchedCard?.img} className="card-img-top img-style" alt="..." />
                                <div className="card-body ">
                                    {/* <div className="d-flex justify-content-around"> */}
                                        <h5 className="card-title"> Package Name: <span className="text-info fw-bold">{detailsMatchedCard?.name}</span> </h5>
                                        <h5 className="card-title">Country: <span className="text-info fw-bold"> {detailsMatchedCard?.country}</span></h5>
                                    {/* </div> */}
                                    <p className="card-text text-secondary">{detailsMatchedCard?.description}</p>
                                    <div className="d-flex">
                                        <h5 className="card-text">Cost: <span className="text-info fw-bold">$ {detailsMatchedCard?.price} / Per person</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="image-fluid w-75"
                        src="https://i.ibb.co/9yDSZSB/undraw-Travel-booking-re-6umu.png"
                        alt=""
                    />
                </div>
            </div>

        </>
    );
};

export default BookingForm;