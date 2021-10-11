import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Auth from "./Auth";
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/Register.css";

function Register() {
    const history = useHistory();
    const [input, setInputValue] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        mobile: '',
        password_confirmation: ''
    });

    const handleInput = (e) => {
        e.persist();
        setInputValue({...input, [e.target.name]: e.target.value });
    };

    const submitRegistration = async (e) => {
        e.preventDefault();
        const data = {
            email:input.email,
            password:input.password,
            first_name: input.first_name,
            last_name: input.last_name,
            mobile: input.mobile,
            password_confirmation: input.password_confirmation
        };
        const resp = await axios.post("http://127.0.0.1:8000/api/register", data);
        const response = resp.data;

        if (response.status === true) {
            await Swal.fire({
                title: 'Success!',
                text: response.message,
                icon: 'success'
            });

            setInputValue({
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                mobile: '',
                password_confirmation: ''
            });

            history.push('/login');
        } else {
            await Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error'
            })
        }
    };

    return (
        <div className="container" id="content">
            <div className="row">
                <div className="col-sm-12">
                    <div className="user-register my-5">
                        <div className="row">
                            <div className="col-sm-5 offset-sm-4">
                                <div className="card">
                                    <div className="card-header bg-danger text-white">
                                        <h3 className="fw-bold">
                                            Register
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submitRegistration}>
                                            <div className="mb-3">
                                                <label htmlFor="first_name" className="col-form-label-sm">First Name</label>
                                                <input type="text" className="form-control form-control-sm" name="first_name" id="first_name" onChange={handleInput} value={input.first_name} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="last_name" className="col-form-label-sm">Last Name</label>
                                                <input type="text" className="form-control form-control-sm" name="last_name" id="last_name" onChange={handleInput} value={input.last_name} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="col-form-label-sm">Email</label>
                                                <input type="email" className="form-control form-control-sm" name="email" id="email" onChange={handleInput} value={input.email} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="mobile" className="col-form-label-sm">Mobile</label>
                                                <input type="mobile" className="form-control form-control-sm" name="mobile" id="mobile" onChange={handleInput} value={input.mobile} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="col-form-label-sm">Password</label>
                                                <input name="password" type="password" className="form-control form-control-sm" id="password" onChange={handleInput} value={input.password} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password_confirmation" className="col-form-label-sm">Confirm Password</label>
                                                <input name="password_confirmation" type="password" className="form-control form-control-sm" id="password_confirmation" onChange={handleInput} value={input.password_confirmation} />
                                            </div>
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-danger btn-sm">Register</button>
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

export default Register;
