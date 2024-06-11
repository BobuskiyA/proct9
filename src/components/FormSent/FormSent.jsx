import { useState } from "react";
import { useForm } from "@mantine/form";
import { sendMessage } from "../../requests/telegram";
import {
  Box,
  Button,
  Group,
  TextInput as MantineTextInput,
} from "@mantine/core";
import "./FormSent.scss";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useTranslation } from "react-i18next";

const TextInput = ({ error, className, ...props }) => (
  <MantineTextInput
    {...props}
    classNames={{ input: error ? `input-error ${className}` : className }}
  />
);

export const FormSent = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      select: "",
      phone: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? "Name too short" : null),
      select: (value) => (value ? null : "Please select an option"),
      phone: (value) => {
        if (!value) return "Please enter a phone number";
        if (value.replace(/\D/g, "").length < 12)
          return "Phone number must have at least 12 digits";
        return null;
      },
    },
  });

  const handleSubmit = async ({ name, select, phone }) => {
    try {
      setIsLoading(true);

      const message = `Імʼя: ${name} \n Вибір: ${select} \n Телефон: +${phone}`;
      await sendMessage(message);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <form className="form" onSubmit={form.onSubmit(handleSubmit)}>
        <CustomDropdown
          value={form.values.select}
          onChange={(value) => form.setFieldValue("select", value)}
          hasError={!!form.errors.select}
        />
        <TextInput
          placeholder="Name"
          error={form.errors.name}
          {...form.getInputProps("name")}
          className="form-input form-name"
        />
        <PhoneNumberInput
          value={form.values.phone}
          onChange={(value) => form.setFieldValue("phone", value)}
          onBlur={() => form.validateField("phone")}
          className={`phone-input ${form.errors.phone ? "input-error" : ""}`}
        />
        <Group>
          <Button className="form-button" loading={isLoading} type="submit">
            {t("Send")}
            <img src="/images/popup/union.svg" alt=">" />
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default FormSent;
