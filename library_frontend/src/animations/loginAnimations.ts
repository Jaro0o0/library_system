export const loginAnimations = {
  
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
         opacity: 0,
         y:0,
        transition:{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            when: 'beforeChildren',
            staggerChildren: 0.12,
        }

    }
}



export const item = {
  initial: {
    opacity: 0,
    y: 20,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};