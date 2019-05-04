import React, { Component } from 'react';
import { Container, Button, Segment, Image } from 'semantic-ui-react';
import ProfileStatusSegment from "../../components/ProfileStatusSegment";
import AuthLogin from "../../components/Auth/Login";
import API from '../../utils/API';

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

    handleBtnClick = event => {
        let splitLoc = this.props.location.pathname.split("/")
        let location = splitLoc[2]
        let userProfile = AuthLogin.getProfile();
        let userID = userProfile.id //TODO use to $push userID to sponsors array
        API.updateEventById(location, {isSponsored: true}).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                {/* <ProfileImage info={this.state.eventData.image}/> */}
                <ProfileStatusSegment info={this.state.eventData.isSponsored}/>

                <Image className="profile-image" src={this.state.eventData.image} alt="profileImg"/>
                <Segment>{this.state.eventData.name}</Segment>
                <Segment>{this.state.eventData.date}</Segment>
                <Segment>{this.state.eventData.location}</Segment>
                <Segment>{this.state.eventData.shortText}</Segment>
                <Segment>{this.state.eventData.longText}</Segment>
                <Segment>{this.state.eventData.category}</Segment>
                <Segment>{this.state.eventData.image}</Segment>

                <Button id="sponsorBtn" onClick={this.handleBtnClick} >Sponsor this event!</Button>
                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;