import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../Logo/Logo";
import linksList from "@/data/links.json";

import "./Header.scss";
import { Nav } from "../Nav/Nav";
import AnchorLink from "../AnchorLink/AnchorLink";
import { Link } from "react-router-dom";

import { LinkBtn } from "../Button/Button";

import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "@/i18n";

export const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");

    if (langParam && ["en", "ua"].includes(langParam)) {
      setLanguage(langParam);
      i18n.changeLanguage(langParam);
    } else {
      const pathSegments = window.location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];

      if (lastSegment === "ua") {
        setLanguage("ua");
        i18n.changeLanguage("ua");
      } else {
        setLanguage("en");
        i18n.changeLanguage("en");
      }
    }
  }, []);

  const updateUrl = (lang) => {
    const baseUrl = window.location.origin;
    const newUrl = `${baseUrl}/${lang}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleLanguageChange = (selectedLanguage) => {
    // Set language and save to local storage
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    updateUrl(selectedLanguage);
  };

  return (
    <header className="header">
      <Logo className="header__logo" />

      <div className="header__wrapper">
        <ul className="header__list-links">
          {linksList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
              <LinkBtn href={currLink.link}>{t(currLink.name)}</LinkBtn>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-trans">
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          {t("EN")}
        </button>
        <span></span>
        <button
          className={language === "ua" ? "active" : ""}
          onClick={() => handleLanguageChange("ua")}
        >
          {t("UA")}
        </button>
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};
