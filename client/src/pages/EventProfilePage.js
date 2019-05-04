import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";
import ProfileStatusSegment from "../components/ProfileStatusSegment";
import AuthLogin from "../components/Auth/Login";
import API from '../utils/API';

class EventProfile extends Component {    
    state = {
        eventData: {},
        userIdsOfSponsored: [],
        sponsored: false
    }

    componentDidMount() {
        let splitLoc = this.props.location.pathname.split("/")
        // console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        this.getEventById(location)
    }
    
    getEventById = id => {
        API.getEventById(id).then(res => {
            this.setState({ eventData: res.data })
            this.setState({ userIdsOfSponsored: res.data.sponsors })
            let userID = AuthLogin.getProfile().id;
            if (this.state.userIdsOfSponsored.includes(userID)) {
                this.setState({ sponsored: true })
            }
            // console.log(this.state)

        }).catch(err => console.log(err));
    }

    handleBtnClick = event => {
        event.preventDefault();
        let location = this.props.location.pathname.split("/")[2]
        let userID = AuthLogin.getProfile().id;
        
        if(!this.state.userIdsOfSponsored.includes(userID)) {
            API.updateEventById(location, {
                isSponsored: true,
                sponsorId: userID
            }).then(res => {
                this.setState({ userIdsOfSponsored: this.state.eventData.sponsors.push(userID) })
                this.setState({ sponsored: true })
                // console.log(res.data)
            }).catch(err => console.log(err))
        }
    }

    render() {
        return (
            <Container>
                <ProfileImage info={this.state.eventData.image}/>
                <ProfileStatusSegment info={this.state.eventData.isSponsored}/>
                <ProfileSegment info={this.state.eventData.name}/>
                <ProfileSegment info={this.state.eventData.date}/>
                <ProfileSegment info={this.state.eventData.location}/>
                <ProfileSegment info={this.state.eventData.shortText}/>
                <ProfileSegment info={this.state.eventData.longText}/>
                <ProfileSegment info={this.state.eventData.category}/>
                <ProfileSegment info={this.state.eventData.image}/>
                {this.state.sponsored ? (
                    <Button disabled>Event Sponsored!</Button>
              ) : (
                <Button id="sponsorBtn" onClick={this.handleBtnClick} >Sponsor this event!</Button>
              )}
                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;