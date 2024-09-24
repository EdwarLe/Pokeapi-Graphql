import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default Button