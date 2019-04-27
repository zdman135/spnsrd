import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Container, Header} from "semantic-ui-react";

const extra = (
  <a>
    <Icon name='user' />
    More Information
  </a>
)

const EventsCard = (props) => (
  <Card
    header='Sponsor/Sponsee'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)
export default EventsCard;