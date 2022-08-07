import { NavLink } from "react-router-dom";
import css from './button.module.css'

const Button = ({ children, onClick, to, disabled }) => {

    if (to) {
        return (
            <NavLink
                to={to}
                className={css.button}
            >
                {children}
            </NavLink>
        )
    }

    return (
        <button
            onClick={onClick}
            className={css.button}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;