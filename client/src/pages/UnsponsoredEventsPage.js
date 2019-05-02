import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventCard from "../components/EventCard";
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

class UnsponsoredEventsPage extends Component {

    state = {
        events: [],
        redirect: false,
        redirectLoc: ""
    };

    componentDidMount() {
        this.getEvents();
    };

    setRedirect =  _=> {
        let splitLoc = this.props.location.pathname.split("/")
        console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        
        this.setState({
          redirect: true,
          redirectLoc: location
        });
    };

    setLocation = event => {
        console.log(event , "setLoc event")
    }

    getEvents = _=> {
        API.getEvents().then(res => {
            console.log(res.data)
            this.setState({events: res.data})
        }).catch(err => console.log(err));
    };

    render() {
        return (
            (this.state.redirect) 
           ? <Redirect to={`/event/${this.state.redirectLoc}`} />
           : <Container>
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