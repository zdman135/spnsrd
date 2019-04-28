import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a href="placehodler/url">
    <Icon className="edit icon" />
    More Information
  </a>
)

const EventsCard = (props) => (
  <Card
    header={props.name}
    meta={props.category}
    description={props.shortText}
    extra={extra}
  />
)
export default EventsCard;