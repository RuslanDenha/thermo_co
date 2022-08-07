import TableHeader from "./TableHeader";
import css from './table.module.css'
import { useMemo } from "react";

const Table = ({ rows }) => {
    const columns = useMemo(() =>  Object.keys(rows[0]), []); // eslint-disable-line

    return (
        <div className={css.wrapper}>
            <table className={css.table}>
                <TableHeader columns={columns} />

                <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                            {columns.map(column => (
                                <td key={`${row.id}${column}`}>
                                    {String(row[column])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table