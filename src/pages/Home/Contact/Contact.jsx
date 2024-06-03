import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact">
        <FullWidthBg classSection="contact-section">
          <img
            className="contact-image"
            src="/images/contact/image-22.png"
            alt="background"
          />

          <div className="contact__content">
            <div className="contact-socials">
              <a
                className="contact-social instagram"
                href="https://www.instagram.com/wd_kupnevskiy_?igsh=NzU2OHp6Mmw4Z3hq"
              >
                Instagram
              </a>
              <a
                className="contact-social behance"
                href="https://www.behance.net/kupnevskiy"
              >
                Behance
              </a>
              <a
                className="contact-social Telegram"
                href="http://t.me/kupnevskiydesign"
              >
                Telegram
              </a>
            </div>
          </div>
        </FullWidthBg>
      </section>
    </>
  );
}
