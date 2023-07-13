import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/pages/Dashboard.module.scss";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleBankDetails = () => setIsVisible(!isVisible);

  return isLoggedIn ? (
    <div className={`${styles.Dashboard} col-12`}>
      <h1 className={styles.title}>Welcome back, {userInfo.username}!</h1>
      <p>
        We know <span className={styles.italic}>a lot</span> about you:
      </p>
      <div className={styles.userInfo}>
        <ul className={styles.infoList}>
          <li className={styles.info}>
            <span>First Name:</span> {userInfo.firstName}
          </li>
          <li className={styles.info}>
            <span>Last Name:</span> {userInfo.lastName}
          </li>
          <li className={styles.info}>
            <span>Age:</span> {userInfo.age}
          </li>
          <li className={styles.info}>
            <span>Gender:</span> {userInfo.gender}
          </li>
          <li className={styles.info}>
            <span>Height:</span> {userInfo.height} m
          </li>
          <li className={styles.info}>
            <span>Weight:</span> {userInfo.weight} kg
          </li>
          <li className={styles.info}>
            <span>Blood Type:</span> {userInfo.bloodGroup}
          </li>
          <li className={styles.info}>
            <span>Job:</span> {userInfo.company.title} at{" "}
            {userInfo.company.name}, {userInfo.company.address.address},{" "}
            {userInfo.company.address.city}
          </li>
        </ul>
      </div>
      <p>
        Forgot your bank details? Don't worry, we haven't!{" "}
        <span className={styles.link} onClick={toggleBankDetails}>
          Click here to see 'em!
        </span>
      </p>
      <div
        className={`${styles.userInfo} ${styles.bank} ${
          isVisible && styles.visible
        }`}
      >
        <ul className={styles.infoList}>
          <li className={styles.info}>
            <span>Card Number:</span> {userInfo.bank.cardNumber}
          </li>
          <li className={styles.info}>
            <span>Expiration Date:</span> {userInfo.bank.cardExpire}
          </li>
          <li className={styles.info}>
            <span>IBAN:</span> {userInfo.bank.iban}
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <p>
      <Link href="/login">Click here to log in</Link>
    </p>
  );
}
