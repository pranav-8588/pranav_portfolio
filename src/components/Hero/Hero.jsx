import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pranav</h1>
        <p className={styles.description}>
        Aspiring full-stack developer with 6 months of hands-on experience as a senior technical associate, I bring expertise in Azure, Python, and SQL from my professional background, complemented by a robust portfolio of MERN stack projects that demonstrate my skills in end-to-end web development.. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:pranavkumar8588@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
