import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="container" id="content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about-us my-5">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header bg-danger text-white">
                                            <h3 className="fw-bold">
                                                About Us
                                            </h3>
                                        </div>
                                        <div className="card-body border border-danger">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="fs-5">
                                                        Rokto is an automated blood service that connect blood searchers with voluntary blood donors in a moment through SMS and website. Rokto is a free service for all. Rokto started its journey in 2018.
                                                    </p>
                                                    <h4 className="fw-bold">
                                                        Why Rokto?
                                                    </h4>
                                                    <div>
                                                        <p className="fs-5">
                                                            Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives.
                                                        </p>
                                                        <p className="fs-5">
                                                            Rokto comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Rokto services can also be availed by SMS, people from any class of the society can easily avail of Rokto services.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h4 className="fw-bold">Vision</h4>
                                                    Ensuring no more death just for the need of blood

                                                    <h4 className="fw-bold">Mission</h4>
                                                    <p className="fs-5">
                                                        Connecting blood searchers with voluntary blood donors in a moment with the use of technology.
                                                    </p>

                                                    <h4 className="fw-bold">Objectives</h4>
                                                    <ul>
                                                        <li className="fs-5">
                                                            Encouraging voluntary blood donation
                                                        </li>
                                                        <li className="fs-5">
                                                            Creating awareness about safe blood transfer
                                                        </li>
                                                        <li className="fs-5">
                                                            Enabling people to place blood request via SMS, website, or facebook
                                                        </li>
                                                        <li className="fs-5">
                                                            Connecting voluntary blood donors via SMS or email
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default Login;
