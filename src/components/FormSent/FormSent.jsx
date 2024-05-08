import React, { useState } from "react";
import "./FormSent.scss";
import sendMessage from "../../requests/sendMessage";
import formatFormData from "../../helpers/formatFormData";
import { LinkBtn } from "../Button/Button";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useTranslation } from "react-i18next";

const FormSent = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    description: "",
    phoneNumber: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.description.trim()) {
      setError("Please enter something before submitting");
      return;
    }
    const formattedData = formatFormData(formData);
    try {
      await sendMessage(formattedData);
      console.log("Sent successfully:", formattedData);
      setFormData((prevFormData) => ({
        ...prevFormData,
        description: "",
        phoneNumber: "",
        category: "",
      }));
      setError(null);
    } catch (error) {
      console.error("Error sending:", error);
      setError("An error occurred while sending. Try again.");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-text">
          <CustomDropdown formData={formData} setFormData={setFormData} />
        </label>

        <label className="form-text">
          <input
            className="form-input form-name"
            type="text"
            id="name"
            placeholder="Name"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-text">
          <input
            className="form-input form-phone"
            type="tel"
            id="phoneNumber"
            placeholder="Phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button className="form-button" type="submit">
          {t("Send")}
          <img src="/images/popup/union.svg" alt=">" />
        </button>
      </form>
    </>
  );
};

export default FormSent;
