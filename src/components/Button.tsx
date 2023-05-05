import { Styles } from "../types/styles";
import React from "react";

const Button = ({ styles }: { styles?: Styles | string }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} rounded-[10px]`}
    onClick={() => window.open("https://dash.evelynbot.ml")}
  >
    Get Started
  </button>
);

export default Button;
