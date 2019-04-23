import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Event from "./components/Event";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
// import EventCard from "./components/EventCard";
import 'semantic-ui-css/semantic.min.css';

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/profile/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

