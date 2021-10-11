import React from "react";

const DonorSearchResult = (props) => {
    let { result } = props;
    const found = result.found;
    const donors = result.donors;
    console.log(result);

    if (found && donors.length > 0) {
        return (
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-sm table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donors.map((donor) => (
                                    <tr key={donor.id}>
                                        <td>{donor.first_name + ' ' + donor.last_name}</td>
                                        <td>{donor.email}</td>
                                        <td>{donor.gender}</td>
                                        <td>{donor.mobile}</td>
                                        <td>{donor.address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row">
                <div className="col-12">
                    <p className="text-info fw-bold">Nothing Found</p>
                </div>
            </div>
        )
    }
};

export default DonorSearchResult;
