import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import "./Login.css";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, setUser, message, setMessage, setError, loggedInUser, email, password, error, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogin, hanleResetPassword, setIsLoading, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Redirect current page after google login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    // Redirect current page after email password login
    const handleEmailPassLogin = (e) => {
        e.preventDefault();
        handleLogin()
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_uri);
                setError("");
            })
            .catch((error) => {
                setMessage(error.message);
            });
    };

    return (
        // -----login form-----//
        <div className="container text-center ">
            <div className="row">
                <div className="col-md-6">
                    <div className="img mt-5">
                        <img
                            className="image-fluid w-100"
                            src="https://i.ibb.co/C896Txx/undraw-Social-share-re-qb4v.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="login-area col-md-6 mt-5 mb-5">
                    <div>
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-info"><i className="fas fa-sign-in-alt"></i> Pease Login</h2>
                                    <p className="text-danger">{message}</p>
                                    <form onSubmit={handleEmailPassLogin}>
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
                                        <br />
                                        <input
                                            className="mt-3 w-100 btn btn-info text-white fw-bold rounded-3 m-auto"
                                            type="submit"
                                            value="Login"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary text-white" onClick={handleGoogleLogin}>
                            <i className="fab fa-google"></i> Google sign-in
                        </button>

                        <button className=" ms-3 btn btn-danger text-white " onClick={hanleResetPassword}>
                            <i className="fas fa-unlock-alt"></i> Reset Password
                        </button>
                    </div>
                    <br /><br />
                    <Link to="/register" className="text-danger">Are you new User?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;