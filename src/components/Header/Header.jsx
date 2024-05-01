import React from "react";
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
  const [language, setLanguage] = useLocalStorage("language", "ua");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);

    const currentUrl = window.location.href;
    const newUrl = new URL(currentUrl);
    newUrl.searchParams.set("lang", selectedLanguage);
    window.history.replaceState(null, "", newUrl.toString());
  };

  return (
    <header className="header">
      <Logo className="header__logo" />

      <div className="header__wrapper">
        <ul className="header__list-links">
          {linksList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
              <LinkBtn href={currLink.link}>{currLink.name}</LinkBtn>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-trans">
        <button
          className={i18n.language === "en" ? "active" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          {t("EN")}
        </button>
        <span></span>
        <button
          className={i18n.language === "ua" ? "active" : ""}
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
А;
