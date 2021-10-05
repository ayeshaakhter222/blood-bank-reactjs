import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

class AddDonate extends Component {
    state = {
        patient_name: '',
        patient_address: '',
        donation_date: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitDonate = async (e) => {
        e.preventDefault();
        const resp = await axios.post("http://localhost:8000/api/add_donation", this.state);
        const response = resp.data;

        if (response.status === true) {
            await Swal.fire({
                title: 'Success!',
                text: response.message,
                icon: 'success'
            });

            this.setState({
                patient_name: '',
                patient_address: '',
                donation_date: ''
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
                                    Add Donation
                                </h3>
                            </div>
                            <div className="card-body border border-danger">
                                <form onSubmit={this.submitDonate}>
                                    <div className="mb-3">
                                        <label htmlFor="patient_name" className="col-form-label-sm">Donate Patient Name</label>
                                        <input type="text" className="form-control form-control-sm" name="patient_name" onChange={this.handleInput} value={this.state.patient_name} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="patient_address" className="col-form-label-sm">Donate Patient Address</label>
                                        <textarea className="form-control form-control-sm" name="patient_address" onChange={this.handleInput} value={this.state.patient_address}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donation_date" className="col-form-label-sm">Donate Date</label>
                                        <input type="text" className="form-control form-control-sm" name="donation_date" onChange={this.handleInput} value={this.state.donation_date} />
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-danger btn-sm">Save</button>
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

export default AddDonate;
