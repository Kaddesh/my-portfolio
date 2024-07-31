import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const AnimateInView = ({
  children,
  initial = { opacity: 0, scale: 0.95 },
  animate = { opacity: 1, scale: 1 },
  transition = { duration: 1.5, ease: 'easeOut' },
  hoverScale = 1.05,
  opa = 1,
  scala = 1,
  scrollTrigger = false,
  scrollTransform = [0, 1000], 
  transformRange = [0, 100], 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  

  const { scrollY } = useScroll();
  const scrollYTransform = useTransform(scrollY, scrollTransform, transformRange);

  React.useEffect(() => {
    if (inView && !scrollTrigger) {
      controls.start(animate);
    } else if (scrollTrigger) {
      controls.start({ opacity: opa, scale: scala, y: scrollYTransform });
    } else {
      controls.start(initial);
    }
  }, [controls, inView, initial, animate, scrollTrigger, scrollYTransform, opa, scala]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
      whileHover={{ scale: hoverScale }}
      whileInView={{ opacity: opa, scale: scala }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
