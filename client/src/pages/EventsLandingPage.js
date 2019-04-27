import React, { Component } from 'react';
import EventCard from "../components/EventCard/eventCard"
import API from "../utils/API"

class EventsLandingPage extends Component {

    state = {
        name:"lab"
    };

 getEventCards = () => {
    let events = API.getEvents().then(event => {
        console.log (event.data)
        this.setState({
            events: event.data
        })
    })
 }

componentDidMount() {
    this.getEventCards()
}
                 
    render() {
        return (
          <EventCard
            name={this.state.name}
            />
        );
    }
}

export default EventsLandingPage;