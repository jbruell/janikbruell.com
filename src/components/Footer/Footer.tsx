import { Icon } from "@components";
import styles from "./Footer.module.scss";

export type FooterProps = {};

export default function Footer(props: FooterProps): JSX.Element {
  const {} = props;

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Janik</h1>
          <span className={styles.subtitle}>Full Stack Developer</span>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
        </ul>

        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/janik-bruell/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="LinkedIn" className={styles.icon} />
          </a>
          <a href="https://github.com/jbruell" rel="noreferrer" target="_blank">
            <Icon name="Github" className={styles.icon} />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        &#169; Janik Brüll. All rights reserved.
      </p>
    </footer>
  );
}
