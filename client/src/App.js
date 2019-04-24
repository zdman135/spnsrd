import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import NavBar from "./components/NavBar/navbar.js";
import Event from "./components/Event";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import EventCard from "./components/EventCard";
import 'semantic-ui-css/semantic.min.css';

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

import AuthLogin from "./components/Auth/Login";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthLogin.loggedIn() === true
    ? <Component {...props} />
    : <Redirect to="/login" />
  )}/>
);

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/event" component={Event} />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

