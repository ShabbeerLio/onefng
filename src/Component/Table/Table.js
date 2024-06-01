import React from 'react'
import "./Table.css"

const Table = ({ item, index }) => {
    return (
        <div className="list-table" key={index}>
            <h5>{item.title}</h5>
            <table>
                <thead>
                    <tr>
                        <th>{item.type}</th>
                        <th>{item.value}</th>
                    </tr>
                </thead>
                <tbody>
                    {item.table.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.type}</td>
                            <td>{detail.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table
