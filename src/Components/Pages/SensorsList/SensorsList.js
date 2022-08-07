import { useEffect, useState } from "react";
import { getRequest } from "helper";
import Table from 'Components/Widgets/Table/Table'
import ErrorLine from 'Components/Widgets/ErrorLine/ErrorLine';
import css from './sensorsList.module.css'

const SensorsList = () => {
    const [sensors, setSensors] = useState([])
    const [errorMessage, setErrorMessage] = useState([])

    useEffect(() => {
         (async () => {
            try {
                const res = await  getRequest('api/v1/sensors/')
                setSensors(res.data)
            } catch (e) {
                setErrorMessage(e.response.data.detail)
            }
        })()
    }, [])

    if (errorMessage) {
        return  (
            <div className={css.errorWrapper}>
                <ErrorLine isActive >
                    {errorMessage}
                </ErrorLine>
            </div>
        )

    }

    if (sensors.length === 0) {
        return null
    }

    return (
        <Table rows={sensors} />
    )
}

export default SensorsList