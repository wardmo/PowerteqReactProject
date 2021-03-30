import React, { Component } from 'react';
import { UserData } from './NetworkCall';

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            message: ""
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        UserData(this.state.username, this.state.email)
            .then((response) => {
                if (response.data) {
                    this.setState({ message: JSON.stringify(response.data) });
                }
                else {
                    this.setState({ message: "No Users found" })
                }


            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        if (this.props.tab)
            return (
                <form onSubmit={this.submit}>
                    <div>
                        <label>Your Username: </label>
                        <input label="Your Username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Your Email: </label>
                        <input label="Your Email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                    <div>
                        {this.state.message}
                    </div>
                </form>
            )
        else return (<div></div>)
    }
}
export default FormComponent;
