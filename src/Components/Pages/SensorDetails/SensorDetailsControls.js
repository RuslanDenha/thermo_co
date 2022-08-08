import {useCallback, useMemo} from "react";
import Button from "Components/Widgets/Button/Button";
import {deleteRequest, patchRequest, routes} from "api";
import { useNavigate } from "react-router-dom";

const SensorDetailsControls = ({
   id,
   description,
   samplingPeriod,
   isActive,
   setDescriptions,
   setSamplingPeriod,
   setIsActive,
   setErrorMessage
}) => {
    const navigate = useNavigate();

    const onUpdateSensor = useCallback(async () => {
        try {
            const data = {
                description,
                samplingPeriod,
                isActive
            }
            const res = await patchRequest(`${routes.sensorsList}/${id}`, data)

            setDescriptions(res.data.description)
            setSamplingPeriod(res.data.samplingPeriod)
            setIsActive(res.data.isActive)
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, [description, samplingPeriod, isActive]) // eslint-disable-line

    const onDeleteSensor = useCallback(async () => {
        try {
            await deleteRequest(`${routes.sensorsList}/${id}`)
            navigate('/sensors')
        } catch (e) {
            setErrorMessage(e.response.data.detail)
        }
    }, []) // eslint-disable-line

    const isSubmitDisabled = useMemo(() => (
        description.length < 5 || samplingPeriod < 5
    ), [description.length, samplingPeriod])

    return (
        <>
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
        </>
    )
}

export default SensorDetailsControls