import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React, { useEffect, useState } from "react";
import "./PopUp.scss";
import { useTranslation } from "react-i18next";
import FormSent from "../FormSent/FormSent";
import { AnimatePresence, motion } from "framer-motion";
import { anim, PopUpAnim } from "@/helpers/anim";
import { MantineProvider } from "@mantine/core";

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

      <AnimatePresence mode="wait">
        {modal && (
          <motion.div className="modal" {...anim(PopUpAnim.body)}>
            <div className="modal-content">
              <div className="modal-content__title">
                <h3 className="modal-title bold">{t("Leave a")}</h3>
                <h3 className="modal-title bold">{t("request")}</h3>
              </div>
              <MantineProvider>
                <FormSent />
              </MantineProvider>

              <button className="modal-close" onClick={toggleModal}>
                <img src="/images/popup/close.svg" alt="Close" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
