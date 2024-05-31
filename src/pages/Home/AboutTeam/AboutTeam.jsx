import React from "react";
import "./About-team.scss";
import { useTranslation } from "react-i18next";

export default function AboutTeam() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about-team" className="about-team">
        <div className="about-team-section">
          <img
            className="about-team-image"
            src="/images/about-team/image-21.png"
            alt="background"
          />
          <div className="about-team__content">
            <h2 className="about-team__title">{t("About our team")}</h2>
            <div className="about-team__text">
              {t(
                "Our team brings together web development and marketing professionals working to create innovative websites. We have UX/UI design experts, programmers, clean and know-how code wizards, experienced copywriters and talented motion designers. We focus on comprehensive website development with marketing in mind, ensuring not only an attractive user interface and functionality, but also effective online promotion to achieve the client's business goals."
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
