import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
    state = {
        name: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    updateProfile = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/login", this.state);
        console.log(response);
    };

    render() {
        return (
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="profile my-5">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header text-white bg-danger">
                                            Profile
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.updateProfile} className="row g-3">
                                                <div className="col-sm-3">
                                                    <label htmlFor="first_name" className="col-form-label-sm">First Name</label>
                                                    <input type="text" className="form-control form-control-sm" name="first_name" id="first_name" onChange={this.handleInput} value={this.state.first_name} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="last_name" className="col-form-label-sm">Last Name</label>
                                                    <input type="text" className="form-control form-control-sm" name="last_name" id="last_name" onChange={this.handleInput} value={this.state.last_name} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="email" className="col-form-label-sm">Email</label>
                                                    <input type="email" className="form-control form-control-sm" name="email" id="email" onChange={this.handleInput} value={this.state.email} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="mobile" className="col-form-label-sm">Mobile</label>
                                                    <input type="mobile" className="form-control form-control-sm" name="mobile" id="mobile" onChange={this.handleInput} value={this.state.mobile} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="birth_date" className="col-form-label-sm">Birth Date</label>
                                                    <input name="birth_date" type="text" className="form-control form-control-sm" id="password" onChange={this.handleInput} value={this.state.birth_date} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="district_id" className="col-form-label-sm">District</label>
                                                    <select name="district_id" id="district_id" className="form-control form-control-sm" onChange={this.handleInput}>
                                                        <option value="m">Male</option>
                                                        <option value="f">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="city" className="col-form-label-sm">City</label>
                                                    <input name="city" type="text" className="form-control form-control-sm" id="city" onChange={this.handleInput} value={this.state.city} />
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="gender" className="col-form-label-sm">Gender</label>
                                                    <select name="gender" id="gender" className="form-control form-control-sm" onChange={this.handleInput}>
                                                        <option value="m">Male</option>
                                                        <option value="f">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="blood_type" className="col-form-label-sm">Blood Type</label>
                                                    <select name="blood_type" id="blood_type" className="form-control form-control-sm" onChange={this.handleInput}>
                                                        <option value="m">Male</option>
                                                        <option value="f">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="weight" className="col-form-label-sm">Weight</label>
                                                    <input name="weight" type="text" className="form-control form-control-sm" id="weight" onChange={this.handleInput} value={this.state.weight} />
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="temperature" className="col-form-label-sm">Temperature</label>
                                                    <input name="temperature" type="text" className="form-control form-control-sm" id="temperature" onChange={this.handleInput} value={this.state.temperature} />
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="pulse" className="col-form-label-sm">Pulse</label>
                                                    <input name="pulse" type="text" className="form-control form-control-sm" id="pulse" onChange={this.handleInput} value={this.state.pulse} />
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="bp" className="col-form-label-sm">Blood Pressure</label>
                                                    <input name="bp" type="text" className="form-control form-control-sm" id="bp" onChange={this.handleInput} value={this.state.bp} />
                                                </div>
                                                <div className="col-sm-12">
                                                    <hr/>
                                                </div>
                                                <h4 className="mt-0">Change Password</h4>
                                                <div className="col-sm-3">
                                                    <label htmlFor="password" className="col-form-label-sm">Password</label>
                                                    <input name="password" type="password" className="form-control form-control-sm" id="password" onChange={this.handleInput} value={this.state.password} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="password_confirmation" className="col-form-label-sm">Confirm Password</label>
                                                    <input name="password_confirmation" type="password" className="form-control form-control-sm" id="password_confirmation" onChange={this.handleInput} value={this.state.password_confirmation} />
                                                </div>
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-danger">Update Profile</button>
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
}

export default Profile;
