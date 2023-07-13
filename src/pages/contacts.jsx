import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import styles from "../styles/pages/Contacts.module.scss";

export default function () {
  return (
    <div className={styles.Contacts}>
      <h1>Contacts</h1>
      <div className={styles.container}>
        <div className={styles.contact}>
          <MdPlace />
          <p>123 Random St, 45678 City</p>
        </div>
        <div className={styles.contact}>
          <MdPhone />
          <p>
            <a href="tel:+1 234 567890">+1 234 567890</a>
          </p>
        </div>
        <div className={styles.contact}>
          <MdEmail />
          <p>
            <a href="mailto:address@domain.com">address@domain.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
