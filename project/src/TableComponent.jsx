import React from 'react';


class TableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: true,
            errorMessage: ''
        }

    }

    componentDidMount() {
        this.getDataFromAPI();
    }
    getDataFromAPI() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result,
                        isLoading: false
                    });
                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        errorMessage: error
                    });
                }
            )
    }
    render() {
        const { items, isLoading } = this.state;
        const mystyle = {
            textAlign: "initial"
        };
        if (isLoading) {
            return (
                <div>Please Wait...</div>
            )
        } else {
            return (
                <>
                    <div style={mystyle} id="head">HEADER</div>
                    {
                        items.length > 0
                            ? <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ALBUM TITLE</th>
                                        <th>OWNER USER ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.userId}</td>
                                                <td>{item.title}</td>
                                                <td>{item.id}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            : <div>No results</div>
                    }
                </>
            )
        }
    }
}
export default TableComponent;