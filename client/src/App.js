import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  // Link, not used yet, commented out for now to remove warning
  Redirect,
  Switch
} from "react-router-dom";

import NavBar from "./components/NavBar";
import 'semantic-ui-css/semantic.min.css';

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventProfilePage from "./pages/EventProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import UnsponsoredEventsPage from "./pages/UnsponsoredEventsPage";
import EventsNextWeekPage from "./pages/EventsNextWeekPage";
import EventsByCategoryPage from "./pages/EventsByCategoryPage";

import Auth from "./utils/Auth";
import EventsLandingPage from "./pages/EventsLandingPage";
import LoginPage from "./pages/LoginPage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.loggedIn() === true
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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/unsponsored" component={UnsponsoredEventsPage} />
          <PrivateRoute exact path="/nextweek" component={EventsNextWeekPage} />
          <PrivateRoute exact path="/category" component={EventsByCategoryPage} />
          <PrivateRoute exact path="/event" component={EventProfilePage} />
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

