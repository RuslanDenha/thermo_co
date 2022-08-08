import {useCallback, useEffect, useMemo, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getRequest, routes } from "api";
import Table from 'Components/Widgets/Table/Table'
import ErrorLine from 'Components/Widgets/ErrorLine/ErrorLine';
import SensorsListNewSensor from "./SensorsListNewSensor";
import css from './sensorsList.module.css'

const SensorsList = () => {
    const navigate = useNavigate();

    const [sensors, setSensors] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const loadSensors = useCallback(async () => {
        try {
            const res = await  getRequest(routes.sensorsList)
            const formatted = res.data.map((item) => ({
                ...item,
                details: {
                    type: 'button',
                    text: 'details',
                    onClick: () => {
                        navigate(`/sensors/${item.id}`)
                    }
                }
            }))
            setSensors(formatted)
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, []) // eslint-disable-line

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
            <SensorsListNewSensor
                maxSensorId={maxSensorId}
                setErrorMessage={setErrorMessage}
                loadSensors={loadSensors}
            />
            <Table
                header='Available Sensors'
                rows={sensors}
            />
        </>
    )
}

export default SensorsList