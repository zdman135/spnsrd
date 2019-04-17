import React from "react";
import { BrowserRouter as Router, Route } from "SPNSRD";

import login from "./validation/login.js";
import register from "./validation/register.js";
import event from "./models/event.js";
import index from "./models/index.js";
import user from "./models.user.js";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/login" component={login} />
        <Route exact path="/index" component={index} />
        <Route exact path="/register" component={register} />
        <Route exact path="/event" component={event} />
        <Route path="/contact" component={user} />
      </div>
    </Router>
    
  );
}

export default App;
