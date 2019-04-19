import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Event from "./components/Event";
import Index from "./components/Index";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/index" component={Index} />
        <Route path="/profile/:id" component={Profile} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

