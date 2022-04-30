import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as exercisesAPI from "../../utilities/exercises-api";
import styles from "./NewExercise.module.css";
import { getUser } from "../../utilities/users-service";
export default function NewExercise({ setChoice }) {
  //declare variables
  const [exercise, setExercie] = useState({
    user: getUser()._id,
    name: "",
    type: "",
    duration: "",
    description: "",
    repetition: 0,
    err: "",
  });

  const Navigate = useNavigate();

  // handlers
  const handleChange = (evt) => {
    setExercie({ ...exercise, [evt.target.name]: evt.target.value, err: "" });
  };
  const handleCreate = async (evt) => {
    try {
      evt.preventDefault();
      const userData = exercise;
      delete userData.err;
      const response = await exercisesAPI.Create(userData);
      setChoice("Type");
    } catch (err) {
      setExercie({ ...exercise, err: "creation failed " });
    }
  };

  return (
    <div>
      <div className={styles.exerciseTypeContainer}>
        <div className={styles.type}> New Exercise </div>
        {/* form start from here  */}
        <form className={styles.NewExerciseForm} onSubmit={handleCreate}>
          <div>
            <label>Name : </label>
            <input onChange={handleChange} name="name" />
          </div>
          <br />
          <div>
            <label style={{ textAlign: "left", width: "250px" }}>Type : </label>
            <ul>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios1"
                  value="Endurance"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Endurance
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios2"
                  value="Strength"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Strength
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios3"
                  value="Balance"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="exampleRadios3">
                  Balance
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios4"
                  value="Flexibility"
                  onChange={handleChange}
                />
                <label class="form-check-label" for="exampleRadios4">
                  Flexibility
                </label>
              </div>
            </ul>
          </div>
          <br />
          {/************************ */}

          <div>
            <label>Duration : </label>
            <input onChange={handleChange} name="duration" />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <textarea onChange={handleChange} name="description" />
          </div>
          <button type="submit">Create </button>
          {/* form ends  here  */}
        </form>
        <p>{exercise.err}</p>
      </div>
    </div>
  );
}
