import { Colors } from "assets/Colors";
import { useState } from "react";
import styles from "styles/ColorMenu.module.css";

const ColorMenu = ({ checkedItemHandler }) => {
  return (
    <div className={styles.menus}>
      {Object.entries(Colors).map((v, i) => (
        <div className={styles.item} key={i}>
          <input
            type={"checkbox"}
            name={"colorSelect"}
            id={v[1]}
            onChange={(e) => checkedItemHandler(e, v[1])}
          />
          <label htmlFor={v[1]}>{v[1]}</label>
        </div>
      ))}
    </div>
  );
};

export default ColorMenu;
