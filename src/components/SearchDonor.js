import React, { Component } from "react";
import axios from "axios";

class SearchDonor extends Component {
    state = {
        name: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    searchDonor = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/login", this.state);
        console.log(response);
    };

    render() {
        return (
            <div className="role my-5">
                <div className="card">
                    <div className="card-header bg-danger text-white">
                        <h3 className="fw-bold">
                            Search Donor
                        </h3>
                    </div>
                    <div className="card-body border border-danger">
                        <form className="row g-3 mb-4">
                            <div className="col-3">
                                <label className="col-form-label-sm" htmlFor="blood_group">Blood Group</label>
                                <select name="blood_group" className="form-select form-select-sm" id="blood_group">
                                    <option value="">Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label className="col-form-label-sm" htmlFor="district_id">District</label>
                                <select name="district_id" className="form-select form-select-sm" id="district_id">
                                    <option value="">Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label className="col-form-label-sm" htmlFor="date">Date of Blood Donation</label>
                            </div>

                            <div className="col-12 text-end">
                                <button type="submit" className="btn btn-danger btn-sm">Search Donor</button>
                            </div>
                        </form>

                        <table className="table table-bordered table-sm table-hover">
                            <thead>
                            <tr>
                                <th>Role Name</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>#</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchDonor;
