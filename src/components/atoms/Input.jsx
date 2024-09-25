import PropTypes from 'prop-types'
import '../../styles/homePage.css'

const Input = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder = ''
}) => {
    
    return (
        <div className='input-wrapper'>
            {label && <label>{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='input-field'
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}

export default Input