import { useEffect, useState, useCallback } from "react";
import { useParams } from 'react-router-dom'
import { getRequest, routes } from "api";
import Input from "Components/Widgets/Input/Input";
import ErrorLine from "Components/Widgets/ErrorLine/ErrorLine";
import Switch from "Components/Widgets/Switch/Switch";

import css from "./sensorDetails.js.module.css";
import SensorDetailsControls from "./SensorDetailsControls";

const SensorDetails = () => {
    const { id } = useParams();

    const [description, setDescriptions] = useState('');
    const [samplingPeriod, setSamplingPeriod] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [initialErrorMessage, setInitialErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await getRequest(`${routes.sensorsList}/${id}`)

                setDescriptions(res.data.description)
                setSamplingPeriod(res.data.samplingPeriod)
                setIsActive(res.data.isActive)
            } catch (e) {
                setInitialErrorMessage(e.response.data.detail)
            }
        })()
    }, []) // eslint-disable-line

    const onIsActiveSwitch = useCallback(() => {
        setIsActive(isActive => !isActive)
    }, []) // eslint-disable-line

    // in case when page can not load initial state
    if (initialErrorMessage) {
        return  (
            <div className={css.errorWrapper}>
                <ErrorLine isActive >
                    {initialErrorMessage}
                </ErrorLine>
            </div>
        )
    }

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

                <SensorDetailsControls
                    id={id}
                    description={description}
                    samplingPeriod={samplingPeriod}
                    isActive={isActive}
                    setDescriptions={setDescriptions}
                    setSamplingPeriod={setSamplingPeriod}
                    setIsActive={setIsActive}
                    setErrorMessage={setErrorMessage}
                />
            </div>
        </div>
    )
}

export default SensorDetails;