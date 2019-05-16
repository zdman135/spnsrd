import React, { Component } from 'react';
import { Tab, Container } from 'semantic-ui-react';
import CultureCatTab from "../CultureCatTab";
import MusicCatTab from "../MusicCatTab";
import SportsCatTab from "../SportsCatTab";
import FDCatTab from "../FDCatTab";
import EduCatTab from "../EduCatTab";
import OtherCatTab from "../OtherCatTab";

const panes = [
    { menuItem: "Music", render: () => <Tab.Pane><MusicCatTab /></Tab.Pane> },
    { menuItem: "Sports", render: () => <Tab.Pane><SportsCatTab /></Tab.Pane> },
    { menuItem: "Food and Drink", render: () => <Tab.Pane><FDCatTab /></Tab.Pane> },
    { menuItem: "Education", render: () => <Tab.Pane><EduCatTab /></Tab.Pane> },
    { menuItem: "Culture", render: () => <Tab.Pane><CultureCatTab /></Tab.Pane> },
    { menuItem: "Other", render: () => <Tab.Pane><OtherCatTab /></Tab.Pane> }
]
class CategoryTabs extends Component { 

    state = {
        activeIndex: 1
    };

    handleTabChange = (event,  paneData ) => { 
        this.setState({ activeIndex: paneData.activeIndex })
        console.log(paneData.activeIndex , "this.state.activeIndex")
    };

    render() {
        return( 
            <Container className="three column container">
            <Tab panes={panes} activeIndex={this.state.activeIndex} onTabChange={this.handleTabChange} /> 
            </Container>
        )
    };

}

export default CategoryTabs;

