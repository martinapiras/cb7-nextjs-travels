import { roomList } from "../../mocks/reservations";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./Locations.module.scss";

export default function () {
  const router = useRouter();
  const [id, setId] = useState();
  const [location, setLocation] = useState({});

  useEffect(() => {
    setId(router.asPath.slice(11));

    if (id && id !== "[id]") {
      setLocation(roomList.filter((item) => item.id == id)[0]);
    }
  });

  return (
    <div className={styles.Locations}>
      {location && (
        <>
          <div className={styles.text}>
            <h1 className={styles.title}>{location.name}</h1>
            <p className={styles.location}>{location.location}</p>
            <p className={styles.price}>
              <span>{location.price}€</span>/night
            </p>
            <p className={styles.description}>{location.description}</p>
            <div className={styles.amenities}>
              {location.amenities &&
                location.amenities.map((amenity) => (
                  <span className={styles.amenity}>{amenity}</span>
                ))}
            </div>
          </div>
          <div className={styles.pics}>
            <img src={location.imageLocation} alt={location.name} />
          </div>
          <h2 className={styles.rating}>{location.rating} ⭐</h2>
          <div className={styles.reviews}>
            {location.reviews &&
              location.reviews.map((review) => (
                <div className={styles.review}>
                  <p className={styles.reviewContent}>"{review.comment}"</p>
                  <p className={styles.reviewAuthor}>by {review.author}</p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
