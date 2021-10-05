import React, {Component} from "react";
import bdrop from "../../assets/img/bdrop.png";
import "../../assets/css/Navbar.css";
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component{

    logout = (e) => {

    };

    state = {
        roleDropdown: "!#",
        userDropdown: "!#"
    };

    render() {
        return (
            <div className="top-nav">
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger">
                    <div className="container">
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
                                    <NavLink aria-current="page" to="/about-us" activeClassName="active" className="nav-link">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="search-donor" className="nav-link" aria-current="page">Search Donor</Link>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add-donate" className="nav-link" activeClassName="active" aria-current="page">Add Donation</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink aria-current="page" to="/register" activeClassName="active" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link" aria-current="page">Dashboard</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href={this.state.roleDropdown} id="roleDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Role
                                    </a>
                                    <ul className="dropdown-menu bg-danger" aria-labelledby="roleDropdown">
                                        <li className="">
                                            <Link to="/add-role" className="dropdown-item" aria-current="page">Add Role</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/list-role" className="dropdown-item" aria-current="page">All Roles</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href={this.state.userDropdown} id="userDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        User Name
                                    </a>
                                    <ul className="dropdown-menu bg-danger" aria-labelledby="userDropdown">
                                        <li className="">
                                            <Link to="/profile" className="dropdown-item" aria-current="page">Profile</Link>
                                        </li>
                                        <li className="">
                                            <button onClick={this.logout} className="dropdown-item" aria-current="page">Logout</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
