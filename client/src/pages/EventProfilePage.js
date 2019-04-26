import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";

class EventProfile extends Component {
    render() {
        return (
            <Container>
                <ProfileImage info="https://www.aj-chambers.com/front/images/default-user.jpg"/>
                <ProfileSegment info="Name"/>
                <ProfileSegment info="Date"/>
                {/* TODO: Add Similar EventCard Container */}
            </Container>
        )
    }
}

export default EventProfile;