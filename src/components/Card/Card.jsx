import styles from "./Card.module.scss";

const Card = ({ data, onHandleClick, type }) => {
  const renderCard = () => {
    switch (type) {
      case "locations": {
        return (
          <div className={styles.Card} onClick={() => onHandleClick(data.id)}>
            <img src={data.imageLocation} alt={data.name} />
            <div className={styles.CardText}>
              <h3 className={styles.name}>{data.name}</h3>
              <p className={styles.rating}>{data.rating} ⭐</p>
            </div>
          </div>
        );
      }

      case "products":
      case "surprise": {
        return (
          <>
            <div className={styles.Card} onClick={() => onHandleClick(data.id)}>
              <img src={data.thumbnail} alt={data.title} />
              <div className={styles.CardText}>
                <h3 className={styles.name}>{data.title}</h3>
                <p className={styles.price}>{data.price} €</p>
              </div>
            </div>
          </>
        );
      }
    }
  };

  return renderCard();
};

export default Card;
