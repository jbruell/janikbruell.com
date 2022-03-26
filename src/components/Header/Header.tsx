import styles from "./Header.module.scss";
import { HeaderLink } from "@components";
import { useState } from "react";
import useScrollPosition from "src/hooks/useScrollPosition";
import { useTheme } from "next-themes";
import useScrollDirection, { Direction } from "src/hooks/useScrollDirection";

export type HeaderProps = {};

export default function Header(props: HeaderProps): JSX.Element {
  const {} = props;

  const { setTheme } = useTheme();
  const showShadow = useScrollPosition((pos) => pos > 80);
  const scrollDirection = useScrollDirection();

  const [open, setOpen] = useState(false);

  function closeNav() {
    setOpen(false);
  }

  return (
    <header
      className={`${styles.header} ${
        showShadow ? styles.elevated : undefined
      } ${scrollDirection === Direction.DOWN ? styles.hidden : undefined}`}
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

        <div className={styles.btns}>
          <div
            className={styles.themeToggle}
            onClick={() =>
              setTheme((theme: string) => (theme === "dark" ? "light" : "dark"))
            }
          >
            <i className="uil uil-moon"></i>
          </div>
          <div className={styles.toggle} onClick={() => setOpen(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
