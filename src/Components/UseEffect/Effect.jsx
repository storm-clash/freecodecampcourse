import React, { useState, useEffect } from "react";
import styles from "./effect.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor, faImage } from "@fortawesome/free-solid-svg-icons";
import { httpGet } from "../../Services/APIServices";

function Effect() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomTex: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [starWarsData, setStarWarsData] = useState("");

  const change = (e) => {
    const { name, value } = e.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await httpGet();
  //         console.log("Fetched data:", response);
  //         setStarWarsData(JSON.stringify(response, null, 2));
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  const fetchData = async () => {
    try {
      const endPoint = "/get_memes";
      const response = await httpGet(endPoint);
      console.log("Fetched data:", response);
      setStarWarsData(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faMeteor} className={styles.icon} />
      </div>
      <div className={styles.inputs}>
        <div className={styles.item1}>
          <label htmlFor="top_Text">Top Text</label>
          <input
            id="top_Text"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={change}
          ></input>
        </div>
        <div className={styles.item2}>
          <label htmlFor="bottom_Text">Bottom Text</label>
          <input
            id="bottom_Text"
            type="text"
            name="bottomText"
            value={meme.bottomTex}
            onChange={change}
          ></input>
        </div>
        <div className={styles.item3}>
          <button onClick={fetchData}>
            Get a new meme Imagen
            <FontAwesomeIcon icon={faImage} />
          </button>
        </div>
      </div>
      <div className={styles.preview}>
        <img src={meme.imageUrl} alt=""></img>
        <span className={styles.top}>{meme.topText}</span>
        <span className={styles.bottom}>{meme.bottomTex}</span>
      </div>

      <div>
        <h1>Star Wars Data</h1>
        <pre>{starWarsData}</pre> {/* Display the fetched data */}
      </div>
    </section>
  );
}

export default Effect;
