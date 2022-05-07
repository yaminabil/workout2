import styles from "./Type.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//
export default function Type({ user }) {
  //declaring variables
  const [active, setActive] = useState("");

  const Navigate = useNavigate();
  // functions

  const handleClick = (e) => {
    setActive(e.target.value);
    Navigate(`/exercises/${e.target.value}`);
  };

  return (
    <div>
      <div className={styles.exerciseTypeContainer}>
        <div className={styles.type}> Select Type </div>

        <div className={styles.oneTypeContainer}>
          <div className={styles.enduranceImage}></div>
          <input
            type="button"
            className={styles.oneTypeText}
            value="Endurance"
            onClick={handleClick}
          />
        </div>

        <div className={styles.oneTypeContainer}>
          <div className={styles.strengthImage}></div>
          <input
            type="button"
            className={styles.oneTypeText}
            value="Strength"
            onClick={handleClick}
          />
        </div>

        <div className={styles.oneTypeContainer}>
          <div className={styles.balanceImage}></div>
          <input
            type="button"
            className={styles.oneTypeText}
            value="Balance"
            onClick={handleClick}
          />
        </div>

        <div className={styles.oneTypeContainer}>
          <div className={styles.flexibilityImage}></div>
          <input
            type="button"
            className={styles.oneTypeText}
            value="Flexibility"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
