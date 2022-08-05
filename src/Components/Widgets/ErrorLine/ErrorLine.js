import cx from 'classnames'
import "./ErrorLine.css"

const ErrorLine = ({ children, isActive }) => (
        <div className={cx('errorLine', { isActive })}>
            {children}
        </div>
    )


export default ErrorLine;