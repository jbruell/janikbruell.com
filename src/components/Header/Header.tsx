import styles from "./Header.module.scss";
import { HeaderLink, Icon, ThemeToggle } from "@components";
import { useState } from "react";
import useScrollPosition from "src/hooks/useScrollPosition";
import { useTheme } from "next-themes";
import useScrollDirection, { Direction } from "src/hooks/useScrollDirection";

export type HeaderProps = {};

export default function Header(props: HeaderProps): JSX.Element {
  const {} = props;

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
            <HeaderLink href="#home" icon="Home" onClick={closeNav}>
              Home
            </HeaderLink>
            <HeaderLink href="#about" icon="User" onClick={closeNav}>
              About
            </HeaderLink>
            <HeaderLink href="#career" icon="Briefcase" onClick={closeNav}>
              Career
            </HeaderLink>
          </ul>
          <Icon name="Times" className={styles.close} onClick={closeNav} />
        </div>

        <div className={styles.btns}>
          <ThemeToggle className={styles.themeToggle} />
          <div className={styles.toggle} onClick={() => setOpen(true)}>
            <Icon name="Apps" />
          </div>
        </div>
      </nav>
    </header>
  );
}
