import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./chef.module.css";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons/faKitchenSet";
import React, { useState } from "react";

function Chef() {
  const addIngredients = () => {
    if (newIngredient.trim() !== "") {
      setIngredients((i) => [...i, newIngredient]);
      setNewIngredient("");
    }
  };

  const [newIngredient, setNewIngredient] = useState("");

  const [ingredients, setIngredients] = useState([]);

  const ingredientList = ingredients.map((ingredient, index) => (
    <li className={styles.chef_li} key={index}>
      {ingredient}
    </li>
  ));
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo_Wrapper}>
          <FontAwesomeIcon icon={faKitchenSet} />
          <h1>Chef Claude</h1>
        </div>
        <div className={styles.input_Wrapper}>
          <input
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            type="text"
            placeholder="Ingredients"
            name="ingredient"
          />
          <button onClick={addIngredients} aria-label="Add Ingredient">
            + Add Ingredient
          </button>
        </div>
        {/*Conditionally render a DIV*/}
        {ingredients.length > 0 ? (
          <div className={styles.ingredients_Wrapper}>
            <h2>Ingedients on hand:</h2>
            <ul className={styles.ul}>{ingredientList}</ul>
          </div>
        ) : null}

        <div className={styles.recipe_Wrapper}>
          <div className={styles.left}>
            <h4>Ready for a recipe?</h4>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className={styles.right}>
            <button>Get a recipe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chef;
