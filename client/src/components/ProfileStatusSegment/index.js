import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

function ProfileStatusSegment(props) {
    return(
        (props.info) 
           ? <Segment>
                <span>
                    <Icon name="money bill alternate" />
                    Sponsored
                </span>
            </Segment>
           : <Segment>
                <span>
                    <Icon name="money bill alternate outline" />
                    Unsponsored
                </span>
            </Segment>
    )
}

export default ProfileStatusSegment;