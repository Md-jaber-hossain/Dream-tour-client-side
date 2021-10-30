import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
  return (
    // Header section implementation with carousel
    <div className="">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active black1">
            <img src="https://i.ibb.co/V95Kwnk/ryan-schroeder-Gg7u-Kd-HFb-c-unsplash.jpg" className="d-block w-100 img-height" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">The Best Travel for You</h2>
              <p>Take a look outside. The days are getting longer. The tulips are blooming.</p>
              <Nav.Link as={HashLink} to="/home#about"><button className="btn btn-info text-white"><i className="far fa-address-card"></i> About Dream Tour</button></Nav.Link>
            </div>
          </div>
          <div className="carousel-item black1">
            <img src="https://i.ibb.co/3WxBF6D/obi-onyeador-g-UW8wa-I74-AQ-unsplash.jpg" className="d-block w-100 img-height" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">See The World</h2>
              <p>Every place is the best tourist spot if you have capability to enjoy the moment.</p>
              <Nav.Link as={HashLink} to="/home#about"><button className="btn btn-info text-white"><i className="far fa-address-card"></i> About Dream Tour</button></Nav.Link>
            </div>
          </div>
          <div className="carousel-item black1">
            <img src="https://i.ibb.co/3kx0X0M/makm-photography-u0ir-C-Unb-Ok-unsplash.jpg" className="d-block w-100 img-height" alt="..." />
            <div className="carousel-caption detail-margin">
              <h2 className="title-header">Looking Cheap Tour ? </h2>
              <p>We provide the chipest and best comfortable travel service for our clients.</p>
              <Nav.Link as={HashLink} to="/home#about"><button className="btn btn-info text-white"><i className="far fa-address-card"></i> About Dream Tour</button></Nav.Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;