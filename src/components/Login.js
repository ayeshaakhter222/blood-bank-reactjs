import React, { useState } from "react";
import axios from "axios";
import Auth from "./Auth";
import {Link, useHistory} from 'react-router-dom';

import "../assets/css/Login.css";

function Login () {
    const history = useHistory();
    const [input, setInputValue] = useState({
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        e.persist();
        setInputValue({...input, [e.target.name]: e.target.value });
    };

    const submitLogin = async (e) => {
        e.preventDefault();

        const data = {
            email:input.email,
            password:input.password
        };

        const resp = await axios.post("http://localhost:8000/api/login", data);
        const response = resp.data;

        if (response.status === true) {
            Auth.authenticated = true;
            Auth.setAuthenticationToLocalStorage(response);
            history.push('/dashboard');
            window.location.reload();
        }
    };

    return (
        <div className="container" id="content">
            <div className="row">
                <div className="col-sm-12">
                    <div className="user-login my-5">
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4">
                                <div className="card">
                                    <div className="card-header bg-danger text-white">
                                        <h3 className="fw-bold">
                                            Login
                                        </h3>
                                    </div>
                                    <div className="card-body border border-danger">
                                        <form onSubmit={submitLogin}>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="col-form-label-sm">Email address</label>
                                                <input type="email" className="form-control form-control-sm" id="email" name="email" onChange={handleInput} value={input.email} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="col-form-label-sm">Password</label>
                                                <input type="password" className="form-control form-control-sm" id="password" name="password" onChange={handleInput} value={input.password} />
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
                </div>
            </div>
        </div>

    )
}

export default Login;
