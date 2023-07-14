import { useRouter } from "next/router";
import Card from "@/components/Card";
import styles from "./index.module.scss";

export default function ({ data }) {
  const router = useRouter();
  const onHandleClick = (id) => router.push(`/products/${id}`);

  return (
    <div className={styles.Products}>
      <h1 className={styles.title}>Products</h1>
      <p>This page uses SSR to display its contents.</p>
      <div className={styles.wrapper}>
        {data?.map((product) => (
          <Card
            key={product.id}
            data={product}
            onHandleClick={onHandleClick}
            type={"products"}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data: data.products,
    },
  };
}
