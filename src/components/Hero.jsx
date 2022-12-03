import { evelyn } from "../assets";
import styles from "../style";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Unleash the <br className="sm:block hidden" />
          <span className="text-gradient">full potential</span>
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        of your server
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With Evelyn, the posibilities you've always dreamed of are instantly
        unlocked. Completely free of charge.
      </p>

      <Button styles="mt-3" />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={evelyn}
        alt="evelyn"
        className="w-[750px] h-[750px] object-cover"
      />
    </div>
  </section>
);

export default Hero;
