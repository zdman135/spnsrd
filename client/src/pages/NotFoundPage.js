import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
// import ProfileSegment from "../components/ProfileSegment"; TODO: not being used
// import ProfileImage from "../components/ProfileImage"; TODO: not being used

class NotFoundPage extends Component {
    render() {
        return (
            <Container>
                <p>404 Page Not Found</p>
            </Container>
        )
    }
}

export default NotFoundPage;