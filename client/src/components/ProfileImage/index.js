import React from 'react'
import { Image } from 'semantic-ui-react'

function ProfileImage(props) {
    return (<Image src={props.info} alt="profileImg"/>)
}

export default ProfileImage;