import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { getRequest, patchRequest, deleteRequest, routes } from "api";
import Input from "Components/Widgets/Input/Input";
import ErrorLine from "Components/Widgets/ErrorLine/ErrorLine";
import Button from "Components/Widgets/Button/Button";
import Switch from "Components/Widgets/Switch/Switch";

import css from "./sensorDetails.js.module.css";

const SensorDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [description, setDescriptions] = useState('');
    const [samplingPeriod, setSamplingPeriod] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await getRequest(`${routes.sensorsList}${id}`)

                setDescriptions(res.data.description)
                setSamplingPeriod(res.data.samplingPeriod)
                setIsActive(res.data.isActive)
            } catch (e) {
                setErrorMessage(e.response.data.detail)
            }
        })()
    }, []) // eslint-disable-line

    const onIsActiveSwitch = useCallback(() => {
        setIsActive(isActive => !isActive)
    }, []) // eslint-disable-line

    const onUpdateSensor = useCallback(async () => {
        try {
            const data = {
                description,
                samplingPeriod,
                isActive
            }
            const res = await patchRequest(`${routes.sensorsList}${id}`, data)

            setDescriptions(res.data.description)
            setSamplingPeriod(res.data.samplingPeriod)
            setIsActive(res.data.isActive)
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, [description, samplingPeriod, isActive]) // eslint-disable-line

    const onDeleteSensor = useCallback(async () => {
        try {
            await deleteRequest(`${routes.sensorsList}${id}`)
            navigate('/sensors')
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, []) // eslint-disable-line

    const isSubmitDisabled = useMemo(() => (
        description.length < 5 || samplingPeriod < 5
    ), [description.length, samplingPeriod])

    return (
        <div className={css.wrapper} >
            <div className={css.formContent}>
                <h2 className={css.formHeader}>Sensor {id}</h2>
                <Input
                    type="text"
                    value={description}
                    onChange={setDescriptions}
                    placeholder='description'
                />
                <Input
                    type="number"
                    value={samplingPeriod}
                    onChange={setSamplingPeriod}
                    placeholder='Sampling Period'
                />
                <div className={css.flexGrow1}>
                    <div className={css.fieldLabel}>Active</div>
                    <div className={css.switchWrapper}>
                        <Switch
                            isChecked={isActive}
                            onChange={onIsActiveSwitch}
                        />
                    </div>
                </div>

                <ErrorLine isActive={errorMessage} >
                    {errorMessage}
                </ErrorLine>

                <Button
                    onClick={onUpdateSensor}
                    disabled={isSubmitDisabled}
                >
                    Update
                </Button>

                <Button
                    className='danger'
                    onClick={onDeleteSensor}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default SensorDetails;