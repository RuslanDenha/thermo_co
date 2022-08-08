import Button from "Components/Widgets/Button/Button";

import css from './header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logout, userSelector } from "../../../Redux/User/UserSlice";
import {useCallback, useMemo} from "react";

const Header = () => {
    const { username } = useSelector(userSelector);
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        localStorage.setItem("access_token", "")
        dispatch(logout())
    }, []) //eslint-disable-line

    const logInArea = useMemo(() => {
        if (username) {
            return (
                <div className={css.navigationLine} >
                    <Button onClick={onLogOut} >
                        Log Out
                    </Button>
                    <div className={css.userName}>
                        User: {username}
                    </div>
                </div>
            )
        } else {
            return (
                <Button to='/login'>
                    Log In
                </Button>
            )
        }

    }, [username]) // eslint-disable-line

    return (
        <nav>
            <div className={css.navigationLine}>
                <Button to='/'>
                    Main
                </Button>
                <Button to='/sensors'>
                    Sensors
                </Button>
            </div>

            {logInArea}
        </nav>
    )
}

export default Header;