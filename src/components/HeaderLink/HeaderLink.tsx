import { ReactNode } from "react";
import { useCurrentSection } from "src/context/CurrentSection";
import styles from "./HeaderLink.module.scss";

export type HeaderLinkProps = {
  href: string;
  icon: string;
  children: ReactNode;
  onClick: () => void;
};

export default function HeaderLink(props: HeaderLinkProps): JSX.Element {
  const { href, icon, children, onClick } = props;
  const section = useCurrentSection();

  const active = href === `#${section}`;

  return (
    <li className={styles.wrapper}>
      <a
        href={href}
        onClick={onClick}
        className={active ? styles.active : undefined}
      >
        <i className={`uil ${icon}`}></i> {children}
      </a>
    </li>
  );
}
