import React, { Component } from 'react'
// import './table.css'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.todoData.map((row, index) => {
        return (
            <tr key={index}>
                <td id="nameTag">{row.name}</td>
                <td>{row.todo}</td>
                <td><button onClick={() => props.removeTodo(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { todoData, removeTodo } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody 
                    todoData={todoData} 
                    removeTodo={removeTodo}    
                />
            </table>
        );
    }
}

export default Table;