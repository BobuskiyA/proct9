import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-timezone";

import "./Footer.scss";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "@/i18n";

export const Footer = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

  const [times, setTimes] = useState({
    Kiev: "",
    London: "",
    Washington: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        Kiev: moment().tz("Europe/Kiev").format("HH:mm"),
        London: moment().tz("Europe/London").format("HH:mm"),
        Washington: moment().tz("America/New_York").format("HH:mm"),
      });
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 60000); // оновлення кожну хвилину

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list-time">
          <li className="footer-text">
            {times.Kiev} / {t("Kiev")}
          </li>
          <li className="footer-text">
            {times.London} / {t("London")}
          </li>
          <li className="footer-text">
            {times.Washington} / {t("Washington")}
          </li>
        </ul>
      </div>
      <div className="footer__swipe">2024</div>
    </footer>
  );
};
