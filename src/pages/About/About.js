import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.exerciseTypeContainer}>
        <h1 className={styles.type}> About</h1>
        <p>
          This is a workout About that can help any individual to track his/her
          workout journey , by saving and creating new exercises and categorize
          them into 4 types of workout endurance , strength , balance and
          flexibility . Also can help to set challenges and to plan someone’s
          week ahead , the whole point of this app to motivate anyone who is
          looking forward to start a self Challenge journey
        </p>
      </div>
    </div>
  );
}
