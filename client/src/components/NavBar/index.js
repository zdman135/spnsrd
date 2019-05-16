import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Auth from "../../utils/Auth";
import './NavBar.css'

let userID = "";

if (Auth.loggedIn()) {
  userID = Auth.getProfile().id
}

const profileLink = `/profile/${userID}`

export default class NavBar extends Component {
  state = {
    activeItem: "",
    isLoggedIn: false
  };

  componentDidMount() {
    if (Auth.loggedIn()) {
      this.setState({ isLoggedIn: true })
    }
  }

  logout() {
    Auth.logout()
  }

  handleNavClick = (event, { name }) => {
    this.setState({ activeItem: { name }.name })
  };

  render() {

    return (
      <div>
        <Menu inverted>
          <Menu.Item
            as={Link}
            to="/"
            key="home"
            name="home"
            active={this.state.activeItem === 'home'}
            onClick={this.handleNavClick}
          />
          <Menu.Item
            as={Link}
            to="/unsponsored"
            key="browse events"
            name="browse events"
            active={this.state.activeItem === 'browse events'}
            onClick={this.handleNavClick}
          />

          {this.state.isLoggedIn ? (
            <Menu.Item
              as={Link}
              to="/category"
              key="browse by category"
              name="browse by category"
              active={this.state.activeItem === 'browse by category'}
              onClick={this.handleNavClick}
            />
          ) : (
              <div />
            )}
            
          {this.state.isLoggedIn ? (
            <Menu.Item
              as={Link}
              to="/createevent"
              key="create event"
              name="create event"
              active={this.state.activeItem === 'create event'}
              onClick={this.handleNavClick}
            />
          ) : (
              <div />
            )}

          <Menu.Menu position='right'>
            {this.state.isLoggedIn ? (
              <Menu.Item
                as={Link}
                to={profileLink}
                key="profile"
                name="profile"
                active={this.state.activeItem === 'profile'}
                onClick={this.handleNavClick}
              />
            ) : (
                <div />
              )}

            {this.state.isLoggedIn ? (
              <Menu.Item
                href="/"
                name="logout"
                active={this.state.activeItem === 'logout'}
                onClick={this.logout}
              />
            ) : (
                <Menu.Item
                  href="/login"
                  name="login"
                  active={this.state.activeItem === 'login'}
                  onClick={this.handleNavClick}
                />
              )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  };
};