import React from 'react'
import { Container } from 'semantic-ui-react'

const EventCardContainer = (props) => (
    <Container>
        <a class="ui card" href="/todo/placeholder/">
            <div class="image">
                <img alt="cardImg" src="https://www.aj-chambers.com/front/images/default-user.jpg"/>
            </div>
            <div class="content">
                <a class="header" href="/todo/placeholder/">Event Name</a>
                <div class="meta">
                <span class="location">Event Location</span>
                <br/>
                <span class="date">Event Date</span>
                </div>
                <div class="description">
                    EventShortText
                </div>
            </div>
            <div class="extra content">
                <a href="/todo/placeholder/">
                <i class="money bill alternate outline icon"></i>
                    Unsponsored
                </a>
                <br/>
                <a href="/todo/placeholder/">
                <i class="money bill alternate icon"></i>
                    Sponsored
                </a>
            </div>    
        </a>
    </Container> 
  )
  
  export default EventCardContainer;