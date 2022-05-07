import { useParams } from "react-router-dom";
import styles from "./OneExercise.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getExerciseById } from "../../utilities/exercises-api";
export default function OneExercise() {
  // declaring varibale
  const Navigate = useNavigate();
  const { type, id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [error, setError] = useState(null);
  const [editExercise, setEditExercise] = useState({
    name: "",
    type: "",
    duration: "",
    description: "",
  });
  // query
  const typeInput = document.getElementById("1");
  // handle back
  const handleBack = () => {
    Navigate(`/exercises/${type}`);
  };
  // get specific exercise
  const getExercise = async (id) => {
    try {
      const response = await getExerciseById(id);
      setExercise(response);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getExercise(id);
  }, []);
  // handle change
  const handleChange = (e) => {};
  // handle edit
  const handleEdit = (e) => {
    if (typeInput.style.color === "red") {
      typeInput.style.color = "black";
      typeInput.classList.add(`${styles.disabled}`);
    } else {
      typeInput.classList.remove(`${styles.disabled}`);
      typeInput.style.color = "red";
    }
  };

  return (
    <div className={styles.exerciseTypeContainer}>
      {exercise ? (
        <>
          <h1 className={styles.type}>{exercise.name} </h1>
          <div className={styles.exercisesList}>
            <ul>
              <div className={styles.oneListItem}>
                <li className={styles.disabled} id="1">
                  Name :
                  <input
                    name="name"
                    defaultValue={exercise.name}
                    type="text"
                    onChange={handleChange}
                  />
                </li>
                <button onClick={handleEdit}> Edit </button>
              </div>
              <div className={styles.oneListItem}>
                <li className={styles.disabled}>
                  Type :
                  <input
                    name="type"
                    defaultValue={exercise.type}
                    onChange={handleChange}
                  />
                </li>
                <button> Edit </button>
              </div>
              <div className={styles.oneListItem}>
                <li className={styles.disabled}>
                  Duration :
                  <input
                    name="duration"
                    defaultValue={exercise.duration}
                    onChange={handleChange}
                  />
                </li>
                <button> Edit </button>
              </div>
              <div className={styles.oneListItem}>
                <li className={styles.disabled}>
                  Description :
                  <input
                    name="description"
                    defaultValue={exercise.description}
                    onChange={handleChange}
                  />
                </li>
                <button> Edit </button>
              </div>
            </ul>
          </div>
        </>
      ) : (
        <h1 className={styles.type}>...loading</h1>
      )}

      <button onClick={handleBack} className={styles.back}>
        back
      </button>
    </div>
  );
}
