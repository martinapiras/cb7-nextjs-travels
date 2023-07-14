import { useRouter } from "next/router";
import Card from "../../components/Card";
import { roomList } from "../../mocks/reservations.js";
import styles from "./index.module.scss";

export default function () {
  const router = useRouter();

  const onHandleClick = (id) => router.push(`/locations/${id}`);

  return (
    <div className={styles.Locations}>
      {roomList?.map((item) => (
        <Card
          key={item.id}
          data={item}
          onHandleClick={onHandleClick}
          type="locations"
        />
      ))}
    </div>
  );
}
