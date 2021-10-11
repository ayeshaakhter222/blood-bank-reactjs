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
import Dashboard from "./components/user/Dashboard";
import Profile from "./components/user/Profile";
import AddDonate from "./components/user/AddDonate";
import {ProtectedRoute} from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

import "./App.css";
import Auth from "./components/Auth";

function App() {
    let isAuthenticated = Auth.isAuthenticated();
  return (
      <div className="App">
          <Navbar />

          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search-donor" component={SearchDonor} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register} />
              <ProtectedRoute exact path="/add-role" component={AddRole}/>
              <ProtectedRoute exact path="/list-role" component={ListRole} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute exact path="/add-donate" component={AddDonate} />
              <Route path="*" component={NotFound} />

          </Switch>

          <Footer />
      </div>
  );
}

export default App;
