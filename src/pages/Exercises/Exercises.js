import { useEffect, useState } from "react";
import styles from "./Exercises.module.css";
import Type from "../../components/Type/Type";
import NewExercise from "../../components/NewExercise/NewExercise";
import SetAChallenge from "../../components/SetAChallenge/SetAChallenge";
import PlanYourWeek from "../../components/PlanYourWeek/PlanYourWeek";
import Music from "../../components/Music/Music";
export default function Exercises({ user, setUser }) {
  //declare variables
  const [exercise, setExercies] = useState([]);
  const [choice, setChoice] = useState("Type");
  //functions
  const handleClick = (choice) => {
    // e.preventDefault();
    setChoice(choice);
  };
  //return
  return (
    <div className={styles.fullContainer}>
      <h1 style={{ color: "white" }}>Welcome {user.name}</h1>
      <div className={styles.Exercises}>
        {/**the left side part  */}
        <div className={styles.left}>
          <div className={styles.titleLeft}> Navigate </div>
          <div>
            <ul className={styles.navigateOptions}>
              <li onClick={() => handleClick("Type")}>Type</li>
              <li onClick={() => handleClick("New Exercise")}>New Exercise</li>
              <li onClick={() => handleClick("Set A Challenge")}>
                Set A Challenge
              </li>
              <li onClick={() => handleClick("Plan Your Week")}>
                Plan Your Week
              </li>
              <li onClick={() => handleClick("Music")}>Music</li>
            </ul>
          </div>
        </div>

        {/* the middle part */}
        {choice === "Type" ? (
          <Type />
        ) : choice === "New Exercise" ? (
          <NewExercise setChoice={setChoice} />
        ) : choice === "Set A Challenge" ? (
          <SetAChallenge />
        ) : choice === "Plan Your Week" ? (
          <PlanYourWeek />
        ) : (
          <Music />
        )}

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
