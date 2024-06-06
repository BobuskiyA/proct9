import { useState } from "react";
import { useForm } from "@mantine/form";
import { sendMessage } from "../../requests/telegram";
import { Box, Button, Group, TextInput } from "@mantine/core";
import "./FormSent.scss";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useTranslation } from "react-i18next";

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
      name: (value) => (value.length < 2 ? "" : null),
      select: (value) => (value ? null : ""),
      phone: (value) => (value ? null : ""),
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
