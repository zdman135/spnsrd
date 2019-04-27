import React, { Component } from 'react';
import Register from '../components/Register/'
import API from "../utils/API"

class RegisterPage extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        age: "",
        image: ""
    };

    register = () => {
        API.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            age: this.state.age,
            image: this.state.image
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

    handleRegister = event => {
        event.preventDefault();

        this.register()

        this.setState({
            name: "",
            email: "",
            password: "",
            password2: "",
            age: "",
            image: ""
        });
    };

    render() {
        return (
            <Register
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            password2={this.state.password2}
            age={this.state.age}
            image={this.state.image}
            handleInputChange={this.handleInputChange}
            handleRegister={this.handleRegister}
             />
        );
    }
}

export default RegisterPage;