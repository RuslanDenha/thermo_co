import css from './switch.module.css';

const Switch = ({ isChecked, onChange }) => {
    return (
        <div className={css.wrapper}>
            <input type="checkbox" id="switch" checked={isChecked} onChange={onChange}/>
            <label htmlFor="switch">Toggle</label>
        </div>
    )
}

export default Switch