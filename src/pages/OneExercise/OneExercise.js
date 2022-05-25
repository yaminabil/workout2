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
  const [active, setActive] = useState("nothing");
  const [editExercise, setEditExercise] = useState({
    name: "",
    type: "",
    duration: "",
    description: "",
  });

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
    if (active !== key) {
      setActive(key);
    } else {
      setActive("nothing");
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
    <div className={styles.main}>
      <div className={styles.exerciseTypeContainer}>
        {exercise ? (
          <>
            <h1 className={styles.type}>{exercise.name} </h1>
            <div className={styles.exercisesList}>
              <ul>
                {/* first li in the ul */}
                {active === "name" ? (
                  <div className={styles.oneListItem}>
                    <li style={{ color: "red" }}>
                      name:
                      <input
                        name="name"
                        defaultValue={exercise.name}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("name")}> Edit </button>
                  </div>
                ) : (
                  <div className={styles.oneListItem}>
                    <li className={styles.disabled} style={{ color: "black" }}>
                      name:
                      <input
                        name="name"
                        defaultValue={exercise.name}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("name")}> Edit </button>
                  </div>
                )}
                {/* second li in the ul */}
                {active === "type" ? (
                  <div className={styles.oneListItem}>
                    <li style={{ color: "red" }}>
                      type:
                      <input
                        name="type"
                        defaultValue={exercise.type}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("type")}> Edit </button>
                  </div>
                ) : (
                  <div className={styles.oneListItem}>
                    <li className={styles.disabled} style={{ color: "black" }}>
                      type:
                      <input
                        name="type"
                        defaultValue={exercise.type}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("type")}> Edit </button>
                  </div>
                )}
                {/* third li in the ul */}
                {active === "duration" ? (
                  <div className={styles.oneListItem}>
                    <li style={{ color: "red" }}>
                      duration:
                      <input
                        name="duration"
                        defaultValue={exercise.duration}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("duration")}>
                      {" "}
                      Edit{" "}
                    </button>
                  </div>
                ) : (
                  <div className={styles.oneListItem}>
                    <li className={styles.disabled} style={{ color: "black" }}>
                      duration:
                      <input
                        name="duration"
                        defaultValue={exercise.duration}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("duration")}>
                      {" "}
                      Edit{" "}
                    </button>
                  </div>
                )}
                {/* third li in the ul */}
                {active === "description" ? (
                  <div className={styles.oneListItem}>
                    <li style={{ color: "red" }}>
                      description:
                      <input
                        name="description"
                        defaultValue={exercise.description}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("description")}>
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className={styles.oneListItem}>
                    <li className={styles.disabled} style={{ color: "black" }}>
                      description:
                      <input
                        name="description"
                        defaultValue={exercise.description}
                        onChange={handleChange}
                      />
                    </li>
                    <button onClick={() => handleEdit("description")}>
                      {" "}
                      Edit{" "}
                    </button>
                  </div>
                )}

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
    </div>
  );
}
