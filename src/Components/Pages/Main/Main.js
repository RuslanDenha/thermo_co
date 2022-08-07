import { useEffect, useState } from "react";
import {getRequest} from "../../../helper";
import Table from 'Components/Widgets/Table/Table'

const Main = () => {
    const [sensors, setSensors] = useState([])

    useEffect(() => {
         (async () => {
            try {
                const res = await  getRequest('api/v1/sensors/')
                setSensors(res.data)
            } catch (e) {
                // error handling
            }
        })()
    }, [])

    if (sensors.length === 0) {
        return null
    }

    return (
        <Table rows={sensors} />
    )
}

export default Main