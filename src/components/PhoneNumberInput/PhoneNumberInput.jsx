import React, { useRef, useEffect } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "./PhoneNumberInput.scss";

const utilsScriptUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";

const PhoneNumberInput = ({ value, onChange, onBlur, className }) => {
  const inputRef = useRef(null);
  const iti = useRef(null);

  useEffect(() => {
    iti.current = intlTelInput(inputRef.current, {
      initialCountry: "ua",
      utilsScript: utilsScriptUrl,
    });

    iti.current.promise.then(() => {
      if (inputRef.current) {
        const initialNumber = `+${
          iti.current.getSelectedCountryData().dialCode || "380"
        }`;
        inputRef.current.value = initialNumber;
        onChange(initialNumber);
      }

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
    const currentInputValue = inputRef.current.value;

    const countryCode = `+${countryData.dialCode || ""}`;
    if (!currentInputValue.startsWith(countryCode)) {
      const newNumber = `${countryCode} ${currentInputValue
        .replace(/^\+?\d*/, "")
        .trim()}`;
      inputRef.current.value = newNumber;
      onChange(newNumber);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };

  const handleBlur = () => {
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
        onBlur={handleBlur}
        placeholder="Phone"
        className={className}
      />
    </div>
  );
};

export default PhoneNumberInput;
