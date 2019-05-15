import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import API from "../utils/API";
// import Auth from "../utils/Auth"; TODO use
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";
import { Card, Icon, Image } from "semantic-ui-react";
import './ProfilePage.css';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
class ProfilePage extends Component {
  state = {
    userData: {}
  };

  componentDidMount() {
    let splitLoc = this.props.location.pathname.split("/");
    console.log(splitLoc[2], "location");
    let location = splitLoc[2];
    this.getUserById(location);
  }

  getUserById = id => {
    API.getUserById(id)
      .then(res => {
        console.log(res.data);
        this.setState({
          userData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  

  render() {
    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]
      
    return (
        
      <Container className="profileStyle">
        

        <Card>
   
          <Image
            src={this.state.userData.image}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{this.state.userData.name}</Card.Header>
            <Card.Meta>
            <Icon name="birthday cake" />
            Age:               
             {this.state.userData.age} 
            </Card.Meta>
           
          </Card.Content>
          <Card.Content extra>
            <a>
            <Icon name="pencil alternate" />
              Edit Profile 
            </a>
          </Card.Content>
        </Card>

  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>

      </Container>
      
      
    );
  }
}

export default ProfilePage;
