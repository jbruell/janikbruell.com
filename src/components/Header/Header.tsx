import styles from "./Header.module.scss";
import { HeaderLink } from "@components";
import { useState } from "react";
import useScrollPosition from "src/hooks/useScrollPosition";

export type HeaderProps = {};

export default function Header(props: HeaderProps): JSX.Element {
  const {} = props;

  const [open, setOpen] = useState(false);
  const showShadow = useScrollPosition((pos) => pos > 80);

  function closeNav() {
    setOpen(false);
  }

  return (
    <header
      className={`${styles.header} ${showShadow ? styles.elevated : undefined}`}
    >
      <nav>
        <a href="#" className={styles.logo}>
          Janik
        </a>
        <div className={`${styles.menu} ${open ? styles.open : undefined}`}>
          <ul>
            <HeaderLink href="#home" icon="uil-estate" onClick={closeNav}>
              Home
            </HeaderLink>
            <HeaderLink href="#about" icon="uil-user" onClick={closeNav}>
              About
            </HeaderLink>
            <HeaderLink href="#career" icon="uil-file-alt" onClick={closeNav}>
              Skills
            </HeaderLink>
            <HeaderLink
              href="#services"
              icon="uil-briefcase-alt"
              onClick={closeNav}
            >
              Services
            </HeaderLink>
            <HeaderLink href="#portfolio" icon="uil-scenery" onClick={closeNav}>
              Portfolio
            </HeaderLink>
            <HeaderLink href="#contact" icon="uil-message" onClick={closeNav}>
              Contact
            </HeaderLink>
          </ul>
          <i className={`uil uil-times ${styles.close}`} onClick={closeNav}></i>
        </div>

        <div className={styles.toggle} onClick={() => setOpen(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
