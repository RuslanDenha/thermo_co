import { useMemo } from "react";
import TableHeader from "./TableHeader";
import css from './table.module.css'
import Button from "../Button/Button";

const getCell = (row, column) => {
    const cellData = row[column];

    if (cellData.type === 'button') {
        const { onClick, text } = cellData
        return (
            <Button onClick={onClick}>{text}</Button>
        )
    }

    if (cellData === true) return 'Yes'

    if (cellData === false) return 'No'

    return (
        String(cellData)
    )
}

const Table = ({ rows, header }) => {
    const columns = useMemo(() =>  Object.keys(rows[0]), []); // eslint-disable-line


    return (
        <>
            {header && <h3 className={css.header}>{header}</h3>}
            <table className={css.table}>
                <TableHeader columns={columns} />

                <tbody>
                    {rows.map(row => {
                        const rowId = row.id || row.pid

                        return (
                            <tr key={rowId}>
                                {columns.map(column => (
                                    <td key={`${rowId}${column}`}>
                                        {getCell(row, column)}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

const Wrapper = (props) => {
    if (props.rows.length === 0) {
        return null;
    }

    return (
        <Table {...props} />
    )
}

export default Wrapper