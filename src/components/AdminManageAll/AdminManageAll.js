import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./AdminManageAll.css"

const AdminManageAll = () => {
    const [users, setUsers] = useState([]);
    const [modifiedCount, setModifiedCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
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
        const data = { status: 'Approved' }
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
            <div className="container">
                <div className="col-md-12 text-center my-5">
                    <h2 className="fw-bold"><span className="text-info"> Manage All</span> Bookings </h2>
                    <h3>Total Bookings: {users?.length}</h3>
                </div>
                <div className="table-responsive package-table">
                    <Table striped bordered hover className="package-table-inner">
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Package</th>
                                <th>Cost</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {users?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td className="my-5">{index + 1}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.email}</td>
                                    <td>{pd.phone}</td>
                                    <td>{pd.date}</td>
                                    <td>{pd.service}, {pd.country}</td>
                                    <td>$ {pd.price} / Per Person</td>
                                    <td className="text-danger">{pd.status}</td>
                                    {/* <td> */}
                                    <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 text-white"> Delete </button>
                                    <button onClick={() => handleSubmit(pd._id)} className="btn btn-info bg-info fw-bold text-white p-2">Approved</button>
                                    {/* </td> */}

                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default AdminManageAll;