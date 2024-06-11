import React, { useRef, useEffect, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "./PhoneNumberInput.scss";

const utilsScriptUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";

const PhoneNumberInput = ({ value, onChange, onBlur, className }) => {
  const inputRef = useRef(null);
  const iti = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    iti.current = intlTelInput(inputRef.current, {
      initialCountry: "ua",
      utilsScript: utilsScriptUrl,
    });

    iti.current.promise.then(() => {
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

  useEffect(() => {
    if (inputRef.current && value !== inputRef.current.value) {
      inputRef.current.value = value;
    }
  }, [value]);

  const handleCountryChange = () => {
    const countryData = iti.current.getSelectedCountryData();
    const countryCode = `+${countryData.dialCode || ""}`;
    if (hasFocus && !inputRef.current.value.startsWith(countryCode)) {
      inputRef.current.value = countryCode;
      onChange(countryCode);
    }
  };

  const handleInputChange = (e) => {
    // Ensure only digits are entered
    const inputValue = e.target.value.replace(/\D/g, "");
    // Limit to max 15 digits
    const maxLength = 15;
    const trimmedValue = inputValue.slice(0, maxLength);
    inputRef.current.value = trimmedValue;
    onChange(trimmedValue);
  };

  const handleFocus = () => {
    setHasFocus(true);
    const countryData = iti.current.getSelectedCountryData();
    const countryCode = `+${countryData.dialCode || ""}`;
    if (!inputRef.current.value.startsWith(countryCode)) {
      inputRef.current.value = countryCode;
      onChange(countryCode);
    }
  };

  const handleBlur = () => {
    setHasFocus(false);
    if (iti.current.isValidNumber()) {
      const fullNumber = iti.current.getNumber();
      onChange(fullNumber);
    } else {
      onChange(inputRef.current.value);
    }
    onBlur();
  };

  return (
    <div>
      <input
        type="tel"
        ref={inputRef}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Phone"
        className={className}
        maxLength={15} // Maximum length of 15 characters
      />
    </div>
  );
};

export default PhoneNumberInput;
