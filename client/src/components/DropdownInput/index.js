import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownInput = props => (
  <Dropdown 
    placeholder={props.placeholder}
    icon="dropdown"
    fluid
    selection
    options={props.options}
    name="category"
    onChange={props.onChange}
  />
)

export default DropdownInput;