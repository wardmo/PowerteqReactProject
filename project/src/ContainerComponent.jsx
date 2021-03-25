import React, {Component} from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'Table'
        }
    }


    handleClick(){
        var active = this.state.active;
        var newActive = active == 'Table' ? 'Form' : 'Table';
        this.setState({
            active : newActive
        })
    }

    render() {
        var active = this.state.active;
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}> This button changes between table view and form view</button>
                {active == 'Table' ? (
                    <TableComponent/>
                ) : active == 'Form' ? (
                    <FormComponent />
                ) : null}
                
            </div>
        )
    }
}
export default ContainerComponent;