import React, { useState, useEffect, useRef } from "react";
import "./CustomDropdown.scss";

const CustomDropdown = ({ value, onChange, hasError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const dropdownItems = ["Landing", "Sales", "Support"];

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Landing"
        value={value}
        onClick={toggleDropdown}
        readOnly
        className={`form-input selector ${hasError ? "input-error" : ""}`}
      />
      <div className="dropdown-arrow">
        <img src="/images/popup/polygon.svg" alt="" />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {dropdownItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
