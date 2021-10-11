import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DonorSearchResult from "./DonorSearchResult";
import Moment from "moment";

import "../assets/css/Home.css";
import {NavLink} from "react-router-dom";

class Home extends Component {
    state = {
        totalDonors: 0,
        totalDistricts: 0,
        totalBloodTypes: 0,
        startDate: new Date(),
        searchResult: [],
        isDonorSearchFound: false,
        params: {
            blood_type: '',
            district_id: '',
            date: Moment(new Date()).format('yyyy-MM-DD')
        },
        districts: [],
        bloodTypes: []
    };

    getDistrictCount = async () => {
        const response = await axios.get("http://localhost:8000/api/count_district");

        if (response.data.status) {
            this.setState({
                ...this.state,
                totalDistricts: response.data.count
            });
        }
    };

    getDonorCount = async () => {
        const response = await axios.get("http://localhost:8000/api/count_donor");

        if (response.data.status) {
            this.setState({
                ...this.state,
                totalDonors: response.data.count
            });
        }
    };

    getBloodTypeCount = async () => {
        const response = await axios.get("http://localhost:8000/api/count_blood_type");

        if (response.data.status) {
            this.setState({
                ...this.state,
                searchResult: response.data.data
            });
        }
    };

    handleInput = (e) => {
        this.setState({
            params: {
                ...this.state.params,
                [e.target.name]: e.target.value
            }
        });
    };

    handleDateChange = (selectedDate) => {
        this.setState({
            ...this.state,
            startDate: selectedDate,
            params: {
                ...this.state.params,
                date: Moment(selectedDate).format('yyyy-MM-DD')
            }
        })
    };

    submitSearchDonor = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/search_donor", this.state.params);

        if (response.data.status) {
            if (response.data.data.length > 0) {
                this.setState({
                    ...this.state,
                    searchResult: response.data.data,
                    isDonorSearchFound: true
                });
            } else {
                this.setState({
                    ...this.state,
                    searchResult: [],
                    isDonorSearchFound: false
                });
            }
        } else {
            this.setState({
                ...this.state,
                searchResult: [],
                isDonorSearchFound: false
            });
        }
    };

    getDistricts = async () => {
        const response = await axios.get("http://localhost:8000/api/get_districts");

        if (response.data.status) {
            this.setState({
                ...this.state,
                districts: response.data.data
            });
        }
    };

    getBloodTypes = async () => {
        const response = await axios.get("http://localhost:8000/api/get_blood_types");
        if (response.data.status) {
            this.setState({
                ...this.state,
                bloodTypes: response.data.data
            });
        }
    };

    componentDidMount() {
        this.getDistricts();
        this.getBloodTypes();

        this.getDonorCount();
        this.getDistrictCount();
        this.getBloodTypeCount();
    }

    render() {
        let result = {
            found: this.state.isDonorSearchFound,
            donors: this.state.searchResult
        };
        return (
            <div className="home">
                <section className="intro py-10">
                    <div className="container">
                        <h3>
                            SMS-based platform to connect blood searchers with donors
                        </h3>
                        <h5>
                            Blood Bank is a real-time free platform to help blood searchers connect voluntary <br/>
                            blood donors around Bangladesh.
                        </h5>
                        <br/>
                        <div className="clearfix"/>
                        <div className="home-page-top-buttons">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <NavLink to="/login" className="btn btn-danger">Join as Blood Donor</NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink to="/search-donor" className="btn btn-secondary">Search Blood Donors</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="intro-bottom my-3 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>What is Blood Bank?</h4>
                                <p>
                                    Blood Bank is an automated blood service that connects blood searchers with voluntary donors in a moment through SMS. Blood Bank is always a free service for all.
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <h4>Why is Blood Bank?</h4>
                                <ul>
                                    <li>100% Automated</li>
                                    <li>Always free</li>
                                    <li>24×7 service</li>
                                    <li>All data is secured</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="search-donor my-5 py-3">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-center fw-bold">Search Donors</h3>
                            <form className="form-inline mb-3" onSubmit={this.submitSearchDonor}>
                                <div className="row align-items-end">
                                    <div className="col-3">
                                        <label className="col-form-label-sm" htmlFor="blood_group">Blood Group</label>
                                        <select name="blood_type" className="form-select form-select-sm" id="blood_type" onChange={this.handleInput}>
                                            <option value="">Choose One</option>
                                            {
                                                this.state.bloodTypes.map((bloodType) => (
                                                    <option key={bloodType.id} value={bloodType.id}>{bloodType.symbol}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="col-3">
                                        <label className="col-form-label-sm" htmlFor="district_id">District</label>
                                        <select name="district_id" className="form-select form-select-sm" id="district_id" onChange={this.handleInput}>
                                            <option value="">Choose One</option>
                                            {
                                                this.state.districts.map((district) => (
                                                    <option key={district.id} value={district.id}>{district.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-3">
                                        <label className="col-form-label-sm" htmlFor="date">Date of Blood Donation</label>
                                        <DatePicker
                                            dateFormat="dd MMM yyyy"
                                            selected={this.state.startDate}
                                            onChange={this.handleDateChange}
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div className="col-3">
                                        <button type="submit" className="btn btn-danger btn-sm">Search Donor</button>
                                    </div>
                                </div>
                            </form>

                            <DonorSearchResult result={result}/>
                        </div>
                    </div>
                </div>
                </section>

                <section className="search-donor my-5 py-3">
                    <div className="container">
                        <h3 className="text-center fw-bold">We're a network of</h3>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <div>
                                    <i className="fa fa-users fa-5x text-danger" aria-hidden="true"/>
                                </div>
                                <div className="fw-bold">
                                    {this.state.totalDonors} Donors
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div>
                                    <i className="fa fa-map-marker fa-5x text-danger" aria-hidden="true"/>
                                </div>
                                <div className="fw-bold">
                                    {this.state.totalDistricts} Districts
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div>
                                    <i className="fa fa-medkit fa-5x text-danger" aria-hidden="true"/>
                                </div>
                                <div className="fw-bold">
                                    {this.state.totalBloodTypes} Blood Types
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
