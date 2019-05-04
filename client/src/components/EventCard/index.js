import React from 'react'
import { Container, Card, Image, Icon } from 'semantic-ui-react'

const EventCardContainer = (props) => (
    <Container  className="card" style={{width: 500}}>
        <Card href={`/event/${props.location}`} style = {{backgroundColor: 'purple'}}>
            <Image className="image" alt="cardImg" src="https://www.aj-chambers.com/front/images/default-user.jpg"/>
            <Card.Content>
                <Card.Header style={{color: 'white'}}>{props.name}</Card.Header>
                <Card.Meta style={{color: 'white'}}>
                <span className="category">{props.category}</span>
                </Card.Meta>
                <Card.Description style={{color: 'white'}}>{props.shortText}</Card.Description>
            </Card.Content>
            <Card.Content extra style={{color: 'white'}}>
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
