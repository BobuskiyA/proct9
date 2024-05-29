import React, { useRef, useEffect, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "./PhoneNumberInput.scss";

const utilsScriptUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";

const PhoneNumberInput = ({ value, onChange, onBlur, className }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(value);
  const iti = useRef(null);

  useEffect(() => {
    iti.current = intlTelInput(inputRef.current, {
      initialCountry: "ua",
      utilsScript: utilsScriptUrl,
    });

    iti.current.promise.then(() => {
      // Set initial value with country code +380
      if (inputRef.current) {
        const initialNumber = `+${
          iti.current.getSelectedCountryData().dialCode || "380"
        }`;
        setInputValue(initialNumber);
        onChange(initialNumber);
      }

      // Event listener for country change
      inputRef.current.addEventListener("countrychange", handleCountryChange);
    });

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener(
          "countrychange",
          handleCountryChange
        );
      }
      iti.current.destroy();
    };
  }, []);

  const handleCountryChange = () => {
    const countryData = iti.current.getSelectedCountryData();
    const newNumber = `+${countryData.dialCode || ""}`;
    setInputValue(newNumber);
    onChange(newNumber);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onChange(val);
  };

  const handleBlur = () => {
    onBlur();
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div>
      <input
        type="tel"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Phone"
        className={className}
      />
    </div>
  );
};

export default PhoneNumberInput;
