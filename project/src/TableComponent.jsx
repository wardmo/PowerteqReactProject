import React, { Component } from 'react';
import { getAlbumData } from './NetworkCall';


class TableComponent extends Component {
    constructor() {
        super();
        this.state = {
            albumsData: []
        }
    }

    componentDidMount() {

        getAlbumData().then((response) => {
            this.setState({
                albumsData: response.data,
            });
        });
    }

    render() {
        if (this.props.tab)
            return (
                <table>
                    <th>HEADER</th>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Owner User Id</td>
                            <td>Album Title</td>
                        </tr>
                        {this.state.albumsData.map(data => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.userId}</td>
                                    <td>{data.title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        else return (<div></div>)
    }
}
export default TableComponent;
