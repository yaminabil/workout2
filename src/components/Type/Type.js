import styles from "../../pages/Exercises/Exercises.module.css";
export default function Type() {
  return (
    <div>
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
    </div>
  );
}
