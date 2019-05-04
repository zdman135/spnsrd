import React, { Component } from 'react';
import { Container, Image, Segment } from 'semantic-ui-react';
import API from "../utils/API";
import './ProfilePage.css'
// import AuthLogin from "../components/Auth/Login"; TODO use
// import ProfileSegment from "../components/ProfileSegment";
// import ProfileImage from "../components/ProfileImage";

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
            <Container className="profile">
                {/* <Image className="profile-image" src={this.state.userData.image} alt="profileImg"/> */}
                <Image className="profile-image" src="https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg" alt="profileImg"/>
                <Segment>{this.state.userData.name}</Segment>
                <Segment>{this.state.userData.age}</Segment>
                <Segment>{this.state.userData.shortText}</Segment>
            </Container>
        )
    }
}

export default ProfilePage;