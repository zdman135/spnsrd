import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import API from "../utils/API";
// import AuthLogin from "../components/Auth/Login"; TODO use
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";

class ProfilePage extends Component {

    state = {
        userData: {}
    }

    componentDidMount() {
        let splitLoc = this.props.location.pathname.split("/")
        console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        this.getUserById(location)

    }

    getUserById = id => {
        API.getUserById(id).then(res => {
            console.log(res.data)
            this.setState({
                userData: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <ProfileImage info={this.state.userData.image}/>
                <ProfileSegment info={this.state.userData.name}/>
                <ProfileSegment info={this.state.userData.age}/>
                <ProfileSegment info={this.state.userData.shortText}/>
                {/* TODO: Add EventCard Container */}
            </Container>
        )
    }
}

export default ProfilePage;