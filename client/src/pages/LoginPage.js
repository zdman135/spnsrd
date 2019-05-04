import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import Login from "../components/Login";
import AuthLogin from "../components/Auth/Login";

class LoginPage extends Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false
    };

    componentDidMount() {
        if (AuthLogin.loggedIn()) {
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
                AuthLogin.setToken(res.data.token);
                this.setState({ isLoggedIn: true })
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
            (AuthLogin.loggedIn())
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