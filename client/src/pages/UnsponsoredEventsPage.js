import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventCard from "../components/EventCard"
import API from "../utils/API"

class UnsponsoredEventsPage extends Component {

    componentDidMount() {
        // API.getEvents()
    }

    getEvents = _=> {
        API.getEvents().then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <EventCard 
                name="testEvent"
                category="testCategory"
                shortText="test shortText"
                isSponsored={false} />
            </Container>
        )
    }
}

export default UnsponsoredEventsPage;