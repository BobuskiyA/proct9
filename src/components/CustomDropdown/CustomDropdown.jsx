import React, { useState, useEffect, useRef } from "react";

import "./CustomDropdown.scss";

const CustomDropdown = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: item,
    }));
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
        value={formData.category}
        onClick={toggleDropdown}
        readOnly
        className="form-input selector"
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
