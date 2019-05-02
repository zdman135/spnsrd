import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './navbar.css'
const colorsA = ['Homepage', 'Login', 'Sign Up', 'About Us']

export default class NavBar extends Component {
  state = { activeA: colorsA[0]}

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  render() {
    const { activeA} = this.state

    return (
      <div >
        <Menu inverted style={{backgroundColor: 'black'}}>
          {colorsA.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              onClick={this.handleAClick}
            />
          ))}
        </Menu>
      </div>
    )
  }
}