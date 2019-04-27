import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";
import API from '../utils/API';

class EventProfile extends Component {
    

    componentDidMount() {
        let splitLoc = this.props.location.pathname.split("/")
        console.log(splitLoc[2] , "location")
        let location = splitLoc[2]
        this.setState({
            _id: location
        })
        // this.getEventById()

    }

    state = {
        _id: ""
    }

    getEventById = _=> {
        API.getEventById({
             _id: this.state.id
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                <ProfileImage info="https://www.aj-chambers.com/front/images/default-user.jpg"/>
                <ProfileSegment info="Sponsorship Status"/>
                <ProfileSegment info="Name"/>
                <ProfileSegment info="Date"/>
                <ProfileSegment info="Location"/>
                <ProfileSegment info="ShortText"/>
                <ProfileSegment info="LongText"/>
                <ProfileSegment info="Category"/>
                <ProfileSegment info="CreatedBy User"/>
                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;