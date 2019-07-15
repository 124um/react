import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn}
    from 'react-bootstrap-table';
import '../css/Dashboard.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

const loveMap = {
    Gob: 'Martha',
    Buster: 'Lucile 2',
}


function isExpandableRow(row) {
    return row['name'] in loveMap;
}

function expandRow(row) {
    return (
        <p>{row['name']} loves {loveMap[row['name']]}.</p>
    );
}
function onSelectRow(row, isSelected, e) {
    if (isSelected) {
        alert(`You just selected '${row['name']}'`)
    }
}

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: onSelectRow,
    bgColor: 'gold'
};

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
            expandRowBgColor: 'pink',
            expanding: [1] // initially expanded
        }
        return (
            <div>
                <BootstrapTable data={this.state.data} keyField='true'
                                expandableRow={isExpandableRow}
                                expandComponent={expandRow}
                                expandColumnOptions={
                                    {expandColumnVisible: true}}
                                options={options}>
                    <TableHeaderColumn>
                        <p>User name</p>
                        {this.state.data.map(data => <li>{data.first_name}</li>)}
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <p>User login</p>
                        {this.state.data.map(data => <li>{data.last_name}</li>)}
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <p>Email</p>
                        {this.state.data.map(data => <li>{data.email}</li>)}
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <p>User password</p>
                        {this.state.data.map(data => <li>{data.password}</li>)}
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <p>Data created</p>
                        {this.state.data.map(data => <li>{data.created}</li>)}
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        <p>Data modified</p>
                        {this.state.data.map(data => <li>{data.modified}</li>)}
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

const table = {
    margin: "center",
    borderLeft: "2px solid lightgray",
    borderRight: "2px solid lightgray"
}
// const colA = {
//     borderLeft: "2px solid lightgray",
//     borderRight: "2px solid lightgray"
// }
export default Dashboard;