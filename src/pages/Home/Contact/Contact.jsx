import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact">
        <FullWidthBg
          classSection="contact-section"
          url="/public/images/contact/contact.jpg"
        >
          <div className="contact__content">
            <div className="contact-socials">
              <a className="contact-social instagram" href="#">
                Instagram
              </a>
              <a className="contact-social behance" href="#">
                Behance
              </a>
              <a className="contact-social dribbble" href="#">
                Dribbble
              </a>
            </div>
          </div>
        </FullWidthBg>
      </section>
    </>
  );
}
