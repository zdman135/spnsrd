import React, { Component } from 'react';
import EventCard from "../components/EventCard/";
import API from "../utils/API";

class EventsLandingPage extends Component {

    state = {
        events: []
    };

    componentDidMount() {
        this.getEvents()
    }

    getEvents = () => {
        API.getEvents().then(event => {
            this.setState({
                events: event.data
            })
        })
    }

    render() {
        return (
            <div>

                {(!this.state.events.length) 
                ? ( <div />) 
                : (
                        this.state.events.map((event, index) => {
                            return (
                                <EventCard
                                key={index}
                                name={event.name}
                                image={event.image}
                                category={event.category}
                                shortText={event.shortText}
                                isSponsored={event.isSponsored}
                                location={event._id}
                                />
                            );
                        })

                    )};
            </div>
        );
    }
}

export default EventsLandingPage;