import { useEffect, useState } from "react";
import {getRequest} from "../../../helper";
import Table from 'Components/Widgets/Table/Table'

const Main = () => {
    const [sensors, setSensors] = useState([])

    useEffect(() => {
        (async () => {
            const res = await  getRequest('api/v1/sensors/')
            setSensors(res.data)
        })()
    }, [])

    if (sensors.length <= 0) {
        return null
    }

    return (
        <div>
            <Table rows={sensors} />
        </div>
    )
}

export default Main