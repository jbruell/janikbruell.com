import { Children, ReactNode } from "react";
import styles from "./Timeline.module.scss";

export type TimelineProps = {
  children: ReactNode;
};

export default function Timeline(props: TimelineProps): JSX.Element {
  const { children } = props;

  const arrayChildren = Children.toArray(children);

  return (
    <div>
      {Children.map(arrayChildren, (child, index) => (
        <div className={styles.wrapper} key={index}>
          {child}
          <div>
            <span className={styles.dot}></span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.filler}></div>
        </div>
      ))}
    </div>
  );
}
