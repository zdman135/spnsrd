import React from 'react'
import { Container } from 'semantic-ui-react'

import eventCard from "./eventCard.js";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
      <Header as="h3">Sponsor Events</Header>

    
 {children}

  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);
