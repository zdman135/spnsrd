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
import 'semantic-ui-css/semantic.min.css';

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventProfilePage from "./pages/EventProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

import AuthLogin from "./components/Auth/Login";
import EventsLandingPage from "./pages/EventsLandingPage";

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
          <PrivateRoute path="/profile/:id" component={ProfilePage} />
          <PrivateRoute exact path="/createevent" component={CreateEventPage} />
          <PrivateRoute exact path="/events" component={EventsLandingPage} />
          <Route path="/event/:id" component={EventProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

