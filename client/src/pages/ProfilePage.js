import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import API from "../utils/API";
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";

class ProfilePage extends Component {
    render() {
        return (
            <Container>
                <ProfileImage info="https://www.aj-chambers.com/front/images/default-user.jpg"/>
                <ProfileSegment info="Name"/>
                <ProfileSegment info="Age"/>
                <ProfileSegment info="User Biography"/>
                {/* TODO: Add EventCard Container */}
            </Container>
        )
    }
}

export default ProfilePage;