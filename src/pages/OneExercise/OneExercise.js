import { useParams } from "react-router-dom";
import styles from "./OneExercise.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getExerciseById } from "../../utilities/exercises-api";
import { editById } from "../../utilities/exercises-api";

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
  const nameInput = document.getElementById("1");
  const typeInput = document.getElementById("2");
  const durationInput = document.getElementById("3");
  const descriptionInput = document.getElementById("4");

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
  const handleChange = (e) => {
    setEditExercise({ ...editExercise, [e.target.name]: e.target.value });
  };
  // handle edit
  const handleEdit = (key) => {
    console.log(key);
    if (key.style.color === "red") {
      key.style.color = "black";
      key.classList.add(`${styles.disabled}`);
    } else {
      key.classList.remove(`${styles.disabled}`);
      key.style.color = "red";
    }
  };
  //handle submit
  const handleSubmit = async () => {
    const data = { ...editExercise };
    if (data.name === "") {
      data.name = exercise.name;
    }
    if (data.type === "") {
      data.type = exercise.type;
    }
    if (data.duration === "") {
      data.duration = exercise.duration;
    }
    if (data.description === "") {
      data.description = exercise.description;
    }
    console.log(data);

    try {
      console.log(exercise._id);
      console.log(data);
      const response = await editById(exercise._id, data);
    } catch (err) {
      setError(err.message);
    }
    Navigate(`/exercises`);
  };

  return (
    <div className={styles.exerciseTypeContainer}>
      {exercise ? (
        <>
          <h1 className={styles.type}>{exercise.name} </h1>
          <div className={styles.exercisesList}>
            <ul>
              <div className={styles.oneListItem}>
                <li
                  className={styles.disabled}
                  id="1"
                  style={{ color: "yellow" }}
                >
                  Name :
                  <input
                    name="name"
                    defaultValue={exercise.name}
                    type="text"
                    onChange={handleChange}
                  />
                </li>
                <button onClick={() => handleEdit(nameInput)}> Edit </button>
              </div>
              <div className={styles.oneListItem}>
                <li
                  className={styles.disabled}
                  id="2"
                  style={{ color: "black" }}
                >
                  Type :
                  <input
                    name="type"
                    defaultValue={exercise.type}
                    onChange={handleChange}
                  />
                </li>
                <button onClick={() => handleEdit(typeInput)}> Edit </button>
              </div>
              <div className={styles.oneListItem}>
                <li
                  className={styles.disabled}
                  id="3"
                  style={{ color: "black" }}
                >
                  Duration :
                  <input
                    name="duration"
                    defaultValue={exercise.duration}
                    onChange={handleChange}
                  />
                </li>
                <button onClick={() => handleEdit(durationInput)}>Edit</button>
              </div>
              <div className={styles.oneListItem}>
                <li
                  className={styles.disabled}
                  id="4"
                  style={{ color: "black" }}
                >
                  Description :
                  <input
                    name="description"
                    defaultValue={exercise.description}
                    onChange={handleChange}
                  />
                </li>
                <button onClick={() => handleEdit(descriptionInput)}>
                  Edit
                </button>
              </div>
              <button type="submit" onClick={handleSubmit}>
                Save
              </button>
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
