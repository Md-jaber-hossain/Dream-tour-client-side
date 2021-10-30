import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          {/* -----Footer body--- */}
          <div className="row">
            <div className="col-md-3">

              <div className="mb-4">
                <h1 className="fw-bold"><span className="text-info">Dream</span> Tour</h1>
              </div>
              <div className="pe-5">
                <span>Travel is the movement of people between distant geographical locations.</span> <br /> <br />
                <span>Dream Tour can arrange you a better travel place</span>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="border-style">About Us</h4>
              <p>Find better Place</p>
              <p>Arrange budget Trip</p>
              <p>Make travel Package</p>
              <p>Help our Client to travel</p>
            </div>

            <div className="col-md-3">
              <h4 className="border-style">Contact Us</h4>
              <div>
                <p><i className="fas fa-map-marker-alt"></i> Mirpur-1, Dhaka, Bangladesh</p>
                <p><i className="far fa-envelope"></i> md.jaber8695@gmail.com</p> 
                <p><i className="fas fa-phone-alt"></i> 01621390353</p>
              </div>
              {/* -----Social media Icon for footer------*/}
              <div className="d-flex mb-5">
                <div className="fs-3">
                  <i className="fab fa-facebook-square"></i>
                </div>
                <div className="fs-3 twitter ms-4">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="fs-3 ms-4">
                  <i className="fab fa-reddit-square"></i>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="border-style2">Our Package</h4>
              <p>Travel for minimal cost</p>
              <p>World tour in a year</p>
              <p>Europe budge tour</p>
              <p>Asian country visit</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <div>
              <p className="text-secondary">
                <small>Copyright © .Jaber, All rights reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
