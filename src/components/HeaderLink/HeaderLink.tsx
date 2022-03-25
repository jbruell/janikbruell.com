import { ReactNode } from "react";
import styles from "./HeaderLink.module.scss";

export type HeaderLinkProps = {
  href: string;
  icon: string;
  children: ReactNode;
  onClick: () => void;
};

export default function HeaderLink(props: HeaderLinkProps): JSX.Element {
  const { href, icon, children, onClick } = props;

  return (
    <li className={styles.wrapper}>
      <a href={href} onClick={onClick}>
        <i className={`uil ${icon}`}></i> {children}
      </a>
    </li>
  );
}
