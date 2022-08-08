import { useSelector } from "react-redux";
import { userSelector } from "Redux/User/UserSlice";
import Button from "../Button/Button";
import css from './protectedRoute.module.css'

const ProtectedRoute = Component => {
    const { username } = useSelector(userSelector);

    if (!username) {
        return (
            <div className={css.wrapper}>
                <p>Hi, log in to use this page!</p>
                <Button to='/login'>
                    Log In
                </Button>
            </div>
        )
    }

    return <Component />
}

export default ProtectedRoute;