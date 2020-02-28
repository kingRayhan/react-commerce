import React from 'react'
import './form-input.style.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />

      {label && (
        <div
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </div>
      )}
    </div>
  )
}

export default FormInput
