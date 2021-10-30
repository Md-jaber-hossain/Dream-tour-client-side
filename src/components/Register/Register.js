import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "../Login/Login.css";

const Register = () => {
    const { user, loggedInUser, name, email, password, error, signInUsingGoogle,
        handleNameChange, handleEmailChange, handlePasswordChange, message, registrationSubmit } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const handleOnSubmit = (e) => {
        e.preventDefault();
        registrationSubmit();
        history.push(url)
    }

    return (
        // Display the registration form
        <div className="App container ">
            <div className="row">
                <div className="col-md-6 my-5">
                    <div className="">
                        <img
                            className="image-fluid w-100"
                            src="https://i.ibb.co/h1JJ3wz/undraw-My-notifications-re-ehmk.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="login-area col-md-6 mt-4 mb-5">
                    <div>
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-info"><i className="fas fa-sign-in-alt"></i> Pease Register </h2>
                                    {/* <p>{message}</p> */}
                                    <form onSubmit={handleOnSubmit}>
                                        <input
                                            onChange={handleNameChange}
                                            className="input-felid"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                        />
                                        <br />
                                        <input
                                            onChange={handleEmailChange}
                                            className="input-felid"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                        />
                                        <br />
                                        <input
                                            onChange={handlePasswordChange}
                                            className="input-felid"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                        />
                                        <p className="text-danger">{error}</p>
                                        <input
                                            className="mt-3 w-75 btn btn-info text-white fw-bold m-auto rounded-3"
                                            type="submit"
                                            value="Register"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-primary text-white" onClick={signInUsingGoogle}>
                                    <i className="fab fa-google"></i> Signup with Google
                                </button>
                                <br /><br />
                                <Link to="/login" className="text-danger">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;