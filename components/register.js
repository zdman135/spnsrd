import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
export default () => (
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
          />
           <Form.Input
            fluid
            icon="email"
            iconPosition="left"
            placeholder="E-Mail"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Age"
            type="Age"
          />
          <Button color="purple" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
      <Message>
        Already have an account? <a href="#">Login Here</a>
      </Message>
    </Grid.Column>
  </Grid>
);