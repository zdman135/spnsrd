import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";
import API from '../utils/API';

class EventProfile extends Component {
    
    state = {
        eventData: {}
    }

    componentDidMount() {
        let splitLoc = this.props.location.pathname.split("/")
        console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        this.getEventById(location)
    }


    getEventById = id => {
        API.getEventById(id).then(res => {
            console.log(res.data)
            this.setState({
                eventData: res.data
            })
        }).catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                <ProfileImage info={this.state.eventData.image}/>
                <ProfileSegment info={this.state.eventData.isSponsored}/>
                <ProfileSegment info={this.state.eventData.name}/>
                <ProfileSegment info={this.state.eventData.date}/>
                <ProfileSegment info={this.state.eventData.location}/>
                <ProfileSegment info={this.state.eventData.shortText}/>
                <ProfileSegment info={this.state.eventData.longText}/>
                <ProfileSegment info={this.state.eventData.category}/>
                <ProfileSegment info={this.state.eventData.image}/>
                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;