import Button from "Components/Widgets/Button/Button";

import css from './header.module.css'
import {useSelector} from "react-redux";
import {userSelector} from "../../../Redux/User/UserSlice";
import {useMemo} from "react";

const Header = () => {
    const { username } = useSelector(userSelector);

    const logInArea = useMemo(() => {
        if (username) {
            return (
                <div className={css.userName}>
                    User: {username}
                </div>
            )
        } else {
            return (
                <Button to='/login'>
                    Log In
                </Button>
            )
        }

    }, [username])

    return (
        <nav>
            <div>
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