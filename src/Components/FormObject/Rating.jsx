import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./rating.module.css";

function Rating({ isFavorite, toggleFavorite }) {
  const starCount = isFavorite ? 5 : 3;

  const stars = Array.from({ length: starCount }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      className={styles.star}
      icon={faStar}
      onClick={toggleFavorite}
    />
  ));

  return <div className={styles.rating}>{stars}</div>;
}

export default Rating;
