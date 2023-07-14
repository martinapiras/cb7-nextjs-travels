import { Logo } from "../../svgs";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
    alert("Successfully logged out");
  };

  return (
    <header className={`${styles.Header} col-12`}>
      <Link href="/">
        <div className={styles.logo}>
          <Logo />
        </div>
      </Link>
      <nav className={styles.navigation}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={`${styles.mobileNav} ${isOpen && styles.open}`}>
          <ul className={styles.mobileNavLinks} onClick={toggleMenu}>
            <Link href="/locations">
              <li className={styles.mobileNavLink}>Locations</li>
            </Link>
            <Link href="/products">
              <li className={styles.mobileNavLink}>Products</li>
            </Link>
            <Link href="/surprise">
              <li className={styles.mobileNavLink}>Surprise</li>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/login" onClick={handleLogOut}>
                  <li className={styles.mobileNavLink}>Log out</li>
                </Link>
                <Link href="/dashboard">
                  <li className={styles.mobileNavLink}>Dashboard</li>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <li className={styles.mobileNavLink}>Login</li>
              </Link>
            )}
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <Link href="/locations">
            <li className={styles.navLink}>Locations</li>
          </Link>
          <Link href="/products">
            <li className={styles.navLink}>Products</li>
          </Link>
          <Link href="/surprise">
            <li className={styles.navLink}>Surprise</li>
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/login" onClick={handleLogOut}>
                <li className={styles.navLink}>Log out</li>
              </Link>
              <Link href="/dashboard">
                <li className={styles.navLink}>Dashboard</li>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <li className={styles.navLink}>Login</li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
