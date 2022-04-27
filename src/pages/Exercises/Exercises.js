import { useEffect, useState } from "react";
import styles from "./Exercises.module.css";
export default function Exercises({ user, setUser }) {
  const [exercise, setExercies] = useState([]);
  const [choice, setChoice] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    setChoice(e.target.innerHtml());
  };
  return (
    <div className={styles.fullContainer}>
      <h1 style={{ color: "white" }}>Welcome {user.name}</h1>
      <div className={styles.Exercises}>
        {/**the left side part  */}
        <div className={styles.left}>
          <div className={styles.titleLeft}> Navigate </div>
          <div>
            <ul className={styles.navigateOptions}>
              <li onClick={handleClick}>Type</li>
              <li>New Exercise</li>
              <li>Set A Chalenge</li>
              <li>Plan Your Week</li>
              <li>Music</li>
            </ul>
          </div>
        </div>

        {/* the middle part */}
        <div className={styles.exerciseTypeContainer}>
          <div className={styles.type}> Select Type </div>

          <div className={styles.oneTypeContainer}>
            <div className={styles.enduranceImage}></div>
            <p className={styles.oneTypeText}>Endurance</p>
          </div>

          <div className={styles.oneTypeContainer}>
            <div className={styles.strengthImage}></div>
            <p className={styles.oneTypeText}>Strength</p>
          </div>

          <div className={styles.oneTypeContainer}>
            <div className={styles.balanceImage}></div>
            <p className={styles.oneTypeText}>Balance</p>
          </div>

          <div className={styles.oneTypeContainer}>
            <div className={styles.flexibilityImage}></div>
            <p className={styles.oneTypeText}> Flexibility</p>
          </div>
        </div>
        {/* the middle part */}

        {/**the right side part  */}
        <div className={styles.right}>
          <div className={styles.titleRight}>
            <p>Timer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
