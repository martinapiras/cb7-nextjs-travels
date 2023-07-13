import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} col-12`}>
      <p className={styles.copyright}>(C) 2023 Edgemony</p>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
