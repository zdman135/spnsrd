import React from "react";
import ReactDOM from "react-dom";
import { Container, Header} from "semantic-ui-react";
import CardExampleCardProps from "./eventCard.js";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
      <Header as="h3">Browser Events</Header>

    
 {children}

  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <CardExampleCardProps />
  </App>,
  document.getElementById("root")
);