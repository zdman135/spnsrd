import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";
import ProfileStatusSegment from "../components/ProfileStatusSegment";
import Auth from "../utils/Auth";
import API from '../utils/API';

let userID;
class EventProfile extends Component {

    state = {
        eventData: {},
        userIdsOfSponsored: [],
        sponsored: false,
        isLoggedIn: false
    }

    componentDidMount() {
        let splitLoc = this.props.location.pathname.split("/")
        // console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        this.getEventById(location)

        if (Auth.loggedIn()) {
            this.setState({ isLoggedIn: true });
        }
    }

    getEventById = id => {
        API.getEventById(id).then(res => {
            this.setState({ eventData: res.data })
            this.setState({ userIdsOfSponsored: res.data.sponsors })
            userID = Auth.getProfile().id;
            if (this.state.userIdsOfSponsored.includes(userID)) {
                this.setState({ sponsored: true })
            }
            // console.log(this.state)

        }).catch(err => console.log(err));
    }

    handleBtnClick = event => {
        event.preventDefault();
        let location = this.props.location.pathname.split("/")[2]

        if (!this.state.userIdsOfSponsored.includes(userID)) {
            API.updateEventById(location, {
                isSponsored: true,
                sponsorId: userID
            }).then(res => {
                this.setState({ userIdsOfSponsored: this.state.eventData.sponsors.push(userID) })
                this.setState({ sponsored: true })
                window.location.reload();
                // console.log(res.data)
            }).catch(err => console.log(err))
        }
    }

    render() {
        const inlineStyle = {
            marginTop: '25px'
        }
        return (
            <Container style={inlineStyle}>
                <ProfileImage info={this.state.eventData.image} />
                <ProfileStatusSegment info={this.state.eventData.isSponsored} />
                <ProfileSegment info={this.state.eventData.name} />
                <ProfileSegment info={this.state.eventData.date} />
                <ProfileSegment info={this.state.eventData.location} />
                <ProfileSegment info={this.state.eventData.shortText} />
                <ProfileSegment info={this.state.eventData.longText} />
                <ProfileSegment info={this.state.eventData.category} />
                <ProfileSegment info={this.state.eventData.image} />
                {this.state.sponsored ? (
                    <Button disabled>Event Sponsored!</Button>
                ) : (
                        this.state.isLoggedIn ? (
                            <Button id="sponsorBtn" onClick={this.handleBtnClick} >Sponsor This Event!</Button>
                        ) : (
                                <Button id="sponsorBtn" href='/register' >Register to Sponsor Event!</Button>
                            )

                    )}
                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;