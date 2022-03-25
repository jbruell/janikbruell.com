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
        <i className="uil uil-calendar-alt"></i>
        {timeFrame}
      </div>
    </div>
  );
}
