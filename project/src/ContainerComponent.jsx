import React from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

class ContainerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            bShowTable:false
        }
    }

    buttonClick(){
        this.setState({bShowTable:!this.state.bShowTable});
    }

    render() {
        return(
            <div>
                <button  onClick={() => this.buttonClick()}>This button changes between table view and form view</button>
             
                {   this.state.bShowTable ?    <TableComponent />:null }

                {   !this.state.bShowTable ?  <FormComponent />:null }
            </div>
        )
    }
}
export default ContainerComponent;