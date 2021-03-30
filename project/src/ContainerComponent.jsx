import React, { Component } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends Component {
    constructor() {
        super();
        this.state = {
            tab: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            tab: !state.tab
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>This button changes between form view and table view</button>
                <TableComponent tab={this.state.tab} />
                <FormComponent tab={!this.state.tab} />
            </div>
        )
    }
}
export default ContainerComponent;
