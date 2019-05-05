import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventCard from "../components/EventCard";
import API from "../utils/API";

class UnsponsoredEventsPage extends Component {

    state = {
        events: [],
    };

    componentDidMount() {
        this.getEventsByStatus(false)
    };

    getEventsByStatus = type => {
        API.getEventsByStatus(type).then(res => {
            console.log(res.data , "status data")
            this.setState({events: res.data})
        }).catch(err => console.log(err))
    };

    render() {
        return (
            <Container className="three column doubling centered grid container">
               {this.state.events.map(event => {
                   return (<EventCard
                   key={event._id}
                   name={event.name}
                   image={event.image}
                   category={event.category}
                   shortText={event.shortText}
                   isSponsored={event.isSponsored}
                   location={event._id}
                   />);
               })};
            </Container>
        );
    };
};

export default UnsponsoredEventsPage;