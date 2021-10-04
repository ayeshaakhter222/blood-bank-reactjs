import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger bg-opacity-75">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                      <img src={bdrop} alt="" width="30" className="d-inline-block align-text-top" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Abount Us</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Search Donors</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Add Blood Request</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Register</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" aria-current="page" href="/">Login</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  );
};

export default Navbar;
