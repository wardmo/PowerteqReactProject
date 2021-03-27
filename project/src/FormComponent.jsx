import React, {Component} from 'react';


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            email:"",
            response:""
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(event){
        if(event)
            event.preventDefault();

        console.log(this.state.name);

        fetch("https://jsonplaceholder.typicode.com/users?username="+this.state.name+"&email="+ this.state.email)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                response: result.length>0?result:"No User Found"
            });
          },
          (error) => {
          }
          )
        
    }

    onChangeInput(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onLoginClick}>
                <div>
                    <label>Your Name: </label>
                    <input label="Your Name" type="text" name="name" onChange={this.onChangeInput} />
                </div>
                <div>
                    <label>Your Email: </label>
                    <input label="Your Email" type="text" name="email" onChange={this.onChangeInput} />
                </div>
                <input type="submit" value="Submit" />
                <div>
                {this.state.response}
                </div>
            </form>
        )
    }
}
export default FormComponent;