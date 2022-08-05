import { useState } from "react";
import Input from 'Components/Widgets/Input/Input';
import Button from 'Components/Widgets/Button/Button';
import ErrorLine from 'Components/Widgets/ErrorLine/ErrorLine';
import axios from "axios";
import './LogIn.css'

const logInSuccess = 'logInSuccess'
const logInFail = 'logInFail'

const LogIn = () => {
    const [username, setUsername] = useState('tesp')
    const [password, setPassword] = useState('1234')
    const [logInResult, setLogInResult] = useState()

    const onLogin = async () => {
        try {
            const data = new FormData()
            data.append('username', username)
            data.append('password', password)

            await axios.post('http://127.0.0.1:8000/auth/login', data)

            setLogInResult(logInSuccess)
        } catch (e) {
            setLogInResult(logInFail)
        }
    }

    if (logInResult === logInSuccess) {
        return (
            <div className='wrapper' >
                <div className='formContent'>
                    We Logged you in!
                </div>
            </div>
        )
    }

    return (
        <div className='wrapper' >
            <div className='formContent'>
                <Input type="text" value={username} onChange={setUsername}/>
                <Input type="password" value={password} onChange={setPassword}/>

                <ErrorLine isActive={logInResult === logInFail} >
                    We failed to log you in
                </ErrorLine>

                <Button onClick={onLogin}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default LogIn