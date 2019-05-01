import React, { Component } from 'react';
import EventForm from '../components/EventForm';
import API from "../utils/API";
import AuthLogin from "../components/Auth/Login";

class CreateEventPage extends Component {

    componentDidMount() {
        let userProfile = AuthLogin.getProfile();
        let userID = userProfile.id
        this.setState(
            {createdBy: userID} 
        )
    }

    state = {
        name: "",
        date: "",
        location: "",
        shortText: "",
        longText: "",
        category: "",
        isSponsored: false,
        createdBy: null,
        image: ""
    };

    createEvent = _=> {
        API.createEvent({
            name: this.state.name,
            location: this.state.location,
            shortText: this.state.shortText,
            longText: this.state.longText,
            category: this.state.category,
            isSponsored: this.state.isSponsored,
            userId: this.state.createdBy,
            image: this.state.image
          })
            .then(res => {
              console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleDropdownChange = (event , data) => {
        let value = data.value;
        let name = data.name;

        this.setState({
            [name]: value
        });
    };

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
            date: "",
            location: "",
            shortText: "",
            longText: "",
            category: "",
            isSponsored: false,
            createdBy: null,
            image: ""
        });
    };

    render() {
        return (
            <EventForm
            name={this.state.name}
            date={this.state.date}
            location={this.state.location}
            shortText={this.state.shortText}
            longText={this.state.longText}
            category={this.state.category}
            image={this.state.image}
            handleInputChange={this.handleInputChange}
            handleCreateEvent={this.handleCreateEvent}
            handleDropdownChange={this.handleDropdownChange}
             />
        );
    }
}

export default CreateEventPage;