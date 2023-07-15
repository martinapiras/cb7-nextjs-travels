import styles from "./Summary.module.scss";

const Summary = ({ reverse }) => {
  return (
    <div className={`${styles.Summary} ${reverse && styles.reverse}`}>
      <div className={styles.image}>
        <img src="https://picsum.photos/300" alt="Summary" />
      </div>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          adipisci in debitis doloremque repellendus voluptates facilis ducimus
          eum laudantium similique.
        </p>
      </div>
    </div>
  );
};

export default Summary;
