import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRole from "./components/admin/role/AddRole";
import ListRole from "./components/admin/role/ListRole";
import SearchDonor from "./components/SearchDonor";

//css
import "./App.css";
import Dashboard from "./components/user/Dashboard";
import Profile from "./components/user/Profile";
import AddDonate from "./components/user/AddDonate";

function App() {
  return (
      <div className="App">
          <Navbar />

          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/search-donor" component={SearchDonor} />
                          <Route exact path="/contact-us" component={ContactUs} />
                          <Route exact path="/about-us" component={AboutUs} />
                          <Route exact path="/login" component={Login} />
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/add-role" component={AddRole} />
                          <Route exact path="/list-role" component={ListRole} />
                          <Route exact path="/dashboard" component={Dashboard} />
                          <Route exact path="/profile" component={Profile} />
                          <Route exact path="/add-donate" component={AddDonate} />
                      </Switch>
                  </div>
              </div>
          </div>

          <Footer />
      </div>
  );
}

export default App;
