import React, {Component} from 'react';


class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() { 
        return(
        <table>
            <th>HEADER</th>
            <tbody>
                <tr> Row 1
                    <td>value 1</td>
                    <td>value 2</td>
                    <td>value 3</td>
                </tr>
                <tr>
                    Row 2
                    <td>value 4</td>
                    <td>value 5</td>
                    <td>value 6</td>
                </tr>
            </tbody>
        </table>
        )
    }
}
export default TableComponent;