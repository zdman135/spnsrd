import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ProfileSegment from "../components/ProfileSegment";
import ProfileImage from "../components/ProfileImage";

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