import React, { Component } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/users";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        }
    }

    handleOnSubmit = (event) => {
        fetch(API_URL + `?username=${this.state.name}&email=${this.state.email}`)
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0) {
                    window.alert(JSON.stringify(data));
                } else {
                    window.alert("No User found");
                }
            });

        event.preventDefault();
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Your Name: </label>
                    <input label="Your Name" type="text" name="name" onChange={this.handleOnChange} />
                </div>
                <div>
                    <label>Your Email: </label>
                    <input label="Your Email" type="text" name="email" onChange={this.handleOnChange} />
                </div>
                <input type="submit" value="Submt" />
            </form>
        )
    }
}
export default FormComponent;