import { NavLink } from "react-router-dom";
import css from './button.module.css'

const Button = ({ className, children, onClick, to, disabled }) => {

    if (to) {
        return (
            <NavLink
                to={to}
                className={`${css.button} ${css[className]}`}
            >
                {children}
            </NavLink>
        )
    }

    return (
        <button
            onClick={onClick}
            className={`${css.button} ${css[className]}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;