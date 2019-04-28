import React, { Component } from 'react';
import EventCard from "../components/EventCard/eventCard"
import API from "../utils/API"

class EventsLandingPage extends Component {

    state = {
        events: []
    };

    componentDidMount() {
        this.getEventCards()
    }

    getEventCards = () => {
        API.getEvents().then(event => {
            this.setState({
                events: event.data
            })
        })
    }

    render() {
        return (
            <div>

                {!this.state.events.length ? (
                    <div />
                ) : (
                        this.state.events.map((event, index) => {
                            return (
                                <EventCard
                                    key={index}
                                    name={event.name}
                                    shortText={event.shortText}
                                    category={event.category}
                                />
                            );
                        })

                    )}
            </div>
        );
    }
}

export default EventsLandingPage;