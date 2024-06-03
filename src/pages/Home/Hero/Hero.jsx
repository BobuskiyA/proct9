import React from "react";
import "./Hero.scss";
import { LinkBtn } from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">
        <div className="hero-section hero-background">
          <img
            className="hero-image"
            src="/images/hero/image-23.png"
            alt="background"
          />
          <div className="hero__content">
            <div className="hero-socials">
              <LinkBtn
                classes="/"
                href="https://www.instagram.com/wd_kupnevskiy_?igsh=NzU2OHp6Mmw4Z3hq"
              >
                Instagram
              </LinkBtn>
              <LinkBtn classes="/" href="https://www.behance.net/kupnevskiy">
                Behance
              </LinkBtn>
              <LinkBtn classes="/" href="http://t.me/kupnevskiydesign">
                Telegram
              </LinkBtn>
            </div>
            <div className="hero__title">{t("Sites that sell emotion")}</div>
            <img
              className="hero__logo"
              src="/images/hero/hero-logo.png"
              alt="PROCT9"
            />
          </div>
        </div>
      </section>
    </>
  );
}
