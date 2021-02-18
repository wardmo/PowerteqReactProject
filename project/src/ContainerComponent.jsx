import React, {Component} from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <button>This button changes between table view and form view</button>
                <TableComponent />
                <FormComponent />
            </div>
        )
    }
}
export default ContainerComponent;