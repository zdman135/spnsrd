import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import categoryOptions from "../../utils/categoryOptions.js";
import DropdownInput from "../DropdownInput";

const inLineStyle = {
  marginTop: '75px',
}; 

function EventForm(props) {
  return(
    <Grid centered style={inLineStyle}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Please fill out the following form to create your event.
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="plus square outline"
            iconPosition="left"
            placeholder="Event Name"
            name="name"
            onChange={props.handleInputChange}
          />
          <Form.Input
            fluid
            icon="calendar alternate outline"
            iconPosition="left"
            placeholder="Date"
            name="date"
            onChange={props.handleInputChange}
          />
          <Form.Input
            fluid
            icon="map pin"
            iconPosition="left"
            placeholder="Location"
            name="location"
            onChange={props.handleInputChange}
          />
          <DropdownInput
            placeholder="Select a Category"
            name="category"
            options={categoryOptions}
            onChange={props.handleDropdownChange}
          />
          <br/>
          <Form.Input
            fluid
            icon="quote left"
            iconPosition="left"
            placeholder="Short Description"
            name="shortText"
            onChange={props.handleInputChange}
          />
          <Form.Input
            fluid
            icon="file image outline"
            iconPosition="left"
            placeholder="Link to an Image"
            name="image"
            onChange={props.handleInputChange}
          />
          <Form.Input
            fluid
            icon="bars"
            iconPosition="left"
            placeholder="More Event Information"
            name="longText"
            onChange={props.handleInputChange}
          />

          <Button onClick={props.handleCreateEvent}color="purple" fluid size="large">
            Create New Event!
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
  );
  
}

export default EventForm;