import React from 'react'
import { Icon } from 'semantic-ui-react'

function ProfileStatusSegment(props) {
    return(
        (props.info) 
           ? <div>
                <span>
                    <Icon name="money bill alternate" />
                    Sponsored
                </span>
            </div>
           : <div>
                <span>
                    <Icon name="money bill alternate outline" />
                    Unsponsored
                </span>
            </div>
    )
}

export default ProfileStatusSegment;