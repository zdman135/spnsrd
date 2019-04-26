import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    More Details
  </a>
)

const CardExampleCardProps = () => (
  <Card
    header='Sponsor/Sponsee Name'
    meta='Sponsor/Sponsee'
    description='Once we get our data working, this is where the data on the events should populate.'
    extra={extra}
  />
)

export default CardExampleCardProps
// const EventCardContainer = (props) => ( 
//     <Container>
//         <a class="ui card" href="#">
//             <div class="image">
//                 <img alt="cardImg" src="https://www.aj-chambers.com/front/images/default-user.jpg"/>
//             </div>
//             <div class="content">
//                 <a class="header">Event Name</a>
//                 <div class="meta">
//                 <span class="location">Event Location</span>
//                 <br/>
//                 <span class="date">Event Date</span>
//                 </div>
//                 <div class="description">
//                     EventShortText
//                 </div>
//             </div>
//             <div class="extra content">
//                 <a>
//                 <i class="money bill alternate outline icon"></i>
//                     Unsponsored
//                 </a>
//                 <br/>
//                 <a>
//                 <i class="money bill alternate icon"></i>
//                     Sponsored
//                 </a>
//             </div>    
//         </a>


//     </Container> 
//   )
  
  export default EventCardContainer;