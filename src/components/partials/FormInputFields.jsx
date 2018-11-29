import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormInputFields =(props)=> {
const { type, label, name, placeholder, value, onChange, error } = props;
    return (
        <div className="form-group">
            <label htmlFor={label}></label>
            <input
                type={type}
                className={classnames("form-control", {"is-invalid": error})}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

FormInputFields.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

FormInputFields.defaultProps = {
    type: 'text',
}

export default FormInputFields;