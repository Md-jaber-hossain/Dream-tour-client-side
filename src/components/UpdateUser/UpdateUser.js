import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import "./UpdateUser.css"

const UpdateUser = () => {

    const { updateId } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users/${updateId}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        fetch(`http://localhost:5000/update/${updateId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert('Updated successfully');
                }
            });
        console.log(data);
    };
    return (
        <div className="text-center my-5 add-service">
            <h1 className="my-5">Update <span className="text-info">Panding</span> Status</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="update-user-form">
                <select defaultValue={user?.status} {...register("status")} className="p-2 m-2 w-25">
                    <option value="Approved">Approved</option>
                    {/* <option value="Panding">Panding</option> */}
                </select>
                <input className="bg-info text-white fw-bold" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;