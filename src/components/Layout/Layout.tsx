import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}
