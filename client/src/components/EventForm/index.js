import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';


function EventForm(props) {
  return(
    <Grid centered columns={2}>
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

          <Button onClick={props.handleEventChange}color="purple" fluid size="large">
            Create New Event!
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
  );
  
}

export default EventForm;