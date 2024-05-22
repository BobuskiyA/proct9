import gsap from "gsap";

export const presenceAnim = ( logo ) => {
  const tl = gsap.timeline({ delay: .4 });

  tl.to(logo, {
    opacity: 1,
    duration: 0.5,
    filter: "blur(0vw)",
  });

  const isWideScreen = window.innerWidth / window.innerHeight >= 15 / 9;

  tl.to(logo, {
    yPercent: isWideScreen ? -50 : -10,
    scale: 1,
    duration: 1,
    delay: .5,
    ease: 'expo.inOut'
  })

  return tl;
};

export const hideLoader = (loader) => {
  const tl = gsap.timeline({ duration: .5 });

  tl.to(loader, {
    opacity: 0,
    duration: .5
  })

  return tl;
}
