import React, {Component} from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showTableComponent: true,
            showFormComponent: false
        }
    }

    switchShowComponentState = () => {
        this.setState({ 
            showTableComponent: !this.state.showTableComponent,
            showFormComponent: !this.state.showFormComponent
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.switchShowComponentState}>This button changes between table view and form view</button>
                {this.state.showTableComponent &&<TableComponent />}
                {this.state.showFormComponent && <FormComponent />}
            </div>
        )
    }
}
export default ContainerComponent;