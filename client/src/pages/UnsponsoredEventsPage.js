import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventCard from "../components/EventCard";
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

class UnsponsoredEventsPage extends Component {

    state = {
        events: [],
    };

    componentDidMount() {
        this.getEvents();
    };

    getEvents = _=> {
        API.getEvents().then(res => {
            console.log(res.data)
            this.setState({events: res.data})
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
               {this.state.events.map(event => {
                   return (<EventCard
                   key={event._id}
                   name={event.name}
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