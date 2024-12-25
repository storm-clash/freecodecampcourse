import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./object.module.css";
import {
  faCircleUser,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from "@fortawesome/fontawesome-svg-core";

function ObjectUserState() {
  const [contact, setContact] = useState({
    firstName: "Jesus",
    lastName: "Garcia",
    phone: "786 593 0447",
    email: "ifarocks26@gmail.com",
    description:
      " Description Of ... Some information about the User must be provided in here",
    isFavorite: true,
  });

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };
  // Can use this if whe are using React version 19
  const signUp = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const radio = formData.get("emplymentStatus");
    const data = {
      email: email,
      password: password,
      radio: radio,
    };
    console.log(data);
    //form.reset();
  };

  /*Good to Know
    const signUp = (formData) =>{
      //Get all the data from the form
        const data = Object.fromEntries(formData )

        //If there are a multyple check selector
        //need to do

        const checks = formData.getAll("name of the checks")

        const allData = {
        ...data,
        checks
        }

      }
  */

  //Version 18 and older
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emplymentStatus: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    setFormData({
      email: "",
      password: "",
      employmentStatus: "",
    });
  };

  return (
    <section>
      <div className={styles.upper}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.left_Up}>
              <FontAwesomeIcon className={styles.i} icon={faCircleUser} />
            </div>
            <div className={styles.left_Down}>
              <Rating
                isFavorite={contact.isFavorite}
                toggleFavorite={toggleFavorite}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_Up}>
              <h2>
                {contact.firstName} {contact.lastName}
              </h2>
              <div className={styles.info_Wrapper}>
                <FontAwesomeIcon icon={faPhone} />
                <p>{contact.phone}</p>
              </div>
              <div className={styles.info_Wrapper}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{contact.email}</p>
              </div>
            </div>
            <div className={`${styles.right_Up} ${styles.down}`}>
              <p>{contact.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Signup form</h1>
          <div className={styles.space}>
            <div className={styles.input_Wrapper}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="joe@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_Wrapper}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <fieldset className={styles.input_Wrapper}>
              <legend>Radio Buttons</legend>
              <div>
                <input
                  id="unemployed"
                  type="radio"
                  name="emplymentStatus"
                  value="unemployed"
                  checked={formData.emplymentStatus === "unemployed"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="unemployed">Unemplyed</label>
              </div>
              <div>
                <input
                  id="full"
                  type="radio"
                  name="emplymentStatus"
                  value="full-time"
                  checked={formData.emplymentStatus === "full-time"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="full">Full-Time</label>
              </div>
              <div>
                <input
                  id="part"
                  type="radio"
                  name="emplymentStatus"
                  value="part-time"
                  checked={formData.emplymentStatus === "part-time"}
                  onChange={handleChange}
                ></input>
                <label htmlFor="part">Part-Time</label>
              </div>
            </fieldset>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ObjectUserState;
