import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="row shadow p-5 mt-3 bg-light">

      
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <h3 style={{ fontFamily: "Dancing Script", color: "green" }}>
            The Food Lounge
          </h3>
          <p>
            The Food Lounge is a modern restaurant offering fresh, flavorful, 
            and beautifully crafted dishes. We combine quality ingredients, skilled chefs, and exceptional service to create a delightful dining experience for every customer.
          </p>
        </div>

      
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <h5 style={{ color: "green" }}>Company</h5>
          <Link className="text-decoration-none d-block text-dark fw-bold" to="/">
            Home
          </Link>
          <Link className="text-decoration-none d-block text-dark fw-bold" to="/menu">
            Menu
          </Link>
          <Link className="text-decoration-none d-block text-dark fw-bold" to="/about">
            About
          </Link>
        </div>

       
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <h5 style={{ color: "green" }}>Opening Hours</h5>
          <h6>Monday - Saturday</h6>
          <h6>09 AM - 09 PM</h6>
          <br />
          <h6>Sunday</h6>
          <h6>10 AM - 10 PM</h6>
        </div>

 
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <h5 style={{ color: "green" }}>Contact Us</h5>

          <h6>
            <i className="fa-solid fa-location-dot me-2" style={{ color: "green" }}></i>
            123 Street, New York, USA
          </h6>

          <h6>
            <i className="fa-solid fa-phone me-2" style={{ color: "green" }}></i>
            +012 345 6789
          </h6>

          <h6>
            <i className="fa-solid fa-envelope-open me-2" style={{ color: "green" }}></i>
            thefoodlounge@gmail.com
          </h6>

          
          <div className="fs-3 d-flex mt-2">
            <i className="fa-brands fa-facebook me-3" style={{ color: "green" }}></i>
            <i className="fa-brands fa-twitter me-3" style={{ color: "green" }}></i>
            <i className="fa-brands fa-instagram" style={{ color: "green" }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
