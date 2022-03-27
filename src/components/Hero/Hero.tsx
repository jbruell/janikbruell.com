import { Icon } from "@components";
import styles from "./Hero.module.scss";

export type HeroProps = {};

export default function Hero(props: HeroProps): JSX.Element {
  const {} = props;

  return (
    <section className={`${styles.wrapper} section`} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.social}>
            <a
              href="https://github.com/jbruell"
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="LinkedIn" />
            </a>
            <a
              href="https://www.linkedin.com/in/janik-bruell/"
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="Github" />
            </a>
          </div>

          <div className={styles.image}>
            <svg
              className={styles.blob}
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className={styles.blobImage}
                  href="/assets/img/portrait-no-bg.png"
                  x={-75}
                  y={-45}
                />
              </g>
            </svg>
          </div>

          <div className={styles.data}>
            <h1 className={styles.title}>Hi, I&apos;m Janik</h1>
            <h3 className={styles.subtitle}>Full Stack Developer</h3>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              voluptates.
            </p>
            <a href="#contact" className="button button--flex" role="button">
              Contact Me <Icon name="Message" className="button__icon" />
            </a>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <a href="#about" className="button--flex">
            <Icon name="Mouse" className={styles.mouseIcon} />
            <span>Scroll down</span>
            <Icon name="ArrowDown" className={styles.arrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
