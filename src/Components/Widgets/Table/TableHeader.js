import {toCapitalizedWords} from "helper";

const TableHeader = ({ columns }) => (
    <thead>
        <tr>
            {columns.map(column => (
                <th key={column}>
                    {toCapitalizedWords(column)}
                </th>
            ))}
        </tr>
    </thead>
)

export default TableHeader