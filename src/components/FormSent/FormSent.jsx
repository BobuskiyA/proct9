import React from "react";
import "./FormSent.scss";
import sendMessage from "../../requests/sendMessage";
import formatFormData from "../../helpers/formatFormData";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";

const schema = yup.object().shape({
  description: yup.string().trim().required("Please enter a description."),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Please enter a valid phone number.")
    .required("Please enter a phone number."),
  category: yup.string().required("Please select a category."),
});

const FormSent = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      description: "",
      phoneNumber: "",
      category: "",
    },
  });

  const onSubmit = async (data) => {
    const formattedData = formatFormData(data);
    try {
      await sendMessage(formattedData);
      console.log("Sent successfully:", formattedData);
      reset();
    } catch (error) {
      console.error("Error sending:", error);
      // Add error handling logic if needed
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-text">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <CustomDropdown
              value={field.value}
              onChange={(value) => field.onChange(value)}
              hasError={!!errors.category}
            />
          )}
        />
        {errors.category && (
          <p className="error-message">{errors.category.message}</p>
        )}
      </label>

      <label className="form-text">
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <input
              className={`form-input form-name ${
                errors.description ? "input-error" : ""
              }`}
              type="text"
              id="description"
              placeholder="Name"
              {...field}
            />
          )}
        />
        {errors.description && (
          <p className="error-message">{errors.description.message}</p>
        )}
      </label>

      <label className="form-text">
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneNumberInput
              className={`form-input form-phone ${
                errors.phoneNumber ? "input-error" : ""
              }`}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="error-message">{errors.phoneNumber.message}</p>
        )}
      </label>

      <button className="form-button" type="submit">
        {t("Send")}
        <img src="/images/popup/union.svg" alt=">" />
      </button>
    </form>
  );
};

export default FormSent;
