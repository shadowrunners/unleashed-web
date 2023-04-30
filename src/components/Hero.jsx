import { AnimatePresence, motion } from 'framer-motion';
import { background } from '../assets/index'
import styles from "../style";
import Button from "./Button";
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
  <section id="home" className={`flex md:flex-row flex-col h-screen`}>
    <img src={background} className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
    <div
      className={`flex-1 ${styles.flexCenter} xl:mb-[140px] flex-col xl:px-0 sm:px-16 px-6 relative`}
    >
        <AnimatePresence>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.0 }}
            className={`${styles.heading2} text-center`}
          >
            Unleash the <span className='text-gradient'>full potential</span> of your server.
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.3 }}
            className={`${styles.paragraph} max-w-[470px] mt-5`}
          >
            With Evelyn, the possibilities you've always dreamed of are instantly unlocked. Completely free of charge.
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.6 }}
          >
            <Button styles="mt-10" />
          </motion.div>
        </AnimatePresence>
    </div>
    <div className="absolute bottom-0 h-[270px] w-full xl:left-[0px] bg-gradient-to-b from-transparent to-black"></div>
  </section>
  )
}

export default Hero;
