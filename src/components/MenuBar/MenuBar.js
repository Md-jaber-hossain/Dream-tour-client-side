import React from 'react';
import "./MenuBar.css";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const MenuBar = () => {
  const { name, logout, user, loggedInUser } = useAuth();
  return (
    <>
      {/* -----Navbar for all pages -------*/}

      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><h1 className="fw-bold text-black">Dream <span className="text-info">Tour</span></h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home" className="list">Home</Nav.Link>
            {/* <Nav.Link as={HashLink} to="/home#packages" className="list">Packages</Nav.Link> */}
            {
              user.email && <Nav.Link as={Link} to="/mybookings" className="list">My Bookings</Nav.Link>
            }
            {
              user.email && <Nav.Link as={Link} to="/addpackages" className="list">Add New Package</Nav.Link>
            }
            {
              user.email && <Nav.Link as={Link} to="/manageall" className="list">Manage All Bookings</Nav.Link>
            }
            {
              user.email && <Nav.Link as={Link} to="/admin" className="list">Admin</Nav.Link>
            }

            {!user?.email && <Link to="/login" className="list">
              <li className="text-info">Login</li>
            </Link>}

            {user?.email && <li className="list" style={{ color: "skyBlue", fontWeight: "bold" }}>
              {user.displayName}
            </li>
            }

            {user?.email ?
              <button className="signup-btn-style" onClick={logout}>Logout</button> :
              <Nav.Link as={Link} to="/register"><button className="signup-btn-style"><i className="fas fa-sign-in-alt"></i> Register</button></Nav.Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
