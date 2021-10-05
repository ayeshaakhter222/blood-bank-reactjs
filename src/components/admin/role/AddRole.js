import React, { Component } from "react";
import axios from "axios";

class AddRole extends Component {
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
                <div className="row">
                    <div className="col-sm-5 offset-sm-4">
                        <div className="card">
                            <div className="card-header">
                                Add Role
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitRole}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Role Name</label>
                                        <input name="name" type="text" className="form-control" id="name" onChange={this.handleInput} value={this.state.name} />
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-danger">Add Role</button>
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

export default AddRole;
