import css from './input.module.css'

const Input = ({ type, value, onChange, placeholder }) => {
    
    const handleOnChange = e => onChange(e.target.value)

    return (
        <input
            type={type}
            className={css.baseInput}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
        />
    )
}

export default Input