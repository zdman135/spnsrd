import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Auth from "../../utils/Auth";

let userID = "test";

if (Auth.loggedIn()) {
  let userProfile = Auth.getProfile();
  userID = userProfile.id
} else {
  userID = "";
}

const pageArr = ['Browse Events', 'Create Event', 'Profile'];
const linkArr = ["/unsponsored" , "/createevent" , `/profile/${userID}`]

export default class NavBar extends Component {
  state = { 
    activePage: pageArr[0],
    userID: ""
   };

  handleNavClick = (event, { name }) => this.setState({ activePage: name });

  render() {
    const { activePage } = this.state;

    return (
      <div>
        <Menu inverted>
          {pageArr.map((page , index) => (
            <Menu.Item
              as={Link}
              to={linkArr[index]}
              key={page}
              name={page}
              active={activePage === page}
              onClick={this.handleNavClick}
            />
          ))};
        </Menu>
      </div>
    );
  };
};