import React, { Component } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/albums";

class TableComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            albumData: []
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.setState({
                albumData: data
            }));
    }

    renderTableDate = () => {
        return this.state.albumData.map((album, index) => {
            return (
                <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.title}</td>
                    <td>{album.userId}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table>
                <th>ID</th>
                <th>ALBUM TITLE</th>
                <th>OWNER USER ID</th>
                {this.renderTableDate()}
            </table>
        )
    }
}
export default TableComponent;