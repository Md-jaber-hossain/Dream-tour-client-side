import React, { useState } from 'react';
import AddPackages from '../AddPackages/AddPackages';
import AdminManageAll from '../AdminManageAll/AdminManageAll';
import "./Admin.css"
import AllPackages from './AllPackages/AllPackages';

const Admin = () => {
    const [control, setControl] = useState("allPackages");
    console.log(control);
    return (
        // ------Admin Main Dash Board------------//
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-2 ">
                            <div className="admin-area">
                                <h4 className="mt-4 pt-5 ps-5 text-info"><i className="fas fa-user-cog"></i> Admin Dashboard</h4>
                                <div className="all-menu mt-4">
                                    <li onClick={() => setControl("allPackages")} className="admin-menu p-2 ps-5">
                                        <i className="fas fa-caret-right"></i> All Packages
                                    </li>
                                    <li onClick={() => setControl("addPackages")} className="admin-menu p-2 ps-5">
                                        <i className="fas fa-caret-right"></i> Add Package
                                    </li>
                                    <li onClick={() => setControl("allBookings")} className="admin-menu p-2 ps-5">
                                        <i className="fas fa-caret-right"></i> Manage Bookings
                                    </li>
                                </div>
                            </div>
                        </div>
                        {/* -----All package, Add package, All booking page call and show---- */}
                        <div className="col-md-10">
                            {control === "allPackages" && <AllPackages></AllPackages>}
                            {control === "addPackages" && <AddPackages></AddPackages>}
                            {control === "allBookings" && <AdminManageAll></AdminManageAll>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;