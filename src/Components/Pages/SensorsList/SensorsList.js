import {useCallback, useEffect, useMemo, useState} from "react";
import { getRequest, routes } from "api";
import Table from 'Components/Widgets/Table/Table'
import ErrorLine from 'Components/Widgets/ErrorLine/ErrorLine';
import SensorListNewSensor from "./SensorListNewSensor";
import css from './sensorsList.module.css'

const SensorsList = () => {
    const [sensors, setSensors] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const loadSensors = useCallback(async () => {
        try {
            const res = await  getRequest(routes.sensorsList)
            setSensors(res.data)
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, [setSensors, setErrorMessage])

    useEffect(() => {
        loadSensors()
    }, []) // eslint-disable-line

    const maxSensorId = useMemo(() => (
        Math.max(...sensors.map(({ id }) => Number(id)))
    ), [sensors])

    if (errorMessage) {
        return  (
            <div className={css.errorWrapper}>
                <ErrorLine isActive >
                    {errorMessage}
                </ErrorLine>
            </div>
        )

    }

    return (
        <>
            <SensorListNewSensor
                maxSensorId={maxSensorId}
                setErrorMessage={setErrorMessage}
                loadSensors={loadSensors}
            />
            <Table rows={sensors} />
        </>
    )
}

export default SensorsList