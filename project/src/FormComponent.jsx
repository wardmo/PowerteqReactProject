import React from 'react';


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            response: [],
            isLoading: true,
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(event) {
        if (event)
            event.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users?username=" + this.state.name + "&email=" + this.state.email)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        isLoading: false
                    });
                },
                (error) => {
                    this.setState({
                        isLoading: false
                    });
                }
            )

    }

    onChangeInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { response, isLoading } = this.state;

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
                    {
                        isLoading ? null
                            :
                            (response.length > 0)
                                ?
                                response.map(user => {
                                    return <div key={user.id}>
                                        {
                                            JSON.stringify(user)
                                        }
                                    </div>
                                })

                                : "No User Found"
                    }
                </div>

            </form>
        )
    }
}
export default FormComponent;