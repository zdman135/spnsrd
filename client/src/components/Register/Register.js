import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';


function Register(props) {
  return(
    <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Please follow the following steps.
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Full Name"
            name="name"
            onChange={props.handleInputChange}
          />
           <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="E-Mail"
            name="email"
            onChange={props.handleInputChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            onChange={props.handleInputChange}
          />

          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            name="password2"
            onChange={props.handleInputChange}
          />


          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Age"
            type="Age"
            name="age"
            onChange={props.handleInputChange}
          />

          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Profile Image Url"
            type="text"
            name="image"
            onChange={props.handleInputChange}
          />

          <Button onClick={props.handleRegister}color="purple" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
      <Message>
        Already have an account? <a href="/login">Login Here</a>
      </Message>
    </Grid.Column>
  </Grid>
  );
  
}

export default Register;