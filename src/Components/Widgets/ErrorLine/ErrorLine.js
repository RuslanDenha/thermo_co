import cx from 'classnames'
import css from "./errorLine.module.css"

const ErrorLine = ({ children, isActive }) => (
        <div className={cx(css.errorLine, { [css.isActive]: isActive })}>
            {children}
        </div>
    )


export default ErrorLine;