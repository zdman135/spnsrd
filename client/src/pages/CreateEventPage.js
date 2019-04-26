import React, { Component } from 'react';
import EventForm from '../components/EventForm'
import API from "../utils/API"

class CreateEventPage extends Component {

    state = {
        name: "",
        date: ""
    };

    createEvent = () => {
        API.createEvent({
            name: this.state.name,
            date: this.state.date
          })
            .then(res => {
              console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleCreateEvent = event => {
        event.preventDefault();

        this.createEvent()

        this.setState({
            name: "",
            date: ""
        });
    };

    render() {
        return (
            <EventForm
            name={this.state.name}
            date={this.state.date}
            handleInputChange={this.handleInputChange}
            handleCreateEvent={this.handleCreateEvent}
             />
        );
    }
}

export default CreateEventPage;