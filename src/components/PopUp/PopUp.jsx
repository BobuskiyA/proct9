import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React, { useState } from "react";
import "./PopUp.scss";
import { useTranslation } from "react-i18next";
import FormSent from "../FormSent/FormSent";

export default function PopUp() {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="button-popup">
        {t("Start a project")}
      </button>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content__title">
              <h3 className="modal-title bold">{t("Leave a")}</h3>
              <h3 className="modal-title bold">{t("request")}</h3>
            </div>
            <FormSent />
            <button className="modal-close" onClick={toggleModal}>
              <img src="/public/images/popup/close.svg" alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
