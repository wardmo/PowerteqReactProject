import React, {Component} from 'react';


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <div>
                    <label>Your Name: </label>
                    <input label="Your Name" type="text" name="name" />
                </div>
                <div>
                    <label>Your Email: </label>
                    <input label="Your Email" type="text" name="email" />
                </div>
                <input type="submit" value="Submt" />
            </form>
        )
    }
}
export default FormComponent;