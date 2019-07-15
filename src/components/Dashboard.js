import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn}
    from 'react-bootstrap-table';
import '../css/Dashboard.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function onInsertRow(row) {
    let newRowStr = ''

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n'
    }
    alert('You inserted:\n ' + newRowStr)
}

function onDeleteRow(rowKeys) {
    alert('You deleted: ' + rowKeys)
}

function onSelectRow(row, isSelected, e) {
    if (isSelected) {
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        var apiBaseUrl = "http://localhost:4000/api/";
        fetch(apiBaseUrl + 'dashboard')
            .then(response => response.json())
            .then((responceJson) => {
                return responceJson.results.rows;
            })
            .then(data => this.setState({data: data}))
            .catch(err => console.log(err));
    };

    render() {
        const options = {
            afterInsertRow: onInsertRow,
            afterDeleteRow: onDeleteRow
        };

        // To delete rows you be able to select rows
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: onSelectRow,
            bgColor: 'gold'
        };

        return (
            <div className="container ca-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Users Table</h2>
                    </div>
                </div>
                <div className="row" style={table}>
                    <BootstrapTable data={this.state.data}
                                    insertRow={true}
                                    deleteRow={true}
                                    selectRow={selectRowProp}
                                    options={options}
                    >
                        <TableHeaderColumn isKey dataField='first_name'>
                            <p>User name</p>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='last_name'>
                            <p>User login</p>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='email'>
                            <p>Email</p>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='password'>
                            <p>User password</p>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='created'>
                            <p>Data created</p>
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='modified'>
                            <p>Data modified</p>
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}

const table = {
    margin: "center",
    borderLeft: "2px solid lightgray",
    borderRight: "2px solid lightgray",
    borderTop: "2px solid lightgray",
    borderDown: "2px solid lightgray",
    borderColor: "#cacd58",
    // borderWidth: "5px",
}
// const colA = {
//     borderLeft: "2px solid lightgray",
//     borderRight: "2px solid lightgray"
// }
export default Dashboard;