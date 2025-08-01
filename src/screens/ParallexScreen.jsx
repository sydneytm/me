import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "../components/Header";
// import parallexStyles from "../css/"
// import styles from "../css/parallexStyles.module.css";
import { D3 } from "./Math/D3";
import styles from "../css/parallexStyles.module.css";
export const ParallaxScreen = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            verticalAlign: "top",
            alignItems: "flex-start",
          }}
        >
          <p className={styles.scrollText}>Abstract Algebra Dihedral Groups</p>
          {/* <Header /> */}
        </ParallaxLayer>
        <D3 />
        <ParallaxLayer
          offset={0.5}
          // sticky={{ start: 1, end: 3 }}
          // style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          {/* <div className={`${styles.card} ${styles.sticky}`}> */}
          <p>I'm a sticky layer</p>
          {/* <D3 /> */}
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
