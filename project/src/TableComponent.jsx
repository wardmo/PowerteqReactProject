import React, {Component} from 'react';


class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            items:[]
        }
        this.getDataFromAPI();
    }
    getDataFromAPI(){
        fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        )
    }
    render() { 
        
        return(
        <table>
            <th>HEADER</th>
            <tbody>
            <th>ID</th>
            <th>ALBUM TITLE</th>  
            <th>OWNER USER ID</th>
            {
                  
            this.state.items.map(item => (

                <tr>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.id}</td>
                </tr>
          ))}
            </tbody>
        </table>
        )
    }
}
export default TableComponent;