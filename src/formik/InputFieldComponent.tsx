import React from 'react';
import PropTypes, {InferProps}  from "prop-types";

const InputField = ({name, onChange, type, ...props}: InferProps<typeof InputField.propTypes>) => {
    return (
        <input name={name} onInput={onChange} type={type} {...props}/>
    )
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.oneOfType([
        PropTypes.func.isRequired
    ]).isRequired,
    type: PropTypes.string.isRequired,
};

InputField.defaultProps = {
    name: '',
    type: 'text'
};

export default InputField;
