import { useEffect, useState } from "react";
import { getRequest, routes } from "api";
import Table from "Components/Widgets/Table/Table";
import ErrorLine from "Components/Widgets/ErrorLine/ErrorLine";
import css from "./main.module.css";

const Main = () => {
    const [appHealth, setAppHealth] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const appHealth = await getRequest(routes.health)
                setAppHealth([appHealth.data]);

            } catch (e) {
                setErrorMessage(e.response.data.detail)
            }
        })()
    }, []);

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
        <Table
            header='Server Health'
            rows={appHealth}
        />
    )
}

export default Main