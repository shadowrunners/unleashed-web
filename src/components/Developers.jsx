import styles from "../style";

const Developers = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        And it's all developed
        <br className="sm:block hidden" /> by one single person.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p
          className={`${styles.paragraph} text-left md:flex-row max-w-[450px]`}
        >
          A single person was able to build all of this? Yes, they were. With
          code, the impossible becomes possible.
        </p>
      </div>
    </div>

    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex flex-row">
        <img
          src="https://cdn.discordapp.com/avatars/292743562213457920/2b5beacd7983a3024aac45825ffa86cb.png?size=1024"
          className="h-[75px] w-[75px] rounded-full"
        />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-white">
            scrappie
          </h4>
          <p className="font-poppins font-normal text-[20px] leading-[24px] my-[7px] text-dimWhite">
            the only dev
          </p>
        </div>
      </div>

      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        I lost my sanity and started working on Discord Bots. Best decision I've
        done in my entire life. 👍
      </p>
    </div>
  </section>
);

export default Developers;
