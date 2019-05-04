import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CategoryTabs from "../components/CategoryTabs";

class EventsByCategoryPage extends Component {

    render() {
        return (
            <Container>
               <CategoryTabs />
            </Container>
        );
    };
};

export default EventsByCategoryPage;