import './table.css'

const Table = ({ rows }) => {
    const columns = Object.keys(rows[0]);

    return (
        <div className="wrapper">

            <table className="table table-hover table-mc-light-blue">
                <thead>
                <tr>
                    {columns.map(column => <th key={column}>{column}</th>)}
                </tr>
                </thead>
                <tbody>

                {rows.map(row => (
                    <tr key={row.id}>
                        {columns.map(column => <td key={`${row.id}${column}`}>
                            {String(row[column])}
                        </td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table