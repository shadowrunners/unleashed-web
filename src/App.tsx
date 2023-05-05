import { styles } from "./style";
import {
  CTA,
  Developers,
  Features,
  Footer,
  Hero,
  Navbar,
  Stats,
} from "./components";
import React from "react";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxNav}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Features /> <Developers />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
