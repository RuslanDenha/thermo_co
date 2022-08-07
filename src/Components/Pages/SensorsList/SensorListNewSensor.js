import {useCallback, useMemo, useState} from "react";
import Switch from "Components/Widgets/Switch/Switch";
import Input from "Components/Widgets/Input/Input";
import Button from "Components/Widgets/Button/Button";
import {postRequest, routes} from "api"
import css from './sensorsList.module.css';

const SensorListNewSensor = ({ maxSensorId, setErrorMessage, loadSensors }) => {
    const [description, setDescriptions] = useState('');
    const [samplingPeriod, setSamplingPeriod] = useState(5);
    const [isActive, setIsActive] = useState(false);

    const onIsActiveSwitch = useCallback(() => {
        setIsActive(isActive => !isActive)
    }, [])

    const onSubmit = async () => {
        try {
            const data = {
                id: maxSensorId + 1,
                description,
                samplingPeriod,
                isActive,
            }
            postRequest(routes.sensorsList, data)

            loadSensors()
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }

    const isSubmitDisabled = useMemo(() => (
        description.length < 5 || samplingPeriod < 5
    ), [description.length, samplingPeriod])

    return (
        <div className={css.newSensorWrapper}>
            <div className={css.newSensorHeader}>Create a new sensor</div>
            <div className={css.newSensorFormWrapper}>
                <div className={css.flexGrow4}>
                    <div className={css.fieldLabel}>Description</div>
                    <Input
                        value={description}
                        onChange={setDescriptions}
                    />
                </div>
                <div className={css.flexGrow2}>
                    <div className={css.fieldLabel}>Sampling Period</div>
                    <Input
                        type='number'
                        value={samplingPeriod}
                        onChange={setSamplingPeriod}
                    />
                </div>
                <div className={css.flexGrow1}>
                    <div className={css.fieldLabel}>Active</div>
                    <div className={css.switchWrapper}>
                        <Switch
                            isChecked={isActive}
                            onChange={onIsActiveSwitch}
                        />
                    </div>
                </div>
                <Button
                    className={css.flexGrow1}
                    onClick={onSubmit}
                    disabled={isSubmitDisabled}
                >
                    Create Sensor
                </Button>
            </div>
        </div>
    )
}

export default SensorListNewSensor;