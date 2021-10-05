import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

//css
import "../assets/css/Login.css";

class Register extends Component {
    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        mobile: '',
        password_confirmation: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitRegistration = async (e) => {
        e.preventDefault();
        const resp = await axios.post("http://127.0.0.1:8000/api/register", this.state);
        const response = resp.data;

        if (response.status === true) {
            await Swal.fire({
                title: 'Success!',
                text: response.message,
                icon: 'success'
            });

            this.setState({
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                mobile: '',
                password_confirmation: ''
            });
        } else {
            await Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error'
            })
        }
    };

    render() {
        return (
            <div className="user-login my-5">
                <div className="row">
                    <div className="col-sm-5 offset-sm-4">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <h3 className="fw-bold">
                                    Register
                                </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitRegistration}>
                                    <div className="mb-3">
                                        <label htmlFor="first_name" className="col-form-label-sm">First Name</label>
                                        <input type="text" className="form-control form-control-sm" name="first_name" id="first_name" onChange={this.handleInput} value={this.state.first_name} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="last_name" className="col-form-label-sm">Last Name</label>
                                        <input type="text" className="form-control form-control-sm" name="last_name" id="last_name" onChange={this.handleInput} value={this.state.last_name} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="col-form-label-sm">Email</label>
                                        <input type="email" className="form-control form-control-sm" name="email" id="email" onChange={this.handleInput} value={this.state.email} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="col-form-label-sm">Mobile</label>
                                        <input type="mobile" className="form-control form-control-sm" name="mobile" id="mobile" onChange={this.handleInput} value={this.state.mobile} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="col-form-label-sm">Password</label>
                                        <input name="password" type="password" className="form-control form-control-sm" id="password" onChange={this.handleInput} value={this.state.password} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password_confirmation" className="col-form-label-sm">Confirm Password</label>
                                        <input name="password_confirmation" type="password" className="form-control form-control-sm" id="password_confirmation" onChange={this.handleInput} value={this.state.password_confirmation} />
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
        )
    }
}

export default Register;
