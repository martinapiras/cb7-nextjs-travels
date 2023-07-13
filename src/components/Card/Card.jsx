import styles from "./Card.module.scss";

const Card = ({ data, onHandleClick }) => {
  return (
    <div className={styles.Card} onClick={() => onHandleClick(data.id)}>
      <img src={data.imageLocation} alt={data.name} />
      <div className={styles.CardText}>
        <h3 className={styles.name}>{data.name}</h3>
        <p className={styles.rating}>{data.rating} ⭐</p>
      </div>
    </div>
  );
};

export default Card;
