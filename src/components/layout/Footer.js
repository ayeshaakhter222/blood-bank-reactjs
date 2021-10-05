import React from "react";

//css
import "../../assets/css/Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <div className="mt-5">
          {/*Footer*/}
          <footer className="text-center text-lg-start text-white">

              <section className="bg-danger bg-opacity-75 p-4">
                  <div className="container d-flex justify-content-between">
                      <div className="me-5">
                          <span>Get connected with us on social networks:</span>
                      </div>
                      <div>
                          <a href="https://facebook.com" className="text-white me-4">
                              <i className="fa fa-facebook"/>
                          </a>
                          <a href="https://twitter.com" className="text-white me-4">
                              <i className="fa fa-twitter"/>
                          </a>
                          <a href="https://google.com" className="text-white me-4">
                              <i className="fa fa-google"/>
                          </a>
                          <a href="https://instagram.com" className="text-white me-4">
                              <i className="fa fa-instagram"/>
                          </a>
                          <a href="https://fa-linkedin.com" className="text-white me-4">
                              <i className="fa fa-linkedin"/>
                          </a>
                          <a href="https://github.com" className="text-white me-4">
                              <i className="fa fa-github"/>
                          </a>
                      </div>
                  </div>
              </section>

              <section className="bottom-section">
                  <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
                          <div className="col-md-4 mb-4">
                              <h6 className="text-uppercase fw-bold">Blood Bank</h6>
                              <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                              <p>
                                  Here you can use rows and columns to organize your footer
                                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                  elit.
                              </p>
                          </div>

                          <div className="col-md-4 mb-4 text-end">
                              <h6 className="text-uppercase fw-bold">Links</h6>
                              <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                              <p>
                                  <a href="/" className="text-white">Home</a>
                              </p>
                              <p>
                                  <Link to="/add-blood-request" className="text-white">Add Blood Request</Link>
                              </p>
                              <p>
                                  <Link to="/about-us" className="text-white">About Us</Link>
                              </p>
                              <p>
                                  <Link to="/contact-us" className="text-white">Contact Us</Link>
                              </p>
                          </div>

                          <div className="col-md-4 mb-4 text-end">
                              <h6 className="text-uppercase fw-bold">Contact</h6>
                              <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                              <p><i className="fa fa-home mr-3"/> New York, NY 10012, US</p>
                              <p><i className="fa fa-envelope mr-3"/> info@example.com</p>
                              <p><i className="fa fa-phone mr-3"/> + 01 234 567 88</p>
                              <p><i className="fa fa-print mr-3"/> + 01 234 567 89</p>
                          </div>
                      </div>
                  </div>
              </section>

              <div className="text-center p-3 copyright bg-danger bg-opacity-75">
                  Ayesha Akhter © 2020 Copyright
              </div>
          </footer>
      </div>
  );
};

export default Footer;
