import { Icon } from "@components";
import useScrollPosition from "src/hooks/useScrollPosition";
import styles from "./ScrollUp.module.scss";

export type ScrollUpProps = {};

export default function ScrollUp(props: ScrollUpProps): JSX.Element {
  const {} = props;

  const show = useScrollPosition((pos) => pos > 560);

  return (
    <a
      href="#"
      className={`${styles.wrapper} ${show ? styles.visible : undefined}`}
    >
      <Icon name="ArrowUp" />
    </a>
  );
}
