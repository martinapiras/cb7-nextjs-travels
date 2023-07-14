import styles from "./Products.module.scss";

export default function Products({ data }) {
  return (
    <div className={styles.Product}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperImages}>
          <img src={data.thumbnail} alt={data.title} />
          <div className={styles.gallery}>
            {data?.images?.map((image, i) => (
              <img key={i} src={image} alt={data.title} />
            ))}
          </div>
        </div>
        <div className={styles.wrapperText}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.rating}>{data.rating} ⭐</p>
          <h2 className={styles.price}>{data.price} €</h2>
          <p className={styles.stock}>
            In stock: <span>{data.stock}</span>
          </p>
        </div>
      </div>
      <h3>Description</h3>
      <p className={styles.description}>{data.description}</p>
      <ul className={styles.info}>
        <li>Brand: {data.brand}</li>
        <li>Category: {data.category}</li>
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;

  const res = await fetch(`https://dummyjson.com/products/${queryId}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
