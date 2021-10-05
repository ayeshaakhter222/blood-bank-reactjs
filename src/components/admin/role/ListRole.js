import React, { Component } from "react";
import axios from "axios";

class ListRole extends Component {
    state = {
        name: ''
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitRole = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/login", this.state);
        console.log(response);
    };

    render() {
        return (
            <div className="role my-5">
                <div className="card">
                    <div className="card-header">
                        List of Roles
                    </div>
                    <div className="card-body">
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

export default ListRole;
