import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./PopUp.scss";
import { useTranslation } from "react-i18next";

export default function PopUp() {
  const { t } = useTranslation();
  return (
    <>
      <button className="button-popup">{t("Start a project")}</button>
    </>
  );
}
