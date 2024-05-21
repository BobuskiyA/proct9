import React, { useRef, useEffect, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import InputMask from "react-input-mask";

import "./PhoneNumberInput.scss";

const utilsScriptUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";

const PhoneNumberInput = ({ value, onChange, onBlur, className }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value);
  let iti = useRef(null);

  useEffect(() => {
    iti.current = intlTelInput(inputRef.current, {
      initialCountry: "ua",
      utilsScript: utilsScriptUrl,
    });

    return () => {
      iti.current.destroy();
    };
  }, []);

  const handleInputChange = (val) => {
    setInputValue(val);
    onChange(val); // Передаємо значення назад до форми
  };

  const handleBlur = () => {
    onBlur(); // Викликаємо onBlur для форми
  };

  useEffect(() => {
    setInputValue(value); // Синхронізуємо локальний стан з зовнішнім значенням
  }, [value]);

  return (
    <div>
      <InputMask
        mask="+999999999999"
        maskChar=""
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onBlur={handleBlur}
        placeholder="Phone"
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="tel"
            ref={inputRef}
            className={className}
          />
        )}
      </InputMask>
    </div>
  );
};

export default PhoneNumberInput;
