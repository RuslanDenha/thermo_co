import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Input from 'Components/Widgets/Input/Input';
import Button from 'Components/Widgets/Button/Button';
import ErrorLine from 'Components/Widgets/ErrorLine/ErrorLine';
import { login, userSelector } from 'Redux/User/UserSlice'

import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isSuccess, isError, errorMessage } = useSelector(userSelector);

    useEffect(() => {
        if (isSuccess) navigate("/")
    }, [isSuccess])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        dispatch(login({ username, password }));
    };

    return (
        <div className='wrapper' >
            <div className='formContent'>
                <h2 className='formHeader'>LOG IN</h2>
                <Input
                    type="text"
                    value={username}
                    onChange={setUsername}
                    placeholder='Username'
                />
                <Input
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder='Password'
                />

                <ErrorLine isActive={isError} >
                    {errorMessage}
                </ErrorLine>

                <Button onClick={onLogin}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default LogIn