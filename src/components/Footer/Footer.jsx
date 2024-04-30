import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "@/i18n";

export const Footer = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list-time">
          <li className="footer-text">2024</li>
          <li className="footer-text">20:45 / Kiev</li>
          <li className="footer-text">20:45 / Paris</li>
        </ul>
      </div>
      <button className="footer__swipe">Swipe</button>
    </footer>
  );
};
