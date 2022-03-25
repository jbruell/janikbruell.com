import { Job, Timeline } from "@components";
import styles from "./Career.module.scss";

export type CareerProps = {};

export default function Career(props: CareerProps): JSX.Element {
  const {} = props;

  return (
    <section className={`${styles.wrapper} section`}>
      <h2 className="section__title">Career</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className={styles.container}>
        <Timeline>
          <Job
            title="Full Stack Developer"
            subtitle="Fashion Digital GmbH"
            timeFrame="04/2022 - present"
          />
          <Job
            title="Full Stack Developer"
            subtitle="VEDA GmbH"
            timeFrame="08/2020 - 03/2022"
          />
          <Job
            title="Backend Developer"
            subtitle="topsystem GmbH"
            timeFrame="07/2019 - 08/2020"
          />
          <Job
            title="Apprentice CS (Software Development)"
            subtitle="topsystem GmbH"
            timeFrame="02/2017 - 07/2019"
          />
          <Job
            title="Intern in Software Development"
            subtitle="topsystem GmbH"
            timeFrame="01/2017 - 02/2017"
          />
        </Timeline>
      </div>
    </section>
  );
}
