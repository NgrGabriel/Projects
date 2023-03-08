import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";


export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate('/') : navigate('/auth');
    setIsLoggedIn( prevState => {
      return !prevState;
    })
  }

  return (
    <>
      <header>
        <Link to="/">
          <div className={styles.logo}>Social Media App</div>
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
            </li>

            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/friends">Friends</NavLink>}
            </li>

            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/chat">Chat</NavLink>}
            </li>

            <li className={styles.menuItem}>
              <button onClick={toggleAuth}>
                {isLoggedIn ? "Login" : "Logout"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}