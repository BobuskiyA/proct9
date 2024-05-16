export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const Menu = {
  menuOpen: {
    initial: {
      height: 0,
      left: 0,
      right: 0,
    },
    enter: {
      height: "100vh",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  menuContainer: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  },
};

export const blogAnim = {
  Presence: {
    initial: {
      opacity: 0,
      filter: "blur(1vw)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0vw)",
    },
    exit: {
      opacity: 0,
      filter: "blur(1vw)",
    },
  },
};

export const PopUpAnim = {
  body: {
    initial: {
      scale: 0.95,
      filter: "blur(1vw)",
      opacity: 0,
    },
    animate: {
      scale: 1,
      filter: "blur(0vw)",
      opacity: 1,
      transition: {
        duration: .7,
        ease: [.75,.18,.31,.86]
      }
    },
    exit: {
      scale: 1.01,
      filter: "blur(1vw)",
      opacity: 0,
    }
  }
}
