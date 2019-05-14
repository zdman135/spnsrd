import React, { Component } from "react";
import { Container } from 'semantic-ui-react';
import API from "../../utils/API";
import EventCard from "../EventCard";

class EduCatTab extends Component {

    state = {
        events: [],
    };

    componentDidMount() {
        this.getEventsByCategory("Education")
    };

    getEventsByCategory = category => {
        API.getEventsByCategory(category).then(res => {
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
                   image={event.image}
                   category={event.category}
                   shortText={event.shortText}
                   isSponsored={event.isSponsored}
                   location={event._id}
                   />);
               })}
            </Container>
    )}
};

export default EduCatTab;