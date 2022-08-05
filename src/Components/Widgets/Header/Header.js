import Button from "Components/Widgets/Button/Button";

import './header.css'
import {useSelector} from "react-redux";
import {userSelector} from "../../../Redux/User/UserSlice";
import {useMemo} from "react";

const Header = () => {
    const { username } = useSelector(userSelector);

    const logInArea = useMemo(() => {
        if (username) {
            return (
                <div className='userName'>
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
            <Button to='/'>
                Main
            </Button>
            {logInArea}
        </nav>
    )
}

export default Header;