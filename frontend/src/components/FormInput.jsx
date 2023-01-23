import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, end, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <div className="inputOuter">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === 'confirmPassword' && setFocused(true)
          }
          focused={focused.toString()}
        />
        {end}
      </div>

      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
