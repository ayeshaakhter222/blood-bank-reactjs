import React, { Component } from "react";
import axios from "axios";

import "../assets/css/Login.css";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/login", this.state);
        console.log(response.data);
    };

    render() {
        return (
            <div className="user-login my-5">
                <div className="row">
                    <div className="col-sm-5 offset-sm-4">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <h3 className="fw-bold">
                                    Login
                                </h3>
                            </div>
                            <div className="card-body border border-danger">
                                <form onSubmit={this.submitLogin}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label-sm">Email address</label>
                                        <input type="email" className="form-control form-control-sm" id="email" name="email" onChange={this.handleInput} value={this.state.email} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-form-label-sm">Password</label>
                                        <input type="password" className="form-control form-control-sm" id="password" name="password" onChange={this.handleInput} value={this.state.password} />
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-danger btn-sm">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
