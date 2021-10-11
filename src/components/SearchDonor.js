import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import DonorSearchResult from "./DonorSearchResult";
import Moment from 'moment';

class SearchDonor extends Component {
    state = {
        params: {
            blood_type: '',
            district_id: '',
            date: Moment(new Date()).format('yyyy-MM-DD')
        },
        startDate: new Date(),
        districts: [],
        bloodTypes: [],
        searchResult: [],
        isDonorSearchFound: false,
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
                districts: response.data.data
            });
        }
    };

    getBloodTypes = async () => {
        const response = await axios.get("http://localhost:8000/api/get_blood_types");
        if (response.data.status) {
            this.setState({
                bloodTypes: response.data.data
            });
        }
    };

    componentDidMount() {
        this.getDistricts();
        this.getBloodTypes();
    }

    render() {
        let result = {
            found: this.state.isDonorSearchFound,
            donors: this.state.searchResult
        };
        return (
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="role my-5">
                            <div className="card">
                                <div className="card-header bg-danger text-white">
                                    <h3 className="fw-bold">
                                        Search Donor
                                    </h3>
                                </div>
                                <div className="card-body border border-danger">
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
                    </div>
                </div>
            </div>

        )
    }
}

export default SearchDonor;
