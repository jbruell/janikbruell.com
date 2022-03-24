import styles from "./Hero.module.scss";

export type HeroProps = {};

export default function Hero(props: HeroProps): JSX.Element {
  const {} = props;

  return (
    <section className={styles.wrapper}>
      <p className={styles.greeting}>Hi, my name is</p>
      <h1 className={styles.name}>
        Janik Brüll.<span>I am a Full Stack Developer.</span>
      </h1>
      <p className={styles.summary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi
        aut recusandae incidunt optio doloribus, quibusdam atque quis rem saepe
        facere eaque ad mollitia debitis, libero autem omnis molestiae magnam?
        Accusantium alias.
      </p>
    </section>
  );
}
