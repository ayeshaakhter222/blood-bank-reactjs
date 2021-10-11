import React, {Component} from "react";
import axios from "axios";

class Dashboard extends Component {
    state = {
        donations: []
    };

    async componentDidMount() {
        const resp = await axios.get("http://localhost:8000/api/dashboard");
        const response = resp.data;

        if (response.status === true) {
            this.setState({
                donations: response.data
            })
        }
    }

    render() {
        const donations = [];
        // console.log(this.state.donations);

        if (this.state.donations.length) {
            for (let i=0; i<this.state.donations.length; i++) {
                const donation = this.state.donations[i];
                donations.push(
                    <div className="col-sm-4" key={donation.id}>
                        <div className={"card mb-4"}>
                            <h5 className="card-header">{i+1}</h5>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <b>Donation Date:</b> {donation.donation_date}
                                    </li>
                                    <li>
                                        <b>Donated Patient Name:</b> {donation.patient_name}
                                    </li>
                                    <li>
                                        <b>Donated Patient Address:</b> {donation.patient_address}
                                    </li>
                                    {/*<li>
                                    <b>Blood Group:</b> {donation.bloodGroup}
                                </li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="profile my-5">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header text-white bg-danger">
                                            <h3 className="fw-bold mb-1">
                                                Dashboard
                                            </h3>
                                        </div>
                                        <div className="card-body border border-danger">
                                            <div className="row">
                                                {donations}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
