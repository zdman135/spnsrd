import React from 'react'
import { Container, Card, Image, Icon } from 'semantic-ui-react'

const EventCardContainer = (props) => (
    <Container className="column">
        <Card href={`/event/${props.location}`}>
            <Image alt="cardImg" src={props.image}/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                <span className="category">{props.category}</span>
                </Card.Meta>
                <Card.Description>{props.shortText}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.isSponsored === true ? 
                <span>
                <Icon name="money bill alternate" />
                Sponsored
                </span>
                :<span>
                <Icon name="money bill alternate outline" />
                Unsponsored
                </span>}
               
            </Card.Content>
        </Card>
    </Container> 
  )
  
  export default EventCardContainer;
