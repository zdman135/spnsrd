import React, { Component } from 'react';
import API from "../utils/API"
import Login  from "../components/Login/Login";

class LandingPage extends Component {

    state = {
        username: "",
        password: ""
    };

    login = () => {
        API.login({
            email: this.state.username,
            password: this.state.password
          })
            .then(res => {
              console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleLogin = event => {
        event.preventDefault();

        this.login()

        this.setState({
            username: "",
            password: ""
        });
    };
                 
    render() {
        return (
          <Login
            username={this.state.username}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
            handleLogin={this.handleLogin}
            />
        );
    }
}

export default LandingPage;