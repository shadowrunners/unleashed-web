import { useState, useEffect, useRef } from "react";
import Counter from '../components/Counter'
import { motion } from "framer-motion";
import { get } from 'superagent';
import styles from "../style";

const Stats = () => {
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

    // useEffect(() => {
    //    get('https://api.statcord.com/v3/832289090128969787')
    //        .then(response => {
    //            const json = JSON.parse(response.text);
    //                setServerData(json.data[0]);
    //        })
    //        .catch(error => {
    //            console.error(error);
    //        });
    // }, []);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className="flex justify-center items-center w-full mb-6">
        <motion.h4
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white`}
        >
          We're currently serving
        </motion.h4>

        <div className="flex justify-start items-center flex-row m-3">
          <motion.h4
            ref={ref}
            className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] text-gradient leading-[43px] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.0 }}
          >
           <Counter value={32} />
          </motion.h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-2">
            Servers
          </p>
        </div>

        <div className="flex justify-start items-center flex-row ml-3">
        <motion.h4
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.0 }}
            className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white`}
        >
          and
        </motion.h4>
        </div>

        <div className="flex justify-start items-center flex-row m-3">
          <motion.h4
            ref={ref}
            className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] text-gradient leading-[43px] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.0 }}
          >
           <Counter value={1802} />
          </motion.h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-2">
            Users
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;