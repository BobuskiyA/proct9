import { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import { useInView } from "react-intersection-observer";
import "./FullWidthBg.scss";

const FullWidthBg = (
  ({
    url,
    alt,
    children,
    customClass = "",
    classSection = "",
    type = "image",
    ...otherProps
  }) => {
    const classForBg = ("full_width_image__item " + customClass);

    const classForSection = ("full_width_image " + classSection);

    const { ref, inView } = useInView({
      triggerOnce: true,
      fallbackInView: true,
    });

  return (
    <div className={classForSection} ref={ref} {...otherProps}>
      {inView && (
        type === "video" && typeof url === "string" ? (
          <video
            loop
            muted
            autoPlay
            webkit-playsinline
            playsInline
            className={classForBg}
          >
            <source src={url} />
          </video>
        ) : (
          <img
            src={url}
            alt={alt ? alt : 'background'}
            className={classForBg}
            loading="lazy"
          />
        )
      )}
        {children}
      </div>
    );
  }
);

export default FullWidthBg;
