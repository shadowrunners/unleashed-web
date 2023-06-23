import { styles } from "../style";
import { footerLinks } from "../constants";
import React from "react";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src='https://cdn.evelynbot.ml/upload/q_auto/evl_logo.webp'
          alt="evelyn"
          className="w-[128px] h-[128px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Unleash the full potential of your server.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div
            key={index}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    link !== footerLink.links[footerLink.links.length - 1] ? "mb-4" : "mb-0"
                  }`}
                  onClick={() => window.open(link.link)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <ul>
          <img src="https://cdn.evelynbot.ml/upload/q_auto/pwrdbyvercel.svg" alt="vercel" className="mb-2" />
          <img src="https://cdn.evelynbot.ml/upload/q_auto/pwrdbycfworkers.webp" alt="cfworkers" className="mb-2" />
          <img src="https://cdn.evelynbot.ml/upload/q_auto/pwrdbycldnry.webp" alt="cldnry" />
        </ul>
        
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
        © 2023 Shadowrunners, all rights reserved. Made with 💝 by scrappie.
      </p>
    </div>
  </section>
);

export default Footer;