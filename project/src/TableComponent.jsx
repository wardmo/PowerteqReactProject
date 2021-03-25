import React, {Component} from 'react';


class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    data: json,
                })
            });
    }

    
    render() { 
        var{isLoaded, data} = this.state;

        if (!isLoaded){
            return <div>Loading...</div>
        }
        else{

            return(
            <table>
                <th>HEADER</th>
                <tr>
                    <td>ID</td>
                    <td>ALBUM TITLE</td>
                    <td>OWNER USER ID</td>
                </tr>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{item.id} </td>
                            <td>{item.title} </td>
                            <td>{item.userId} </td>
                        </tr>
                    ))};
                </tbody>
            </table>
            );
        }
    }
}
export default TableComponent;