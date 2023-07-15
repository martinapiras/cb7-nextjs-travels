import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.imageWrapper}>
        <img src="https://picsum.photos/1200/900" alt="hero image" />
      </div>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
};
export default Hero;
