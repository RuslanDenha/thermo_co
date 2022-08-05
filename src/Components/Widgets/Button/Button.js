import './button.css'
import { NavLink } from "react-router-dom";

const Button = ({ children, onClick, to }) => {

    if (to) {
        return (
            <NavLink
                to={to}
                className='button'
            >
                {children}
            </NavLink>
        )
    }

    return (
        <button
            onClick={onClick}
            className='button'
        >
            {children}
        </button>
    )
}

export default Button;