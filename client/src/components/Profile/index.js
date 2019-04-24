import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

function Profile() {
    return (
    <div class="ui fluid container">
        <Image src="https://www.aj-chambers.com/front/images/default-user.jpg" alt="profileImg"/>
        <Segment>Name</Segment>
        <Segment>Age</Segment>
        <Segment>User Biography</Segment>
    </div>
    )
}

export default Profile;