import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./AddPackages.css"

const AddPackages = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        //-------- Add Package form------------//
        <>
            <div className="row">
            <h2 className="text-center my-5">Add New <span className="text-info">Package</span></h2>
                <div className="col-md-6">
                    <div className="Add-Package-main my-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="AddPackage-form">
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <input {...register("country", { required: true, maxLength: 20 })} placeholder="Country" />
                            <textarea {...register("description", { required: true, maxLength: 44 })} placeholder="Description" />
                            <input type="number" {...register("price", { required: true, maxLength: 20 })} placeholder="Price" />
                            <input type="date" {...register("date")} placeholder="date" />
                            <input {...register("img")} placeholder="image url" />
                            <input type="submit" className="bg-info text-white fw-bold" />
                        </form>
                    </div>
                </div>
                <div className="col-md-6 my-5">
                    <img
                        className="image-fluid w-75"
                        src="https://i.ibb.co/B6Zq660/undraw-Collaborators-re-hont.png"
                        alt=""
                    />
                </div>
            </div>

        </>
    );
};

export default AddPackages;