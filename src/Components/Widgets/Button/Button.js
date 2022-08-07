import css from './button.module.css'
import { NavLink } from "react-router-dom";

const Button = ({ children, onClick, to }) => {

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
        >
            {children}
        </button>
    )
}

export default Button;