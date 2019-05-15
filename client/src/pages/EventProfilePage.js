import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import ProfileImage from "../components/ProfileImage";
import ProfileStatusSegment from "../components/ProfileStatusSegment";
import Auth from "../utils/Auth";
import API from '../utils/API';
import Moment from 'react-moment';
import { Icon, Item } from 'semantic-ui-react'


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

                <Item.Group divided>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{this.state.eventData.name}</Item.Header>
                            <Item.Meta>
                            <Moment format="MM/DD/YYYY">
                                <span className='cinema'>{this.state.eventData.date}</span>
                            </Moment>
                            </Item.Meta>
                            <Item.Meta>
                                <span className='cinema'>{this.state.eventData.location}</span>
                            </Item.Meta>
                            <Item.Description><i>Category: {this.state.eventData.category}</i></Item.Description>

                            <Item.Description>{this.state.eventData.shortText}</Item.Description>
                            <Item.Description>{this.state.eventData.longText}</Item.Description>
                            <Item.Description><ProfileStatusSegment info={this.state.eventData.isSponsored} /></Item.Description>

                            <Item.Extra>
                                {this.state.sponsored ? (
                    <Button floated='right' disabled>Event Sponsored!</Button>
                ) : (
                        this.state.isLoggedIn ? (
                            <Button id="sponsorBtn" floated='right' onClick={this.handleBtnClick} >Sponsor This Event!<Icon name='right chevron' />
                            </Button>
                        ) : (
                                <Button id="sponsorBtn" floated='right' href='/register' >Register to Sponsor Event!<Icon name='right chevron' /> </Button>
                            )

                    )}


                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>

                {/* TODO: Add Similar EventCard Container Using Get Events by Category Route */}
            </Container>
        )
    }
}

export default EventProfile;
