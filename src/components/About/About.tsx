import styles from "./About.module.scss";
import Image from "next/image";
import { Icon } from "@components";

export type AboutProps = {};

export default function About(props: AboutProps): JSX.Element {
  const {} = props;

  return (
    <section className={`${styles.wrapper} section`} id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Nice to meet you!</span>

      <div className={styles.container}>
        <img
          className={styles.image}
          src="/assets/img/JanikBruell-Portrait.png"
          alt="My portrait"
        />
        <div className={styles.data}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            labore modi, dolor ad quaerat eum culpa atque similique consectetur
            accusamus? Error officia debitis maxime ipsam.
          </p>

          <div className={styles.info}>
            <div>
              <span className={styles.title}>03+</span>
              <span className={styles.name}>
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className={styles.title}>03+</span>
              <span className={styles.name}>
                projects <br /> experience
              </span>
            </div>
            <div>
              <span className={styles.title}>03+</span>
              <span className={styles.name}>
                companies <br /> experience
              </span>
            </div>
          </div>

          <div className={styles.buttons}>
            <a href="/cv.pdf" className="button button--flex">
              Download CV
              <Icon name="Download" className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
