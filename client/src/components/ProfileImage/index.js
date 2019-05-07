import React from 'react'
import { Image } from 'semantic-ui-react'

const inlineStyle = {
    width: '300px'
}
function ProfileImage(props) {
    return (<Image src={props.info} style={inlineStyle} alt="profileImg"/>)
}

export default ProfileImage;