import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colorsA = ['Homepage', 'Login', 'Sign Up', 'About Us']

export default class spnsrdNavbar extends Component {
  state = { activeA: colorsA[0]}

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  render() {
    const { activeA} = this.state

    return (
      <div>
        <Menu inverted>
          {colorsA.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={c}
              onClick={this.handleAClick}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
