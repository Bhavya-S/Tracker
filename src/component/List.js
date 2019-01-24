import React from 'react';
import Button from './Button';

const List = ({entries}) => {
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Ticket No.</th>
                <th>Assigned Time</th>
                <th>Delete</th>
            </tr>
            {entries && entries.map(entry => 
                <tr>
                    <td>{entry.name}</td>
                    <td>{entry.ticketNo}</td>
                    <td>{entry.assignedTime}</td>
                    <td><Button btnName='X' clickHandler /></td>
                </tr>)}
        </table>
    )
}

export default List;