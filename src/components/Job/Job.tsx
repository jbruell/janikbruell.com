import { Icon } from "@components";
import styles from "./Job.module.scss";

export type JobProps = {
  title: string;
  subtitle: string;
  timeFrame: string;
};

export default function Job(props: JobProps): JSX.Element {
  const { title, subtitle, timeFrame } = props;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.subtitle}>{subtitle}</span>
      <div className={styles.calendar}>
        <Icon name="Calendar" />
        {timeFrame}
      </div>
    </div>
  );
}
