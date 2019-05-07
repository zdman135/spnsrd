import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import Login from "../components/Login";
import Auth from "../utils/Auth";

class LoginPage extends Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false
    };

    componentDidMount() {
        if (Auth.loggedIn()) {
            this.setState({ isLoggedIn: true });
        }
    };

    login = () => {
        API.login({
            email: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data)
                Auth.setToken(res.data.token);
                this.setState({ isLoggedIn: true })
                window.location.reload(); 
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
            (Auth.loggedIn())
                ? <Redirect to="/unsponsored" />
                : <Login
                    username={this.state.username}
                    password={this.state.password}
                    handleInputChange={this.handleInputChange}
                    handleLogin={this.handleLogin}
                />
        );
    }
}

export default LoginPage;