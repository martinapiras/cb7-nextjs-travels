import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import styles from "./index.module.scss";

export default function () {
  const router = useRouter();
  const [data, setData] = useState([]);

  const onHandleClick = (id) => router.push(`/surprise/${id}`);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((productData) => setData(productData.products));
  }, []);

  return (
    <div className={styles.surprise}>
      <h1 className={styles.title}>Surprise!</h1>
      <p>
        This page is identical to Products, but uses CSR to display its
        contents.
      </p>
      <div className={styles.wrapper}>
        {data?.map((product) => (
          <Card
            key={product.id}
            data={product}
            onHandleClick={onHandleClick}
            type={"surprise"}
          />
        ))}
      </div>
    </div>
  );
}
