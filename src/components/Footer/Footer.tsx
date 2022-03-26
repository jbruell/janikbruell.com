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
          <a href="github.com" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="linkedin.com" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        &#169; Janik Brüll. All rights reserved.
      </p>
    </footer>
  );
}
