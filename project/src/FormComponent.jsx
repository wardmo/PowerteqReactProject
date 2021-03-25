import React, {Component} from 'react';


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userObject : ""
        }
    }

    handleSubmit(event){
        event.preventDefault();
        var userName = event.target.name;
        var email = event.target.email;
        var APIString = `https://jsonplaceholder.typicode.com/users?username=${userName}&email=${email}`
        fetch(APIString)
        .then(res => res.json())
        .then(json =>{
            var responce = json.length > 0 ? JSON.stringify(json) : "No user found" 
            this.setState({
                userObject:responce
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}> 
                <div>
                    <label>Your Username: </label>
                    <input label="Your Name" type="text" name="name" />
                </div>
                <div>
                    <label>Your Email: </label>
                    <input label="Your Email" type="text" name="email" />
                </div>
                <input type="submit" value="Submt" />
                {this.state.user != "" ? (
                    <div>{this.state.userObject}</div>
                ) : null}
            </form>
           
        )
    }
}
export default FormComponent;