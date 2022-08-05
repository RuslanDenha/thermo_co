import './input.css'

const Input = ({ type, value, onChange }) => {
    
    const handleOnChange = e => onChange(e.target.value)

    return (
        <input
            type={type}
            value={value}
            onChange={handleOnChange}
        />
    )
}

export default Input