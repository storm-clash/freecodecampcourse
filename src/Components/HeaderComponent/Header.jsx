import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles.left_Wrapper}>
        <img
          className={styles.globe}
          src="src/assets/globe.svg"
          alt="Globe Imagen"
        />
        <h1>My Travel Journal.</h1>
      </div>
      <div className={styles.right_Wrapper}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Chef">Chef</Link>
          </li>
          <li>
            <Link to="/Form">Forms</Link>
          </li>
          <li>
            <Link to="/Meme_Generator">Meme Generator</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
