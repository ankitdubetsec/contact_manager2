import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="#" style={{ color: '#007bff', fontWeight: 'bolder' }}><img src="\images\logo.png" alt="" /> Appointer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footerss">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/patientLogin">Patient Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/DoctorLogin">Provider Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;