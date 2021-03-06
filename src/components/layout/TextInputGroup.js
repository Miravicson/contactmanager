import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';


const TextInputGroup = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  label,
  error
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          className={classnames('form-control form-control-lg', {
            'is-invalid': error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="invalid-feedback">
          {error && <p>{error}</p>}
        </div>
      </div>

    </div>
  )
}

TextInputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
  type: "text"
}
export default TextInputGroup;