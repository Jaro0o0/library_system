export const loginContainer = {
  initial: {
    opacity: 0,
    y:40
  },

  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },

  exit: {
    opacity: 0,
    y: 40,
  },
};



