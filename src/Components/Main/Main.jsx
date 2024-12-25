import styles from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Main({ info }) {
  return (
    <main>
      {info.map((item, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.left_Wrapper}>
            <img
              className={styles.picture}
              src={item.image}
              alt={`${item.name} Image`}
            />
          </div>
          <div className={styles.right_Wrapper}>
            <div className={styles.country_Wrapper}>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <p className={styles.country}>{item.pais}</p>{" "}
              <a href="#">View on Google Maps</a>
            </div>
            <h3>{item.name}</h3>
            <div className={styles.text_Wrapper}>
              <p>{item.date}</p>
              <p>{item.description}</p>{" "}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Main;
